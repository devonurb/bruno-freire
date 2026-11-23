const layers = [
  { y: 48, label: 'React · TypeScript (UI)' },
  { y: 104, label: 'REST API · Spring Boot · Spring Security', hot: true },
  { y: 160, label: 'Domínio · DDD · SOLID' },
  { y: 216, label: 'PostgreSQL · modelagem de dados' },
]

/** Diagrama de camadas da clean architecture. */
export function Layers() {
  return (
    <svg className="ill" viewBox="0 0 460 290" role="img" aria-label="Diagrama de camadas: React, API REST Spring Boot, domínio, PostgreSQL, tudo em Docker">
      <rect width="460" height="290" fill="#141414" />
      <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#cfcfcf">
        <rect x="20" y="18" width="420" height="254" fill="none" stroke="#444" strokeDasharray="4 4" />
        <text x="30" y="34" fill="#777">docker compose</text>
        {layers.map((l, i) => (
          <g key={l.label}>
            <rect x="60" y={l.y} width="340" height="38" fill={l.hot ? '#E4002B' : '#1f1f1f'} stroke={l.hot ? 'none' : '#555'} />
            <text x="230" y={l.y + 24} textAnchor="middle" fill={l.hot ? '#fff' : undefined}>{l.label}</text>
            {i < layers.length - 1 && (
              <>
                <path d={`M230 ${l.y + 38}v14`} stroke="#E4002B" strokeWidth="2" />
                <path d={`M225 ${l.y + 48}l5 6 5-6`} fill="none" stroke="#E4002B" strokeWidth="2" />
              </>
            )}
          </g>
        ))}
      </g>
    </svg>
  )
}
