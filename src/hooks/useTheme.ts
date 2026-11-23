import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
const KEY = 'bf-theme'

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'dark' || v === 'light' ? v : null
  } catch {
    return null
  }
}

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> }
}

/**
 * Tema claro/escuro.
 * - Primeira visita: segue o sistema (prefers-color-scheme)
 * - Escolha do usuário: salva no localStorage
 * - Troca com revelação circular via View Transitions API (com fallback)
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(
    () => (document.documentElement.getAttribute('data-theme') as Theme) || 'light',
  )

  const apply = useCallback((next: Theme, persist: boolean) => {
    document.documentElement.setAttribute('data-theme', next)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#0d0d0d' : '#fafafa')
    if (persist) {
      try {
        localStorage.setItem(KEY, next)
      } catch {
        /* armazenamento indisponível */
      }
    }
    setThemeState(next)
  }, [])

  // acompanha o sistema enquanto o usuário não escolher manualmente
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      if (!readStored()) apply(e.matches ? 'dark' : 'light', false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [apply])

  const toggle = useCallback(
    (x: number, y: number) => {
      const next: Theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
      const doc = document as ViewTransitionDoc
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!doc.startViewTransition || reduce) {
        apply(next, true)
        return next
      }
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
      const vt = doc.startViewTransition(() => apply(next, true))
      vt.ready
        .then(() => {
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
            { duration: 650, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' },
          )
        })
        .catch(() => {})
      return next
    },
    [apply],
  )

  return { theme, toggle }
}
