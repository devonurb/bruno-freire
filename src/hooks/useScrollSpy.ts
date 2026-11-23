import { useEffect, useState, type RefObject } from 'react'

/**
 * Atualiza a altura do preenchimento da faixa (progresso de leitura)
 * e devolve o id da seção visível no momento.
 */
export function useScrollSpy(
  timelineRef: RefObject<HTMLElement | null>,
  fillRef: RefObject<HTMLElement | null>,
  ids: string[],
) {
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const tl = timelineRef.current
      const fill = fillRef.current
      const vh = window.innerHeight
      if (tl && fill) {
        const r = tl.getBoundingClientRect()
        const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / tl.offsetHeight))
        fill.style.height = `${p * 100}%`
      }
      setScrolled(window.scrollY > 10)
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < vh * 0.45) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [timelineRef, fillRef, ids])

  return { active, scrolled }
}
