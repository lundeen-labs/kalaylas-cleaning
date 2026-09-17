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

## Where the business facts come from

`src/config/site.js` is the only place any of them live. Most are now filled in
from her own Setmore booking page, <https://kalaylascleaning.setmore.com/>,
which is the authority: it is the system that takes the booking and charges the
price, so anything the site says that disagrees with it is wrong by definition.

- **Phone** `(360) 333-2732`, **email** `kalaylascleaning@gmail.com`, and
  **booking** the Setmore URL. Every call to action on the site resolves through
  `quoteHref()`, which prefers booking, falls back to phone, then email, and
  renders no button at all rather than a dead one.
- **Hours** are `Mon–Fri 9am–5pm`, structured as days/opens/closes so the footer
  and the `openingHoursSpecification` in the structured data cannot drift. The
  prototype guessed Mon–Sat 8am–6pm.
- **Pricing** mirrors her service list exactly — residential priced by depth
  ($100 / $160 / $400) and commercial by square footage ($350 / $800 / $1,300 /
  $1,400+), each with the booking slot length that scopes the job. The prototype
  priced by frequency (weekly / biweekly / monthly), which is not how she
  charges, and attached perks nobody had confirmed.

Still outstanding, and `npm run build` prints these at the end of every build:

- **Licensed, bonded, insured, background-checked** — each is a claim a customer
  can act on. Set them in `site.claims` only once confirmed. These also gate
  eligibility for Google's Local Services Ads.
- **Reviews** — real ones, with the customer's permission, in `site.reviews`.
  Invented testimonials are deceptive advertising, and the structured data omits
  `aggregateRating` entirely until `site.rating` holds a figure from a real
  platform. This is also the single strongest local-search signal there is.
- **Google Business Profile URL** — see the search section below.
- **Photos** — the hero and service cards still show the on-brand placeholder.

## What the site can and cannot do for search

Worth stating plainly, because it is the most commonly oversold thing in web
work. Google documents exactly three inputs for the local map pack — the block
of three businesses above the blue links — in
<https://support.google.com/business/answer/7091>: **relevance**, **distance**
and **prominence**. A website is not one of them.

It touches that system at two thin points: it corroborates relevance, and it
feeds prominence, but Google's phrasing for prominence is "how many websites
link to your business" — other sites linking in, not the quality of your own
markup. So no amount of work in this repo moves map-pack position. A flawless
site can rank nowhere in the pack; a business with no site at all can rank
first.

What this build genuinely does:

- **Converts the click** once the pack or a blue link is won. That is what the
  published pricing, the booking links and the accessibility work are for.
- **Competes in the blue links**, where on-page relevance does count — and in
  particular in Spanish, where a survey of Mount Vernon cleaning competitors
  found none serving Spanish content at all, in a city that is roughly a third
  Hispanic/Latino. The `/es/` page is hand-written Spanish, not machine
  translation, which is what makes it eligible.
- **Feeds the profile consistent data** — name, phone, hours and services that
  match the Business Profile exactly, so nothing contradicts.

The levers that actually move position belong to the owner: verifying and fully
populating the Google Business Profile, accumulating real reviews steadily, and
— if she buys liability insurance and passes the background check — Local
Services Ads, which is a separate auction that renders above the pack.

One structural choice is still open: this is one page per language, with every
service and all nine towns on it. That is legitimate for a service-area
business and matches Google's own `LocalBusiness` example, but it cannot
out-rank dedicated per-service, per-city pages for queries like "office
cleaning Burlington WA". Splitting is worth doing only with genuinely distinct
content per page — nine near-identical town pages would be thin content and
would hurt.

## Accessibility

`npm run check:a11y` runs axe-core against the built `dist/` in both languages
at phone width and fails the command on any violation. It is a gate rather than
a one-off audit because the palette lives in CSS custom properties, where a
token nudged for looks can silently drop text under the 4.5:1 contrast floor.

Current result: **zero WCAG 2.1 AA violations on both locales**, 22 checks
passing each.
Getting there needed one change to `tokens/colors.css`: the primary button was
white on `--teal-500` at **2.57:1** against a 4.5:1 requirement, and teal text
was 3.41:1. Both roles now point at `--teal-700`, which was already in the
palette and clears 4.79–5.40:1. No new colour was invented and the hue moves
175° → 174°. `--teal-500` is still the brand colour for decorative fills that
carry no text.
