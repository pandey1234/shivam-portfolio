import Section from './Section'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" num="04" title="Capabilities">
      <div className="skills">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.label} data-reveal>
            <div className="skill-label">{group.label}</div>
            <div className="skill-items">
              {group.items.map((item) => (
                <span className="skill-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
