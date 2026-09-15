import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Two-part cursor: a hard dot that tracks instantly and a ring that lags
 * behind with easing, scaling up over interactive elements.
 * Disabled entirely on touch devices and for reduced-motion users.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const moveDot = gsap.quickTo(dot.current, 'x', { duration: 0.12, ease: 'power3' })
    const moveDotY = gsap.quickTo(dot.current, 'y', { duration: 0.12, ease: 'power3' })
    const moveRing = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3' })
    const moveRingY = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3' })

    const onMove = (e: PointerEvent) => {
      moveDot(e.clientX)
      moveDotY(e.clientY)
      moveRing(e.clientX)
      moveRingY(e.clientY)
    }

    const interactive = 'a, button, .skill-item, .tag, .card'

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(interactive)) {
        gsap.to(ring.current, { scale: 1.9, opacity: 0.45, duration: 0.35, ease: 'power3' })
      }
    }

    const onOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(interactive)) {
        gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.35, ease: 'power3' })
      }
    }

    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerout', onOut)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerout', onOut)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
    </>
  )
}
