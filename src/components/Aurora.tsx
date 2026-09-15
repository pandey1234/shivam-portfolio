import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../lib/motion'

/**
 * Slow-drifting colour fields behind the page. The drift itself is pure CSS
 * (cheap, runs off the main thread); GSAP only adds a gentle parallax so the
 * fields lag behind the scroll, which makes the page feel deeper.
 */
export default function Aurora() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.to('.aurora__blob--1', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 1.2 },
      })
      gsap.to('.aurora__blob--3', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 1.6 },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div className="aurora" ref={root} aria-hidden="true">
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
      <div className="aurora__blob aurora__blob--4" />
    </div>
  )
}
