# Kalayla's Cleaning Service — Design System

> Calm, trustworthy, spotless. The design system for a family-owned residential &
> commercial cleaning service in Mount Vernon, Washington — serving busy households
> and local businesses in English **and** Spanish.

---

## 1. Brand context

**Kalayla's Cleaning Service** is a locally-owned, owner-operated cleaning company
based in **Mount Vernon, WA** (Skagit Valley). It serves two audiences:

- **Residential** — recurring and one-time home cleaning for busy families who want
  their weekend back. This is the heart of the brand: warm, personal, dependable.
- **Commercial** — offices and small businesses that need a reliable, vetted team on
  a regular schedule.

The owners are **fluent in English and Spanish**, and the brand is genuinely
**bilingual**: headlines, trust lines, and calls-to-action are written naturally in
both languages (not machine-translated). Spanish is a first-class citizen, not an
afterthought toggle.

**Brand personality:** calm · trustworthy · neighborly · spotless · honest.
Not corporate, not flashy, not "tech-disruptor." This is the feeling of a clean,
quiet home and a team you'd trust with your keys.

### Sources
This system was **created from scratch** for this brand — there was no existing
codebase, Figma file, or prior brand kit supplied. All visual decisions
(palette, type, voice) originate here. If brand assets (a real logo, photography,
brand guidelines, font licenses) exist or get created later, drop them in and we'll
reconcile this system to them.

---

## 2. Content fundamentals — how Kalayla's writes

**Voice:** warm, plain-spoken, reassuring. We sound like a trusted neighbor who
happens to be very good at cleaning — never a faceless corporation, never salesy.

**Person & pronouns**
- The business is **"we" / "our team" / "Kalayla's"** — first person plural, always.
- The customer is **"you" / "your home" / "your team"** — second person, direct.
- Example: *"We treat your home like it's our own."* / *"Tratamos tu casa como si fuera la nuestra."*

**Tone rules**
- Lead with **trust and relief**, not features. Sell the *feeling* of a clean home
  and time back, not the chemicals.
- **Short, concrete sentences.** Plain words over jargon. "Deep clean," not
  "comprehensive sanitization solution."
- **Calm confidence, not hype.** One exclamation point is plenty for a whole page.
  Avoid ALL-CAPS shouting, "!!!", and urgency-spam ("ACT NOW").
- **Honest & specific.** Name what's included. "Floors, baths, kitchen, dusting —
  every visit." Specifics build trust.

**Casing**
- Headlines & buttons: **Sentence case** ("Get a free quote", not "Get A Free Quote").
- Eyebrows / small labels: **UPPERCASE** with wide tracking, set in the mono face
  ("RESIDENTIAL CLEANING", "SERVING SKAGIT VALLEY").
- Never Title Case full sentences.

**Bilingual approach**
- Primary surfaces ship in **English with key lines mirrored in Spanish**, or via a
  clear **EN / ES** toggle in the header.
- Spanish copy is **natural and warm**, matching the English tone — use *tú* (familiar),
  not *usted*, to keep it neighborly.
- Common pairs:
  - Get a free quote → **Pide tu cotización gratis**
  - Book a cleaning → **Reserva tu limpieza**
  - Trusted by Skagit families → **De confianza para las familias de Skagit**
  - Licensed & insured → **Con licencia y seguro**
  - Satisfaction guaranteed → **Satisfacción garantizada**

**Emoji & symbols:** **No emoji** in product or marketing UI — it undercuts the calm,
trustworthy tone. Use the line-icon set instead. Star glyphs (★) are acceptable only
for review ratings. No exclamation-heavy copy.

**Sample copy**
- Hero: *"A spotless home, without lifting a finger."* / *"Una casa impecable, sin mover un dedo."*
- Subhead: *"Trusted, insured cleaners serving Mount Vernon and the Skagit Valley — for homes and offices."*
- Trust line: *"Licensed, insured, and background-checked. Same friendly team, every visit."*
- CTA: *"Get a free quote"* · secondary *"See what's included"*

---

## 3. Visual foundations

The look is **clean, minimal, and calm** — lots of soft white space, a confident teal,
quiet neutrals, and gentle depth. Everything should feel *freshly cleaned*: bright,
uncluttered, and orderly.

**Color**
- **Teal is the brand** (`--brand` `#10B5A6`). It carries primary actions, links, and
  brand moments. **Deep ink-teal** (`--brand-deep` `#0A3B3A`) anchors headings and
  full-bleed dark sections. **Soft teal tints** (`#ECFBF8` / `#CFF3EE`) wash backgrounds
  and badges.
- **Neutrals are faintly teal-cool slate** — friendly, never clinical gray.
- A **single warm honey accent** (`#E0B358`) appears sparingly — star ratings, a
  highlight underline. Never as a primary action.
- Backgrounds are **near-white with a faint cool tint** (`--surface-page` `#F7F9F8`),
  cards are pure white. Dark sections use deep teal, not black.

**Typography**
- **Display — Schibsted Grotesk** (700–800): confident, friendly headlines, tight tracking.
- **Body/UI — Hanken Grotesk** (400–600): calm, highly legible, roomy line-height (1.5–1.65).
- **Mono — Spline Sans Mono** (600): eyebrows, labels, prices, the small technical voice.
- Headings are tinted deep teal (`--text-heading`), body is warm slate (`--text-body`).
- `text-wrap: balance` on headings, `pretty` on body.

**Spacing & layout**
- **4px base grid.** Marketing sections breathe at `--section-y` (96px). Containers
  cap at 1240px with 24px gutters. Generous negative space is a feature, not a gap.
- Fixed elements: a **sticky translucent header** (white at ~85% with backdrop-blur).
  Footers are deep teal.

**Backgrounds & texture**
- Mostly **flat washes** of white / soft-teal / deep-teal — *no* heavy gradients,
  *no* busy patterns. The "AI gradient blob" look is explicitly avoided.
- Imagery is **bright, warm, natural-light photography** of real, tidy homes and
  smiling local teams — never cold stock or moody tones. Photos sit in rounded frames
  (`--radius-image` 32px). Optional faint teal duotone for brand cohesion.
- One subtle motif allowed: a **soft "sparkle/clean" arc** or a gentle teal blurred
  glow behind hero imagery — used at low opacity, never loud.

**Corner radii** — soft and friendly. Buttons are **full pills** (`--radius-button`).
Inputs 14px. Cards 24px (`--radius-card`). Images 32px.

**Cards** — white surface, **soft teal-tinted shadow** (`--elevation-card`), a hairline
`--border-subtle` for definition, 24px radius, roomy 24–32px padding. Calm depth, never
heavy drop-shadows. Elevation rises on hover, not borders.

**Shadows** — soft, diffused, **tinted with deep teal** (cohesive, not gray). Five steps
xs→xl. Primary CTAs get a faint **teal glow** on hover (`--shadow-brand`).

**Borders** — hairlines (`--border-subtle` `#E1E7E6`). Used for definition, not
decoration. No colored left-border accent cards.

**Animation** — calm and reassuring. **Smooth ease-out** (`cubic-bezier(0.22,1,0.36,1)`),
gentle fades and short slides (8–16px). Durations 150–340ms. **No bounce, no spring
overshoot, no parallax theatrics.** All motion respects `prefers-reduced-motion`.

**Hover states** — buttons deepen one teal step (`--brand` → `--brand-strong`) and lift
slightly with the brand glow; cards raise elevation; links underline with a 2px offset.
**Press states** — deepen another step (`--brand-pressed`) and settle down ~1px (no scale
bounce). Opacity dips are reserved for disabled (0.5).

**Transparency & blur** — used purposefully: the sticky header (white/85% + blur),
overlay scrims behind dialogs (deep-teal/40%), and faint glass on image-overlaid chips.
Never gratuitous glassmorphism.

---

## 4. Iconography

- **Icon system:** [**Lucide**](https://lucide.dev) — clean, rounded-corner, **2px
  stroke** line icons. They match the calm, friendly, minimal tone perfectly and are
  CDN-available, so the system links Lucide rather than shipping a bespoke set.
  *(This is a chosen substitution, flagged: there was no proprietary icon set to import.
  If a custom set is desired later, supply the SVGs and we'll swap.)*
- **Style:** outline (stroked), not filled; 1.75–2px stroke; rounded line caps. Icon
  color inherits `currentColor` — usually `--text-muted` or `--brand`.
- **Sizing:** 18–20px inline with text, 24px in buttons, 28–40px as feature glyphs.
  Feature glyphs sit in a **soft-teal rounded tile** (`--surface-brand-soft`, 14px radius).
- **No emoji** anywhere. **★** (U+2605) is the only Unicode glyph used, exclusively for
  review star ratings, tinted `--accent` honey.
- The brand wordmark pairs the name with a small **sparkle/leaf droplet** mark
  (see `assets/`).

See live specimens in the **Design System** tab (groups: Colors, Type, Spacing, Brand,
Components, plus the UI kits).

---

## 5. Substitutions & notes (please review)

This brand was built from scratch, so two pieces are **chosen defaults**, flagged for
your approval — swap them anytime by supplying the real assets:

- **Fonts** are Google Fonts loaded via CDN `@import` (`tokens/fonts.css`): **Schibsted
  Grotesk**, **Hanken Grotesk**, **Spline Sans Mono**. They are not self-hosted binaries
  (those can't be fetched here). If you want them shipped with the system or want
  different faces, send the files and we'll write local `@font-face` rules.
- **Icons** are **Lucide** (CDN), via the `<Icon>` component. If you have a custom icon
  set, supply the SVGs and we'll swap.
- **Logo** is an original sparkle wordmark made for this system (`assets/logo/`). If a
  real logo exists, drop it in and we'll reconcile.
- **Photography** is represented by on-brand placeholders (soft-teal panels) throughout
  the kits — replace with real bright, natural-light photos of homes and the team.

## 6. Index / manifest

- `styles.css` — root entry; `@import`s fonts + all tokens + base + component styles. **Consumers link this.**
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `motion.css`, `base.css`.
- `components/components.css` — interaction/state styles for the primitives (shipped in the `styles.css` closure).
- `guidelines/` — foundation specimen cards (Design System tab): brand logo & voice, color (brand / neutrals / status / surfaces), type (display / body / mono / scale), spacing / radius / shadow / motion, iconography.
- `components/` — reusable React primitives, namespace `window.KalaylaSCleaningDesignSystem_b83ec6`:
  - `brand/` — **Logo**, **Icon**
  - `actions/` — **Button**, **IconButton**
  - `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Switch**, **Chip**
  - `feedback/` — **Badge**, **Alert**
  - `data-display/` — **Avatar**, **Rating**, **Stat**
  - `containers/` — **Card**, **Tabs**

  Each has a sibling `.d.ts` (props), `.prompt.md` (usage), and one `@dsCard` HTML per group.
- `ui_kits/website/` — bilingual marketing site (`index.html` + section JSX) and `hero-directions.html` (3 hero directions to choose from).
- `ui_kits/booking/` — multi-step "get a free quote" flow with live price estimate.
- `assets/logo/` — sparkle mark (`mark.svg`, `mark-mono.svg`, `mark-tile.svg`); the full wordmark lockup lives in the `Logo` component.
- `SKILL.md` — portable skill manifest for Claude Code.
