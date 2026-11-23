import type { ReactNode } from 'react'

const KEYWORDS = new Set([
  'public', 'private', 'final', 'class', 'record', 'return', 'new', 'if', 'throw', 'static', 'void',
])

/**
 * Realce de sintaxe minimalista (monocromático, com acento vermelho),
 * suficiente para os cartões de código do portfólio.
 */
export function highlight(code: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*")|(\b\d+\b)|([A-Za-z_][A-Za-z0-9_]*)|(✖|!(?= )|✔)/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index))
    const [tok, comment, str, num, word, mark] = m
    const key = i++
    if (comment) out.push(<span key={key} className="c-c">{tok}</span>)
    else if (str) out.push(<span key={key} className="c-s">{tok}</span>)
    else if (num) out.push(<span key={key} className="c-k">{tok}</span>)
    else if (word && KEYWORDS.has(word)) out.push(<span key={key} className="c-k">{tok}</span>)
    else if (word && /^[A-Z]/.test(word) && /^(Engineer|Lancamento)$/.test(word)) out.push(<span key={key} className="c-r">{tok}</span>)
    else if (mark) out.push(<span key={key} className={mark === '✔' ? 'c-k' : 'c-r'}>{tok}</span>)
    else out.push(tok)
    last = m.index + tok.length
  }
  if (last < code.length) out.push(code.slice(last))
  return out
}

/** Converte **trecho** em <b>trecho</b>. */
export function rich(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <b key={i}>{part.slice(2, -2)}</b> : part,
  )
}
