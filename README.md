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
| Theming | Light / dark via `data-theme`, persisted to `localStorage` |

No paid GSAP Club plugins — everything here uses the free core plus ScrollTrigger.

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
  components/    one file per section, plus Nav / Cursor / Preloader /
                 ThemeToggle / Aurora (the animated background)
  data/content.ts    all copy and resume data in one place
  hooks/         Lenis + GSAP ticker integration
  lib/           reduced-motion check
  styles/        global.css — tokens for both themes, layout, component styles
```

Editing content means editing `src/data/content.ts` — nothing is hardcoded in components.

## Notes

- **Theming** is three-state: an explicit choice wins, otherwise the OS preference applies and is followed live. An inline script in `index.html` applies the theme before first paint so dark-mode visitors never get a white flash.
- **Accessibility:** every entrance animation is skipped under `prefers-reduced-motion`, so content is never hidden waiting for a tween that won't run. Focus outlines are preserved throughout.
- **Responsive:** fluid type scale via `clamp()`; the hero and career timeline collapse to a single column below 1000px.
- **Custom cursor** is disabled on touch/coarse pointers.

## Known gaps

- No mobile navigation menu — nav links are hidden below 720px (the theme toggle stays visible).

## License

© Shivam Pandey. All rights reserved.
