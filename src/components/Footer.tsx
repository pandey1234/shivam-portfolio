import { profile } from '../data/content'
import RollText from './RollText'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="shell footer__inner">
        <a className="footer__brand" href="#top">
          <RollText text="shivam.dev" />
        </a>

        <a className="footer__mail" href={`mailto:${profile.email}`}>
          <RollText text={profile.email} />
        </a>
      </div>

      <div className="shell footer__meta">
        <span>© {new Date().getFullYear()} Shivam Pandey</span>
        <span>Built with React, GSAP &amp; too much coffee</span>
      </div>
    </footer>
  )
}
