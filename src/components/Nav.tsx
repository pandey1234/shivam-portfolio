import { useEffect, useRef } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

/** Hides on scroll down, reappears on scroll up. */
export default function Nav() {
  const nav = useRef<HTMLElement>(null)

  useEffect(() => {
    let last = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > last && y > 120
      nav.current?.classList.toggle('nav--hidden', goingDown)
      last = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="nav" ref={nav}>
      <div className="shell nav__inner">
        <a href="#top" className="nav__mark">
          SP<span>.</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} className="nav__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
