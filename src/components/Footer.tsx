import { profile } from '../data/content'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="shell footer__inner">
        <a className="footer__brand" href="#top">
          shivam.dev
        </a>

        <a className="footer__mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <nav className="footer__links" aria-label="Footer">
          {links.map((l) => (
            <a className="footer__navlink" href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="shell footer__meta">
        <span>© {new Date().getFullYear()} Shivam Pandey</span>
        <span>Built with React, GSAP &amp; too much coffee</span>
      </div>
    </footer>
  )
}
