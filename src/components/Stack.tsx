import { useState } from 'react'
import { stack, stackLine } from '../data/profile'
import { Heading, Num, Row } from './Row'

/** Grade de ícones: cinza por padrão, cor real no hover/foco/toque. */
export function Stack() {
  const [lit, setLit] = useState<Set<string>>(new Set())
  const toggle = (name: string) =>
    setLit((s) => {
      const n = new Set(s)
      if (n.has(name)) n.delete(name)
      else n.add(name)
      return n
    })

  return (
    <Row
      id="stack"
      num={<Num top="02" label="STACK" />}
      watermark={{ text: 'STACK', position: 'top' }}
      text={
        <>
          <Heading kicker="Ferramentas do dia a dia" accent="Stack" rest="técnica" />
          <p className="stack-line">
            <b>{stackLine.accent}</b>
            {stackLine.rest}
          </p>
        </>
      }
      visual={
        <>
          <div className="icons">
            {stack.map((t) => (
              <div
                key={t.name}
                className={`ico${lit.has(t.name) ? ' lit' : ''}`}
                tabIndex={0}
                title={t.name}
                onClick={() => toggle(t.name)}
              >
                <img src={t.icon} alt="" aria-hidden="true" width={44} height={44} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
          <div className="hint">↳ passe o mouse (ou toque) para acender cada tecnologia</div>
        </>
      }
    />
  )
}
