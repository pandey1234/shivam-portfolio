import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { marqueeItems } from '../data/content'
import { prefersReducedMotion } from '../lib/motion'

/**
 * Infinite horizontal ticker. Two identical tracks slide left in a seamless
 * loop; scroll velocity nudges the speed so it feels physically connected
 * to the page rather than running on its own clock.
 */
export default function Marquee() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const tween = gsap.to('.marquee__track', {
        xPercent: -100,
        repeat: -1,
        duration: 26,
        ease: 'none',
      })

      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          // Speed up with scroll, and flip direction when scrolling back up.
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 1200, 3)
          tween.timeScale(self.direction * boost)
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const track = (key: string) => (
    <div className="marquee__track" key={key} aria-hidden={key === 'b'}>
      {marqueeItems.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee" ref={root}>
      {track('a')}
      {track('b')}
    </div>
  )
}
