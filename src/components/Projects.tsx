import type { MouseEvent } from 'react'
import Section from './Section'
import { projects } from '../data/content'

export default function Projects() {
  /** Moves the radial sheen to follow the pointer across each card. */
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    card.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Section id="work" num="03" title="Selected Work">
      <div className="projects">
        {projects.map((p) => (
          <article className="card" key={p.title} data-reveal onMouseMove={onMove}>
            <div className="card__sheen" aria-hidden="true" />

            <div className="card__top">
              <h3 className="card__title">{p.title}</h3>
              <span className="card__index">{p.index}</span>
            </div>

            <p className="card__summary">{p.summary}</p>

            <ul className="card__points">
              {p.points.map((pt) => (
                <li className="card__point" key={pt}>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <ul className="tags">
              {p.stack.map((s) => (
                <li className="tag" key={s}>
                  {s}
                </li>
              ))}
            </ul>

            {p.link && (
              <a
                className="card__link"
                href={p.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                View source <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
