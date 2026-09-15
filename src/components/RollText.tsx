type Props = {
  text: string
  className?: string
}

/**
 * Text that rolls over on hover: each character slides up while a duplicate
 * rises into its place, staggered left to right.
 *
 * The animation is pure CSS — this only splits the string and hands each
 * character its index so the stagger can be expressed as a transition-delay.
 * Characters are hidden from assistive tech; the whole string is exposed once
 * via aria-label so a screen reader reads a word, not a spelling bee.
 */
export default function RollText({ text, className }: Props) {
  return (
    <span className={className ? `roll ${className}` : 'roll'} aria-label={text}>
      {Array.from(text).map((char, i) => (
        <span
          className="roll__char"
          key={`${char}-${i}`}
          style={{ '--i': i } as React.CSSProperties}
          aria-hidden="true"
        >
          <span className="roll__face">{char === ' ' ? ' ' : char}</span>
          <span className="roll__face roll__face--in">{char === ' ' ? ' ' : char}</span>
        </span>
      ))}
    </span>
  )
}
