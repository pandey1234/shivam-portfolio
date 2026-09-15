import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../lib/motion'

type Props = { onDone: () => void }

/** Hard ceiling on how long the overlay may cover the page, whatever happens. */
const SAFETY_MS = 5000

/**
 * A centred loading pill that counts 0 -> 100 with a filling bar, then wipes
 * upward to reveal the page. onDone fires before the wipe finishes so the
 * hero animation overlaps the exit rather than waiting for it.
 *
 * Two deliberate safeguards, because this overlay covers the whole page and
 * its background matches the page background — anything that stops it from
 * finishing leaves the visitor staring at a blank screen:
 *
 *  - The intro tween animates scale only, never opacity, so the pill is
 *    visible from the first frame. A stalled ticker shows a loader that
 *    isn't counting, rather than an empty page.
 *  - A timeout tears the overlay down regardless of the timeline's state.
 */
export default function Preloader({ onDone }: Props) {
  const root = useRef<HTMLDivElement>(null)
  const pill = useRef<HTMLDivElement>(null)
  const count = useRef<HTMLSpanElement>(null)
  const fill = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const hide = () => {
      if (root.current) root.current.style.display = 'none'
    }

    // Reduced motion: skip the sequence and show the page immediately.
    if (prefersReducedMotion()) {
      hide()
      onDone()
      return
    }

    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      onDone()
    }

    const counter = { value: 0 }
    const tl = gsap.timeline()

    tl.from(pill.current, { scale: 0.92, duration: 0.5, ease: 'power3.out' })
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
      .add(finish)
      .to(pill.current, { scale: 0.94, opacity: 0, duration: 0.4, ease: 'power2.in' })
      .to(root.current, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' }, '-=0.15')
      .call(hide)

    const safety = window.setTimeout(() => {
      tl.kill()
      finish()
      hide()
    }, SAFETY_MS)

    return () => {
      window.clearTimeout(safety)
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
