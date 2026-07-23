Lucide line icon rendered by name — the brand's only icon system. Use anywhere you need an icon; requires the Lucide CDN script on the page.

```jsx
<Icon name="shield-check" size={20} />
<Icon name="sparkles" size={24} color="var(--brand)" />
<Icon name="phone" title="Call us" />   // accessible label
```

- `name` is kebab-case Lucide (`building-2`, `calendar-check`, `map-pin`, `spray-can`).
- Default `size` 20, `strokeWidth` 2 — the calm 2px brand weight. Bump stroke down to 1.75 for large feature glyphs if desired.
- Color inherits `currentColor`; set the parent's `color` (e.g. `--text-muted`, `--brand`) rather than passing `color` directly when possible.
- Feature glyphs: drop an `<Icon>` inside a 44–48px soft-teal tile (`--surface-brand-soft`, radius 14px).
- No emoji anywhere in the brand — use this instead.
