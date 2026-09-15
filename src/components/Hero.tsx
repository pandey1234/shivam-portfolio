import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { profile, achievements } from '../data/content'
import { splitWords } from '../lib/split'
import { prefersReducedMotion } from '../lib/motion'

type Props = { ready: boolean }

export default function Hero({ ready }: Props) {
  const root = useRef<HTMLElement>(null)
  const title = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!ready || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      // Split every line of the headline into masked words.
      const lines = title.current?.querySelectorAll<HTMLElement>('.hero__line') ?? []
      const wordSets = Array.from(lines).map((line) => splitWords(line))

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('.hero__eyebrow', { y: 20, opacity: 0, duration: 0.8 })

      wordSets.forEach((words, i) => {
        tl.from(
          words,
          { yPercent: 115, duration: 1.05, stagger: 0.055 },
          i === 0 ? '-=0.45' : '-=0.85',
        )
      })

      tl.from('.hero__blurb', { y: 24, opacity: 0, duration: 0.9 }, '-=0.6')
        .from('.hero__facts > *', { y: 24, opacity: 0, duration: 0.8, stagger: 0.09 }, '-=0.65')
        .from('.hero__scroll', { opacity: 0, duration: 0.8 }, '-=0.5')

      // Headline drifts up and fades as you scroll away from it.
      gsap.to('.hero__inner', {
        yPercent: -14,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [ready])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="shell hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__dot" aria-hidden="true" />
          Available for opportunities
        </p>

        <h1 className="hero__title" ref={title}>
          <span className="hero__line">Backend</span>
          <span className="hero__line hero__line--accent">engineer.</span>
          <span className="hero__line">Systems first.</span>
        </h1>

        <div className="hero__meta">
          <p className="hero__blurb">{profile.blurb}</p>

          <div className="hero__facts">
            {achievements.map((a) => (
              <div key={a.label}>
                <div className="fact__value">{a.value}</div>
                <div className="fact__label">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll">Scroll</div>
    </section>
  )
}
