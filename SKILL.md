---
name: kalaylas-design
description: Use this skill to generate well-branded interfaces and assets for Kalayla's Cleaning Service, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand:** Kalayla's Cleaning Service — family-owned residential & commercial cleaning, Mount Vernon WA, bilingual EN/ES. Calm, trustworthy, spotless.
- **Global CSS:** link `styles.css` (it `@import`s fonts + all tokens + base + component styles).
- **Tokens:** teal brand (`--brand` #10B5A6, `--brand-deep` #0A3B3A), warm-cool slate neutrals, honey accent (`--accent`). Type: Schibsted Grotesk (display), Hanken Grotesk (body), Spline Sans Mono (labels). Pills for buttons, 24px cards, soft teal-tinted shadows.
- **Components:** built into `_ds_bundle.js`. In an HTML file, link `styles.css`, load React + the bundle, then `const { Button, Card, Icon, Logo, ... } = window.KalaylaSCleaningDesignSystem_b83ec6`. Each component has a `.prompt.md` next to it with usage.
- **Icons:** Lucide via CDN (`<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js">`), rendered through the `<Icon name="…">` component. No emoji.
- **UI kits:** `ui_kits/website/` (bilingual marketing site) and `ui_kits/booking/` (multi-step quote flow) — read these for full-page patterns.
- **Voice:** "we"/"you", sentence case, plain and warm, tú (not usted) in Spanish, no hype, no emoji. Mirror key lines in EN + ES.
