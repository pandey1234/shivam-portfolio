import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { profile, achievements } from '../data/content'
import { splitWords } from '../lib/split'
import { prefersReducedMotion } from '../lib/motion'

type Props = { ready: boolean }

export default function Hero({ ready }: Props) {
  const root = useRef<HTMLElement>(null)
  const title = useRef<HTMLHeadingElement>(null)
  const avatar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ready || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
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
        .from(
          '.avatar',
          { scale: 0.88, opacity: 0, duration: 1.1, ease: 'power3.out' },
          '-=1.3',
        )
        .from('.avatar__chip', { y: 14, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero__scroll', { opacity: 0, duration: 0.8 }, '-=0.5')

      // Content drifts up and fades as you scroll away.
      gsap.to('.hero__inner', {
        yPercent: -12,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Avatar tilts very slightly toward the pointer.
      const onMove = (e: PointerEvent) => {
        const { innerWidth: w, innerHeight: h } = window
        gsap.to(avatar.current, {
          rotateY: ((e.clientX - w / 2) / w) * 9,
          rotateX: -((e.clientY - h / 2) / h) * 9,
          duration: 0.9,
          ease: 'power3.out',
          transformPerspective: 900,
        })
      }

      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        window.addEventListener('pointermove', onMove)
      }

      return () => window.removeEventListener('pointermove', onMove)
    }, root)

    return () => ctx.revert()
  }, [ready])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="shell hero__inner">
        <div className="hero__layout">
          <div>
            <p className="hero__eyebrow">
              <span className="hero__dot" aria-hidden="true" />
              Available for opportunities
            </p>

            <h1 className="hero__title" ref={title}>
              <span className="hero__line">Backend</span>
              <span className="hero__line hero__line--accent">engineer.</span>
              <span className="hero__line">Systems first.</span>
            </h1>

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

          <div className="avatar" ref={avatar}>
            <div className="avatar__ring" aria-hidden="true" />
            <div className="avatar__frame">
              <picture>
                <source srcSet="/avatar.webp" type="image/webp" />
                <img
                  className="avatar__img"
                  src="/avatar.jpg"
                  alt="Shivam Pandey"
                  width={720}
                  height={720}
                  loading="eager"
                />
              </picture>
            </div>
            <span className="avatar__chip">
              <span className="hero__dot" aria-hidden="true" />
              Ghaziabad, India
            </span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">Scroll</div>
    </section>
  )
}
