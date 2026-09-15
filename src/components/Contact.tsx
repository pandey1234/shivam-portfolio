import Section from './Section'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <Section id="contact" num="05" title="Contact">
      <div data-reveal>
        <h3 className="contact__title">Got something worth building?</h3>

        <a className="contact__mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact__row">
          <div className="contact__block">
            <span className="contact__key">Phone</span>
            <a className="contact__val" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              {profile.phone}
            </a>
          </div>

          <div className="contact__block">
            <span className="contact__key">GitHub</span>
            <a
              className="contact__val"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              @pandey1234
            </a>
          </div>

          <div className="contact__block">
            <span className="contact__key">LinkedIn</span>
            <a
              className="contact__val"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              /in/pandey1234
            </a>
          </div>

          <div className="contact__block">
            <span className="contact__key">Based in</span>
            <span className="contact__val">{profile.location}</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
