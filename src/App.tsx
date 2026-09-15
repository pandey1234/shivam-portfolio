import { useCallback, useState } from 'react'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  const [ready, setReady] = useState(false)
  const onDone = useCallback(() => setReady(true), [])

  useSmoothScroll()

  return (
    <>
      <Preloader onDone={onDone} />
      <Cursor />
      <Nav />

      <main>
        <Hero ready={ready} />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Shivam Pandey</span>
        <span>Built with React, GSAP &amp; too much coffee</span>
      </footer>
    </>
  )
}
