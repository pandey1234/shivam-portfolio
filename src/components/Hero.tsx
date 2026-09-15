import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../lib/motion'

type Props = { ready: boolean }

/**
 * Name on the left, portrait centred, role on the right — collapsing to a
 * single centred column below 1000px.
 */
export default function Hero({ ready }: Props) {
  const root = useRef<HTMLElement>(null)
  const avatar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ready || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('.hero__eyebrow', { y: 20, opacity: 0, duration: 0.8 })
        .from(
          '.avatar',
          { scale: 0.82, opacity: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.4',
        )
        .from('.hero__side--left', { x: -46, opacity: 0, duration: 1 }, '-=0.8')
        .from('.hero__side--right', { x: 46, opacity: 0, duration: 1 }, '<')
        .from('.avatar__chip', { y: 14, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero__scroll', { opacity: 0, duration: 0.8 }, '-=0.5')

      // Content drifts up and fades as you scroll toward About.
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

      // Portrait tilts very slightly toward the pointer.
      const onMove = (e: PointerEvent) => {
        const { innerWidth: w, innerHeight: h } = window
        gsap.to(avatar.current, {
          rotateY: ((e.clientX - w / 2) / w) * 10,
          rotateX: -((e.clientY - h / 2) / h) * 10,
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p className="hero__eyebrow">
            <span className="hero__dot" aria-hidden="true" />
            Available for opportunities
          </p>
        </div>

        <div className="hero__stage">
          <div className="hero__side hero__side--left">
            <span className="hero__hello">Hello! I&rsquo;m</span>
            <h1 className="hero__name">
              Shivam
              <br />
              Pandey
            </h1>
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

          <div className="hero__side hero__side--right">
            <span className="hero__hello">A Backend</span>
            <p className="hero__role">Developer</p>
          </div>
        </div>
      </div>

      <div className="hero__scroll">Scroll</div>
    </section>
  )
}
