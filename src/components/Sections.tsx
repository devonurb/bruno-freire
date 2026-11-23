import { about, experiences, identity, identityCode, interests, projects } from '../data/profile'
import { rich } from '../lib/highlight'
import { Card, CodeCard } from './Card'
import { Courses } from './illustrations/Courses'
import { Dashboard } from './illustrations/Dashboard'
import { Layers } from './illustrations/Layers'
import { Principles } from './illustrations/Principles'
import { VehicleDetection } from './illustrations/VehicleDetection'
import { Heading, Num, Row } from './Row'

export function Identity() {
  return (
    <Row
      id="identidade"
      num={<Num top="01" label="QUEM SOU" />}
      text={
        <>
          <Heading kicker="Posicionamento" accent="Identidade" rest="profissional" />
          {identity.map((p) => <p key={p} className="desc">{p}</p>)}
        </>
      }
      visual={<CodeCard file="Engineer.java" code={identityCode} caption="fig. 01 — a forma como penso uma solução" />}
    />
  )
}

export function About() {
  return (
    <Row
      id="sobre"
      textSide="right"
      num={<Num top="03" label="SOBRE MIM" />}
      text={
        <>
          <Heading kicker="Quem está por trás do código" accent="Sobre" rest="mim" />
          {about.map((p) => <p key={p} className="desc">{p}</p>)}
        </>
      }
      visual={
        <Card file="principios.md" light caption="fig. 03 — desenvolver software vai além de escrever código">
          <Principles />
        </Card>
      }
    />
  )
}

export function Interests() {
  return (
    <Row
      num={<Num top="04" label="FOCO" />}
      watermark={{ text: '{ CODE }', position: 'bot' }}
      text={
        <>
          <Heading kicker="Onde concentro meus estudos" accent="Tecnologias" rest="& interesses" />
          <ul className="interests">
            {interests.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </>
      }
      visual={
        <Card file="arquitetura/camadas" caption="fig. 04 — clean architecture em camadas">
          <Layers />
        </Card>
      }
    />
  )
}

export function Experiences() {
  return (
    <>
      {experiences.map((e) => (
        <Row
          key={e.title[0]}
          textSide={e.textSide}
          watermark={e.watermark ? { text: e.watermark, position: 'bot' } : undefined}
          num={<Num top={e.num[0]} bottom={e.num[1]} label={e.numLabel} />}
          text={
            <>
              <Heading kicker={e.kicker} accent={e.title[0]} rest={e.title[1]} />
              <div className="where">{e.where}</div>
              <div className="meta">{e.period}</div>
              {e.paragraphs.map((p) => <p key={p} className="desc">{rich(p)}</p>)}
              {e.learned && (
                <div className="learned">
                  <b>O que levei dessa fase</b>
                  {e.learned}
                </div>
              )}
              {e.trophy && (
                <div className="trophy">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
                  </svg>
                  {e.trophy}
                </div>
              )}
              <div className="chips">
                {e.chips.map((c, i) => <span key={c} className={`chip${i === 0 ? ' red' : ''}`}>{c}</span>)}
              </div>
            </>
          }
          visual={
            e.visual === 'yolo' ? (
              <Card file="yolo_contagem.py — detecção de veículos" caption={e.caption}>
                <VehicleDetection />
              </Card>
            ) : (
              <Card file="cursos-gratuitos/turmas" light caption={e.caption}>
                <Courses />
              </Card>
            )
          }
        />
      ))}
    </>
  )
}

export function Projects() {
  return (
    <>
      {projects.map((p) => (
        <Row
          key={p.num}
          textSide={p.textSide}
          textClassName="proj"
          watermark={p.watermark ? { text: p.watermark, position: 'top' } : undefined}
          num={<Num top="P" bottom={p.num} />}
          text={
            <>
              <Heading kicker={p.kicker} accent={p.name[0]} rest={p.name[1]} />
              <p className="desc">{p.description}</p>
              <ul className="hl">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="chips">
                {p.chips.map((c, i) => <span key={c} className={`chip${i === 0 ? ' red' : ''}`}>{c}</span>)}
              </div>
              <div className="plinks">
                {p.links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
              </div>
            </>
          }
          visual={
            p.visual.kind === 'code' ? (
              <CodeCard file={p.visual.file} code={p.visual.code} />
            ) : (
              <Card file={p.visual.file} light>
                <Dashboard />
              </Card>
            )
          }
        />
      ))}
    </>
  )
}
