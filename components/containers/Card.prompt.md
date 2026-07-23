The surface container — white, soft teal-tinted shadow, hairline border, 24px radius. Wrap most content blocks.

```jsx
<Card>…</Card>
<Card interactive as="a" href="#">…clickable, lifts on hover…</Card>
<Card flat padded={false}>…custom padding, no shadow…</Card>
```

- `interactive` adds a hover lift for clickable cards. `flat` drops the shadow.
