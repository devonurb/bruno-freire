/** Ciclo: entender → analisar → decidir → construir → evoluir */
export function Principles() {
  return (
    <svg className="ill" viewBox="0 0 460 300" role="img" aria-label="Ciclo: entender, analisar, decidir, construir, evoluir">
      <rect width="460" height="300" fill="#fff" />
      <g fontFamily="Oswald, sans-serif" fontSize="14" letterSpacing="1.5" textAnchor="middle">
        <circle cx="230" cy="150" r="98" fill="none" stroke="#d0d0d0" strokeDasharray="3 6" />
        <circle cx="230" cy="150" r="46" fill="#E4002B" />
        <text x="230" y="146" fill="#fff" fontSize="13">VALOR</text>
        <text x="230" y="163" fill="#fff" fontSize="11">ENTREGUE</text>
        <g fill="#111">
          <circle cx="230" cy="52" r="6" /><text x="230" y="34">ENTENDER</text>
          <circle cx="323" cy="120" r="6" /><text x="372" y="124">ANALISAR</text>
          <circle cx="288" cy="229" r="6" /><text x="330" y="262">DECIDIR</text>
          <circle cx="172" cy="229" r="6" /><text x="130" y="262">CONSTRUIR</text>
          <circle cx="137" cy="120" r="6" /><text x="88" y="124">EVOLUIR</text>
        </g>
      </g>
    </svg>
  )
}
