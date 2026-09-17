The Kalayla's Cleaning Service brand lockup — sparkle mark plus wordmark and tagline. Use in headers, footers, login, and any branded surface.

```jsx
<Logo />                               // full lockup, light background
<Logo tone="reversed" size={44} />     // on deep-teal sections / footer
<Logo variant="mark" size={32} />      // compact, mark only (favicons, tight nav)
<Logo tagline={false} size={28} />     // wordmark without "Cleaning Service"
```

- `tone="default"` on light, `tone="reversed"` on `--surface-inverse`, `tone="mono"` to inherit a single `currentColor`.
- `size` is the sparkle height in px; the wordmark and tagline scale from it.
- Never recolor the wordmark outside these tones or stretch the lockup.
