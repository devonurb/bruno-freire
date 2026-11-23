import { navLinks } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'

type Props = { active: string | null; scrolled: boolean }

export function Nav({ active, scrolled }: Props) {
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a className="mark" href="#topo">
        BRUNO<b>.</b>FREIRE
      </a>
      <div className="nav-r">
        <ul>
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? 'on' : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  )
}
