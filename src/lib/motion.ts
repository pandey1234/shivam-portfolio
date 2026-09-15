/**
 * Single source of truth for whether we should animate.
 *
 * Entrance animations work by hiding an element and moving it back into
 * place, so anything that prevents the tween from running would leave the
 * content stranded. When the user asks for reduced motion we skip the
 * hiding entirely rather than shortening the animation.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
