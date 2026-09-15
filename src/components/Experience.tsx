import Section from './Section'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" num="02" title="Experience">
      <div className="exp">
        {experience.map((job) => (
          <article className="exp__item" key={job.company} data-reveal>
            <div className="exp__head">
              <h3 className="exp__company">
                {job.company}
                {job.current && <span className="exp__badge">Current</span>}
              </h3>
              <div className="exp__role">{job.role}</div>
              <div className="exp__period">
                {job.period} · {job.location}
              </div>
            </div>

            <div>
              <ul className="exp__points">
                {job.points.map((p) => (
                  <li className="exp__point" key={p}>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

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
