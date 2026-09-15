/**
 * Minimal text splitter.
 *
 * GSAP's own SplitText is a paid Club plugin, so this covers the cases we
 * actually need: splitting into words (each wrapped in an overflow-hidden
 * mask so it can slide up from nothing) or into characters.
 *
 * Returns the created elements so GSAP can stagger them directly.
 */

export function splitWords(el: HTMLElement): HTMLElement[] {
  const text = el.textContent ?? ''
  el.textContent = ''

  const parts: HTMLElement[] = []

  for (const word of text.split(/(\s+)/)) {
    if (word.trim() === '') {
      el.appendChild(document.createTextNode(word))
      continue
    }

    const mask = document.createElement('span')
    mask.style.display = 'inline-block'
    mask.style.overflow = 'hidden'
    mask.style.verticalAlign = 'top'

    const inner = document.createElement('span')
    inner.style.display = 'inline-block'
    inner.textContent = word

    mask.appendChild(inner)
    el.appendChild(mask)
    parts.push(inner)
  }

  return parts
}

export function splitChars(el: HTMLElement): HTMLElement[] {
  const text = el.textContent ?? ''
  el.textContent = ''

  const parts: HTMLElement[] = []

  for (const char of text) {
    const span = document.createElement('span')
    span.style.display = 'inline-block'
    span.textContent = char === ' ' ? ' ' : char
    el.appendChild(span)
    parts.push(span)
  }

  return parts
}
