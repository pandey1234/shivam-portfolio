import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../lib/motion'

type Props = { onDone: () => void }

/**
 * A centred loading pill that counts 0 -> 100 with a filling bar, then wipes
 * upward to reveal the page. onDone fires before the wipe finishes so the
 * hero animation overlaps the exit rather than waiting for it.
 */
export default function Preloader({ onDone }: Props) {
  const root = useRef<HTMLDivElement>(null)
  const pill = useRef<HTMLDivElement>(null)
  const count = useRef<HTMLSpanElement>(null)
  const fill = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Reduced motion: skip the sequence and show the page immediately.
    if (prefersReducedMotion()) {
      if (root.current) root.current.style.display = 'none'
      onDone()
      return
    }

    const counter = { value: 0 }
    const tl = gsap.timeline()

    tl.from(pill.current, { scale: 0.9, opacity: 0, duration: 0.5, ease: 'power3.out' })
      .to(
        counter,
        {
          value: 100,
          duration: 1.7,
          ease: 'power2.inOut',
          onUpdate: () => {
            const v = Math.round(counter.value)
            if (count.current) count.current.textContent = `${v}%`
            pill.current?.setAttribute('aria-valuenow', String(v))
          },
        },
        '-=0.2',
      )
      .to(fill.current, { scaleX: 1, duration: 1.7, ease: 'power2.inOut' }, '<')
      .to({}, { duration: 0.2 })
      .add(onDone)
      .to(pill.current, { scale: 0.94, opacity: 0, duration: 0.4, ease: 'power2.in' })
      .to(root.current, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' }, '-=0.15')
      .set(root.current, { display: 'none' })

    return () => {
      tl.kill()
    }
  }, [onDone])

  return (
    <div className="preloader" ref={root}>
      <div
        className="loadpill"
        ref={pill}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        aria-label="Loading"
      >
        <div className="loadpill__inner">
          <span className="loadpill__label">Loading</span>
          <span className="loadpill__pct" ref={count}>
            0%
          </span>
          <span className="loadpill__track">
            <span className="loadpill__fill" ref={fill} />
          </span>
        </div>
      </div>
    </div>
  )
}
