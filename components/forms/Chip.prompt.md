Selectable pill for filters and multi-select choices (service types, frequency, add-ons). Controlled.

```jsx
<Chip selected={type === 'home'} onClick={() => setType('home')}
  leadingIcon={<Icon name="home" size={16} />}>Home</Chip>
<Chip selected={type === 'office'} onClick={() => setType('office')}>Office</Chip>
```

- `selected` paints the teal-tinted active state and sets `aria-pressed`.
