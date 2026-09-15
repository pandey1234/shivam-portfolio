import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../lib/motion'

type Props = { onDone: () => void }

/**
 * Counts 0 -> 100 behind a progress bar, then wipes upward to reveal the page.
 * onDone fires before the wipe finishes so the hero animation overlaps the
 * exit rather than waiting for it.
 */
export default function Preloader({ onDone }: Props) {
  const root = useRef<HTMLDivElement>(null)
  const count = useRef<HTMLSpanElement>(null)
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reduced motion: skip the whole sequence and show the page immediately.
    if (prefersReducedMotion()) {
      if (root.current) root.current.style.display = 'none'
      onDone()
      return
    }

    const counter = { value: 0 }
    const tl = gsap.timeline()

    tl.to(counter, {
      value: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (count.current) {
          count.current.textContent = String(Math.round(counter.value)).padStart(3, '0')
        }
      },
    })
      .to(bar.current, { width: '100%', duration: 1.6, ease: 'power2.inOut' }, 0)
      .to({}, { duration: 0.15 })
      .add(onDone)
      .to(root.current, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' })
      .set(root.current, { display: 'none' })

    return () => {
      tl.kill()
    }
  }, [onDone])

  return (
    <div className="preloader" ref={root}>
      <div className="preloader__inner">
        <span className="preloader__name">Shivam Pandey</span>
        <span className="preloader__count" ref={count}>
          000
        </span>
      </div>
      <div className="preloader__bar" ref={bar} />
    </div>
  )
}
