import { useEffect, useRef, useState } from 'react'

const boxes = [
  { x: 164, y: 58, w: 48, h: 36, label: 'car 0.91', red: false },
  { x: 244, y: 106, w: 66, h: 48, label: 'car 0.88', red: false },
  { x: 106, y: 196, w: 92, h: 64, label: 'bus 0.94', red: true },
  { x: 268, y: 210, w: 42, h: 42, label: 'moto 0.86', red: true },
]

/** Ilustração de detecção/contagem de veículos (YOLO) com contador animado. */
export function VehicleDetection() {
  const ref = useRef<SVGSVGElement>(null)
  const [count, setCount] = useState(127)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timer: number | undefined
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && timer === undefined) {
        timer = window.setInterval(() => setCount((c) => c + Math.floor(Math.random() * 3)), 900)
      }
    })
    io.observe(el)
    return () => {
      io.disconnect()
      if (timer !== undefined) clearInterval(timer)
    }
  }, [])

  return (
    <svg ref={ref} className="ill" viewBox="0 0 460 280" role="img" aria-label="Ilustração de detecção e contagem de veículos com caixas delimitadoras">
      <defs>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2a2a" />
          <stop offset="1" stopColor="#121212" />
        </linearGradient>
      </defs>
      <rect width="460" height="280" fill="url(#road)" />
      <polygon points="170,0 290,0 460,280 0,280" fill="#1b1b1b" />
      <line x1="230" y1="0" x2="230" y2="280" stroke="#555" strokeWidth="3" strokeDasharray="18 16" />
      <line x1="40" y1="190" x2="420" y2="190" stroke="#E4002B" strokeWidth="2" />
      <text x="44" y="184" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#E4002B">LINHA DE CONTAGEM</text>
      <g fontFamily="JetBrains Mono, monospace" fontSize="9">
        {boxes.map((b) => (
          <g key={b.label}>
            <rect x={b.x + 4} y={b.y + 4} width={b.w - 8} height={b.h - 8} rx="5" fill="#3a3a3a" />
            <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="none" strokeWidth="1.5" stroke={b.red ? '#E4002B' : '#fff'} />
            <rect x={b.x} y={b.y - 12} width={b.label.length * 6 + 14} height="12" fill={b.red ? '#E4002B' : '#fff'} />
            <text x={b.x + 3} y={b.y - 3} fill={b.red ? '#fff' : '#111'}>{b.label}</text>
          </g>
        ))}
      </g>
      <rect x="330" y="14" width="116" height="46" fill="#000" opacity=".75" />
      <text x="340" y="32" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#999">veículos/trecho</text>
      <text x="340" y="52" fontFamily="Oswald, sans-serif" fontSize="18" fill="#fff">{String(count).padStart(4, '0')}</text>
    </svg>
  )
}
