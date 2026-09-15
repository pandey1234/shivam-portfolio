import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../lib/motion'

type Props = {
  id: string
  num: string
  title: string
  children: ReactNode
}

/**
 * Shared section wrapper. Fades the heading and each [data-reveal] block up
 * as it enters the viewport.
 */
export default function Section({ id, num, title, children }: Props) {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.from('.section-head > *', {
        y: 26,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.section-head', start: 'top 85%' },
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 34,
          opacity: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })

      ScrollTrigger.refresh()
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id={id} ref={root}>
      <div className="shell">
        <div className="section-head">
          <span className="section-num">{num}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
