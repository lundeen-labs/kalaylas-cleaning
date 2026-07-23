Icon-only button for compact actions (close, menu, call, favorite). Always provide `label` for accessibility.

```jsx
<IconButton label="Call us"><Icon name="phone" size={20} /></IconButton>
<IconButton variant="soft" label="Add"><Icon name="plus" size={20} /></IconButton>
<IconButton variant="solid" label="Next"><Icon name="arrow-right" size={20} /></IconButton>
```

- Variants: `ghost` (default), `soft` (teal tint), `solid` (teal fill), `outline`.
- Sizes `sm | md | lg`; `md` (44px) meets the touch-target minimum.
