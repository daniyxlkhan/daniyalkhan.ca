# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site (deployed at daniyalkhan.ca via Vercel). Single-page React 19 app built with Vite, plain JavaScript (JSX), no router, no test suite.

## Keep it hand-made

The owner wrote this site by hand, and that human feel is the point: it should not look or read like a vibe-coded / AI-generated portfolio. When making changes:

- Make the smallest change that does the job, and match the existing code style, quirks included. Don't refactor, "modernize", or restructure code that wasn't part of the request.
- Don't introduce generic AI-template design: no gradient hero sections, glassmorphism, emoji-sprinkled headings, stock "modern" card layouts, or new UI/animation libraries. Keep the existing palette, fonts (Bai Jamjuree, ByteBounce), and layout.
- Don't write or rewrite user-facing copy (bios, project descriptions, headings) in a polished marketing voice. If new text is needed, keep it plain and in the owner's existing tone, or leave a placeholder for them to write.
- Ask before larger design or content changes rather than deciding on the owner's behalf.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.js`)

## Architecture

- `src/App.jsx` composes the page as stacked sections (`Header`, `Home`, `About`, `Projects`, `Contact`, `Footer`, `ScrollUp`) plus Vercel `<Analytics />`. Navigation is anchor links to section IDs, not routing.
- **Scroll animations are wired by CSS class name in `App.jsx`**: ScrollReveal (npm package) calls `sr.reveal('.home__info', ...)`, `'.projects__card'`, etc. Renaming those classes in a component silently breaks its reveal animation — update `App.jsx` too.
- **Content is hardcoded in components.** Projects live in the `projects` array in `src/components/Projects.jsx` (`image`, `title`, `description`, `skills`, optional `githubLink` / `liveLink` — omit either to hide its button). About-section photos are listed in `PhotoCarousel.jsx`.
- **Styling**: one CSS file per component in `src/styles/`, imported by that component; class names follow BEM-ish `block__element` (e.g. `projects__card`). Global design tokens (colors, `--first-color` accent, fonts, sizes) are CSS variables in `src/index.css`. `src/styles/variables.css` is an older duplicate that is not imported anywhere — edit `index.css`.
- **Static assets** are served from `public/assets/` and referenced by absolute path (`/assets/img/...`, custom `ByteBounce` font in `/assets/fonts/`).
- **Externally loaded via `index.html`**, not npm: Remix Icon CSS (icons are `<i className="ri-...">`), and EmailJS from a CDN. `Contact.jsx` uses the global `window.emailjs` for the contact form, so it must stay a script tag (or be migrated deliberately).
