import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../hooks/useTheme'

/** Interruptor sol/lua + atalho de teclado "T" + aviso rápido. */
export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const btn = useRef<HTMLButtonElement>(null)
  const [toast, setToast] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  const run = (x?: number, y?: number) => {
    const b = btn.current?.getBoundingClientRect()
    const next = toggle(x || (b ? b.left + b.width / 2 : 0), y || (b ? b.top + b.height / 2 : 0))
    setToast(next === 'dark' ? 'Modo escuro' : 'Modo claro')
    clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setToast(null), 1600)
  }

  // atalho "T" (ignorado enquanto se digita em campos)
  const runRef = useRef(run)
  useEffect(() => {
    runRef.current = run
  })
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || '').toUpperCase()
      if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.metaKey && !e.altKey && !/INPUT|TEXTAREA|SELECT/.test(tag)) {
        runRef.current()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <button
        ref={btn}
        className="theme"
        type="button"
        aria-label="Alternar modo escuro"
        aria-pressed={theme === 'dark'}
        title="Alternar tema (tecla T)"
        onClick={(e) => run(e.clientX, e.clientY)}
      >
        <span className="knob" />
        <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </svg>
        <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
        </svg>
      </button>
      <div className={`toast${toast ? ' show' : ''}`} role="status">
        {toast}
        {toast && <kbd>T</kbd>}
      </div>
    </>
  )
}
