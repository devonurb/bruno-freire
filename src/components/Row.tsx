import type { ReactNode } from 'react'

type Props = {
  id?: string
  className?: string
  /** número/rótulo exibido sobre a faixa vermelha */
  num: ReactNode
  text: ReactNode
  visual?: ReactNode
  /** lado em que fica o texto (o visual vai para o lado oposto) */
  textSide?: 'left' | 'right'
  textClassName?: string
  watermark?: { text: string; position: 'top' | 'bot' }
}

/** Uma "parada" da linha do tempo: texto | número na faixa | visual. */
export function Row({ id, className = '', num, text, visual, textSide = 'left', textClassName = '', watermark }: Props) {
  const textBlock = (
    <div className={`${textSide === 'left' ? 'l from-l' : 'r from-r'} ${textClassName} rv`}>{text}</div>
  )
  const visualBlock = visual ? (
    <div className={`${textSide === 'left' ? 'r from-r' : 'l from-l'} flush rv`}>{visual}</div>
  ) : null

  return (
    <section id={id} className={`row ${className}`}>
      {watermark && (
        <span className={`wm ${watermark.position}`} aria-hidden="true">
          {watermark.text}
        </span>
      )}
      {textSide === 'left' ? textBlock : visualBlock}
      <div className="num rv" aria-hidden="true">
        {num}
      </div>
      {textSide === 'left' ? visualBlock : textBlock}
    </section>
  )
}

/** Número empilhado em duas linhas (ex.: 20 / 24) com legenda opcional. */
export function Num({ top, bottom, label }: { top: string; bottom?: string; label?: string }) {
  return (
    <>
      {top}
      {bottom && (
        <>
          <br />
          {bottom}
        </>
      )}
      {label && <small>{label}</small>}
    </>
  )
}

/** Cabeçalho de seção: kicker + título bicolor. */
export function Heading({ kicker, accent, rest }: { kicker: string; accent: string; rest: string }) {
  return (
    <>
      <div className="kicker">{kicker}</div>
      <div className="title">
        {accent} <span className="k">{rest}</span>
      </div>
    </>
  )
}

export function Chapter({ id, label, title, accent }: { id: string; label: string; title: string; accent: string }) {
  return (
    <div className="chapter rv" id={id}>
      <div>
        <div className="kicker">{label}</div>
        <h3>
          {title} <span>{accent}</span>
        </h3>
      </div>
    </div>
  )
}
