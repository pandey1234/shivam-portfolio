import Section from './Section'
import { experience } from '../data/content'

/**
 * Career timeline: role and employer on the left, the year marker next to a
 * glowing rail, and what the work actually was on the right.
 */
export default function Career() {
  return (
    <Section id="career" num="02" title="Career & experience">
      <div className="timeline">
        {experience.map((job) => (
          <article
            className={`timeline__row${job.current ? ' timeline__row--current' : ''}`}
            key={job.company}
            data-reveal
          >
            <div className="timeline__role">
              <h3 className="timeline__job">{job.role}</h3>
              <div className="timeline__company">{job.company}</div>
              <div className="timeline__period">
                {job.period} · {job.location}
              </div>
            </div>

            <div className="timeline__year">{job.year}</div>

            <div className="timeline__rail" aria-hidden="true">
              <span className="timeline__dot" />
            </div>

            <div className="timeline__desc">
              <p>{job.summary}</p>
              <ul className="tags">
                {job.stack.map((s) => (
                  <li className="tag" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
