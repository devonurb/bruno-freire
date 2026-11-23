import { Fragment } from 'react'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="row hero">
      <span className="wm bot" aria-hidden="true">JAVA</span>
      <div className="l rv from-l">
        <div className="kicker">Portfólio · Linha do tempo profissional</div>
        <div className="badges">
          {profile.badges.map((b, i) => (
            <span key={b} className={`badge${i === 0 ? ' hot' : ''}`}>{b}</span>
          ))}
        </div>
        <div className="hero-list">
          <div className="kicker">Hoje construo</div>
          <ul>
            {profile.building.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
        <div className="scroll-cue">
          role para percorrer a trajetória <i />
        </div>
      </div>
      <div className="num rv" aria-hidden="true">
        B<br />L<small>{profile.year}</small>
      </div>
      <div className="r rv from-r">
        <span className="dash" />
        <h1>
          {profile.firstLines.map((n, i) => (
            <Fragment key={n}>
              {i > 0 && <br />}
              {n}
            </Fragment>
          ))}
          <span>{profile.lastName}</span>
        </h1>
        <h2>
          {profile.role.before}
          <b>{profile.role.accent}</b>
          {profile.role.after}
        </h2>
      </div>
    </section>
  )
}
