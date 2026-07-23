Primary action element; renders a `<button>` or an `<a>` when `href` is set. Use for every call-to-action.

```jsx
<Button>Get a free quote</Button>
<Button variant="secondary" leadingIcon={<Icon name="phone" size={18} />}>Call us</Button>
<Button variant="outline" size="lg" href="#book">Book a cleaning</Button>
<Button variant="ghost">Learn more</Button>
<Button loading>Sending…</Button>
```

- Variants: `primary` (teal, default), `secondary` (white/bordered), `outline` (teal border), `ghost` (text), `danger`.
- Sizes `sm | md | lg`; `md` is the 44px default. `fullWidth` stretches to container.
- Pass icons as nodes via `leadingIcon` / `trailingIcon` using `<Icon>`.
- One `primary` per view. Pair a primary with a `secondary`/`ghost`, never two primaries.
