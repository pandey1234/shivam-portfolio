import { useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Career', href: '#career' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

/** Hides on scroll down, reappears on scroll up, gains a hairline once off the top. */
export default function Nav() {
  const nav = useRef<HTMLElement>(null)

  useEffect(() => {
    let last = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      nav.current?.classList.toggle('nav--hidden', y > last && y > 120)
      nav.current?.classList.toggle('nav--stuck', y > 20)
      last = y
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="nav" ref={nav}>
      <div className="shell nav__inner">
        <a href="#top" className="nav__mark">
          shivam<span>.</span>dev
        </a>

        <div className="nav__right">
          <nav className="nav__links" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} className="nav__link" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
