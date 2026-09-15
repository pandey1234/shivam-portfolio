# Shivam Pandey — Portfolio

Personal portfolio site. Dark, typographic, GSAP-animated — built to showcase backend engineering work rather than decorate it.

**Live:** _not deployed yet_

## Tech Stack

| | |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Animation | GSAP 3 + ScrollTrigger |
| Smooth scroll | Lenis |
| Styling | Hand-written CSS with custom properties — no framework |

No paid GSAP Club plugins. Text splitting is a small in-house utility (`src/lib/split.ts`) rather than the licensed SplitText plugin.

## Running Locally

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # typecheck + production build
npm run preview  # serve the built output
```

## Structure

```
src/
  components/    one file per section, plus Nav / Cursor / Preloader
  data/content.ts    all copy and resume data in one place
  hooks/         Lenis + GSAP ticker integration
  lib/           text splitting, reduced-motion check
  styles/        global.css — tokens, layout, every component style
```

Editing content means editing `src/data/content.ts` — nothing is hardcoded in components.

## Notes

- **Accessibility:** every entrance animation is skipped under `prefers-reduced-motion`, so content is never hidden waiting for a tween that won't run. Focus outlines are preserved throughout.
- **Responsive:** fluid type scale via `clamp()`; layouts collapse to single column below 900px.
- **Custom cursor** is disabled on touch/coarse pointers.

## License

© Shivam Pandey. All rights reserved.
