import { useEffect } from 'react'

/** Anima a entrada dos elementos com a classe .rv quando surgem na tela. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.rv')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
