const kpis = [
  { x: 116, value: '248', label: 'ALUNOS', red: true },
  { x: 228, value: '12', label: 'TURMAS' },
  { x: 340, value: '87%', label: 'FREQUÊNCIA' },
]

/** Wireframe do painel do projeto EduTrack. */
export function Dashboard() {
  return (
    <svg className="ill" viewBox="0 0 460 260" role="img" aria-label="Wireframe de painel de turmas">
      <rect width="460" height="260" fill="#fff" />
      <rect width="96" height="260" fill="#111" />
      <g fill="#555">
        <rect x="16" y="22" width="56" height="8" />
        <rect x="16" y="50" width="64" height="6" />
        <rect x="16" y="68" width="52" height="6" />
        <rect x="16" y="86" width="60" height="6" />
      </g>
      <rect x="16" y="48" width="4" height="10" fill="#E4002B" />
      <g fontFamily="Oswald, sans-serif">
        <text x="116" y="36" fontSize="16" fill="#111">TURMAS ATIVAS</text>
        {kpis.map((k) => (
          <g key={k.label} transform={`translate(${k.x},52)`}>
            <rect width="102" height="62" fill="#f3f3f3" />
            <text x="12" y="26" fontSize="22" fill={k.red ? '#E4002B' : '#111'}>{k.value}</text>
            <text x="12" y="46" fontSize="10" fill="#777">{k.label}</text>
          </g>
        ))}
      </g>
      <g transform="translate(116,130)">
        <rect width="326" height="112" fill="none" stroke="#e2e2e2" />
        <g stroke="#eee">
          <line x1="10" y1="100" x2="316" y2="100" />
          <line x1="10" y1="60" x2="316" y2="60" />
          <line x1="10" y1="20" x2="316" y2="20" />
        </g>
        <polyline points="10,92 50,70 90,78 130,48 170,56 210,30 250,38 290,16 316,22" fill="none" stroke="#E4002B" strokeWidth="2.5" />
      </g>
    </svg>
  )
}
