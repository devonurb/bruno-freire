const courses = [
  { n: '01', l1: 'LETRAMENTO', l2: 'DIGITAL BÁSICO', bg: '#111', tag: '#E4002B', fg: '#fff' },
  { n: '02', l1: 'BANCO DE', l2: 'DADOS', bg: '#E4002B', tag: '#111', fg: '#fff' },
  { n: '03', l1: 'CANVA /', l2: 'CAPCUT', bg: '#f0f0f0', tag: '#E4002B', fg: '#111' },
  { n: '04', l1: 'WEB', l2: 'DESIGN', bg: '#f0f0f0', tag: '#E4002B', fg: '#111' },
]

/** Quadro dos cursos ministrados na SECTI. */
export function Courses() {
  return (
    <svg className="ill" viewBox="0 0 460 280" role="img" aria-label="Quadro de cursos ministrados">
      <rect width="460" height="280" fill="#fff" />
      <g fontFamily="Oswald, sans-serif" letterSpacing="1">
        {courses.map((c, i) => (
          <g key={c.n} transform={`translate(${i % 2 ? 238 : 24},${i < 2 ? 24 : 146})`}>
            <rect width="198" height="106" fill={c.bg} stroke={c.bg === '#f0f0f0' ? '#ddd' : 'none'} />
            <text x="16" y="34" fill={c.tag} fontSize="12">CURSO {c.n}</text>
            <text x="16" y="62" fill={c.fg} fontSize="19">{c.l1}</text>
            <text x="16" y="86" fill={c.fg} fontSize="19">{c.l2}</text>
          </g>
        ))}
      </g>
    </svg>
  )
}
