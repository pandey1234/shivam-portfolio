import Section from './Section'
import { education } from '../data/content'

export default function About() {
  return (
    <Section id="about" num="01" title="About">
      <div className="about__grid">
        <div data-reveal>
          <p className="about__lead">
            I work on the parts of an application nobody sees — <strong>authentication</strong>,{' '}
            <strong>permissions</strong>, and the <strong>multi-tenant</strong> plumbing that keeps
            one client's data from ever touching another's.
          </p>

          <div className="about__body">
            <p>
              Right now I'm at EPIC Investment Partners, where I build the internal platform:
              centralised auth microservices handling login and 2FA across several products, a
              role-based access control layer with granular permissions, and a ticketing system that
              turns inbound email into tracked, resolvable work.
            </p>
            <p>
              Before that I spent a year at Datacorn shipping Laravel features and untangling a
              codebase — 100+ bugs closed, a static site rebuilt as a fully dynamic multi-tenant
              platform. I started out as an intern at Darx Technology, where a rebuild I worked on
              lifted engagement 40% and cut bounce rate by a quarter.
            </p>
            <p>
              I like problems where correctness matters more than speed: access control, data
              isolation, session handling. The kind of thing that is invisible when it works and
              catastrophic when it doesn't.
            </p>
          </div>
        </div>

        <aside className="about__aside" data-reveal>
          {education.map((e) => (
            <div className="edu" key={e.school}>
              <div className="edu__school">{e.school}</div>
              <div className="edu__detail">{e.detail}</div>
              <div className="edu__row">
                <span>{e.period}</span>
                <span className="edu__score">{e.score}</span>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  )
}
