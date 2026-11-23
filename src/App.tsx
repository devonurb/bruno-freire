import { useRef } from 'react'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Chapter, Num } from './components/Row'
import { About, Experiences, Identity, Interests, Projects } from './components/Sections'
import { Stack } from './components/Stack'
import { navLinks, profile } from './data/profile'
import { useReveal } from './hooks/useReveal'
import { useScrollSpy } from './hooks/useScrollSpy'

const sectionIds = navLinks.map((l) => l.id)

export default function App() {
  const timeline = useRef<HTMLElement>(null)
  const fill = useRef<HTMLDivElement>(null)
  const { active, scrolled } = useScrollSpy(timeline, fill, sectionIds)
  useReveal()

  return (
    <>
      <Nav active={active} scrolled={scrolled} />

      <main className="timeline" id="topo" ref={timeline}>
        {/* faixa vermelha central com régua e progresso de leitura */}
        <div className="band" aria-hidden="true">
          <div className="band-fill" ref={fill}>
            <i />
          </div>
        </div>

        <Hero />
        <Identity />
        <Stack />
        <About />
        <Interests />

        <Chapter id="experiencia" label="Capítulo II" title="Trajetória" accent="profissional" />
        <Experiences />

        <Chapter id="projetos" label="Capítulo III" title="Projetos" accent="em destaque" />
        <Projects />

        <Contact />

        <section className="row end">
          <div className="l rv from-l">
            <div className="kicker" style={{ color: 'var(--mute)' }}>fim da linha do tempo — por enquanto</div>
          </div>
          <div className="num rv" aria-hidden="true">
            <Num top={profile.year.slice(0, 2)} bottom={profile.year.slice(2)} />
          </div>
          <div className="r rv from-r">
            <div className="kicker">
              Continuous <span style={{ color: 'var(--red)' }}>learning</span> →
            </div>
          </div>
        </section>
      </main>

      <footer>© {profile.year} Bruno Lucas Almeida Freire · Desenvolvedor Java | Full-Stack Engineer</footer>
    </>
  )
}
