# Production build

The site is built with [Astro](https://astro.build) into static HTML and served
as files. Nothing runs on a server.

```bash
npm install
npm run dev      # local preview, http://localhost:4321
npm run build    # -> dist/, then the honesty gate
npm run preview  # serve the built dist/
```

## What it produces

Two pages, `/` and `/es/`, and one stylesheet:

| | |
|---|---|
| Requests to load a page | **2** (the HTML and the CSS) |
| JavaScript shipped | **none** |
| CSS | 6.0 KiB gzipped |
| HTML | ~6 KiB gzipped per page |
| Whole site on disk | 116 KB |

The prototype in `ui_kits/website/` loaded React's development build and Babel
from a CDN and compiled JSX in the visitor's browser on every page view. React
is still how the components are written, but it now runs only at build time.

## How it fits together

- `components/**/*.jsx` — the design system, unchanged. Imported through
  `src/lib/ds.js` rather than the `window` global the prototype used.
- `src/sections/*.jsx` — the page sections, converted from `ui_kits/website/`.
- `src/components/Site.jsx` — assembles the sections; takes `lang` as a prop.
- `src/pages/index.astro`, `src/pages/es/index.astro` — one page per language.
- `src/config/site.js` — **every real-world fact about the business.**
- `src/styles/production.css` — only what the move to production needed; the
  design still comes from `styles.css` and `ui_kits/website/site.css`.

`ui_kits/` and `_ds_bundle.js` are left in place: they are what the design-system
preview cards in `guidelines/` still load.

## Two languages, two pages

The prototype held the language in React state, so the Spanish content had no
URL — nothing to link, bookmark, share or index. Google's guidance is explicit
that each language version should have its own URL. Spanish now lives at `/es/`
with its own `<html lang>`, its own title and description, and `hreflang` links
in both directions.

## Why there is no JavaScript

Everything the prototype used React state for is now either a real page or a
native element:

| Prototype | Now |
|---|---|
| Language toggle (React state) | Two links, one per page |
| FAQ accordion (React state) | `<details>` / `<summary>` |
| Pricing Homes/Offices tabs (React state) | Both groups rendered, each with a heading |

The tabs and the accordion mattered: with nothing hydrating, both would have
rendered once and never responded — the office pricing would have been
unreachable and every FAQ answer sealed shut.

## The honesty gate

`npm run build` runs `scripts/check-honest.mjs`, which fails the build if:

- any fabricated detail from the prototype reappears — the `555-0142` phone
  number, `hola@kalaylas.com`, the three invented testimonials, the invented
  review count;
- a trust claim appears while unconfirmed in `src/config/site.js` — "licensed &
  insured", "satisfaction guaranteed";
- a page carries fewer than 40 icons, which is what happens when
  `components/brand/Icon.jsx` goes back to reading `window.lucide`: that global
  does not exist during a static build, so every icon silently becomes an empty
  span and the build still succeeds. Measured: 67 icons with it, 4 without;
- a page loads any JavaScript;
- a page's `<html lang>` does not match its locale.

It then prints what is still missing before launch.

## Before it goes live

Fill in `src/config/site.js`. Until then the site builds and is safe to publish
— it simply leaves out what it cannot state truthfully.

- **Phone** — a number Kalayla answers. The prototype used `(360) 555-0142`;
  `555` is the reserved fictional prefix, so it rang nowhere.
- **Email** — a mailbox that receives mail. `hola@kalaylas.com` does not resolve.
- **Pricing** — real per-visit rates, or leave `pricing: null` and every plan
  reads "Custom" with a quote request, which is honest and still converts.
- **Licensed, bonded, insured, background-checked** — each is a claim a customer
  can act on. Set them in `site.claims` only once confirmed.
- **Reviews** — real ones, with the customer's permission, in `site.reviews`.
  Invented testimonials are deceptive advertising, and the structured data omits
  `aggregateRating` entirely until `site.rating` holds a figure from a real
  platform.
- **Google Business Profile URL** — the main driver of local search for a
  business like this.
- **Photos** — the hero and service cards still show the on-brand placeholder.

## Accessibility

axe reports zero WCAG 2.1 AA violations on both locales at desktop and mobile.
Getting there needed one change to `tokens/colors.css`: the primary button was
white on `--teal-500` at **2.57:1** against a 4.5:1 requirement, and teal text
was 3.41:1. Both roles now point at `--teal-700`, which was already in the
palette and clears 4.79–5.40:1. No new colour was invented and the hue moves
175° → 174°. `--teal-500` is still the brand colour for decorative fills that
carry no text.
