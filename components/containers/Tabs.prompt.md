Pill-style segmented control. Controlled via `value` + `onChange`.

```jsx
const [tab, setTab] = React.useState('home');
<Tabs value={tab} onChange={setTab}
  tabs={[{ value: 'home', label: 'Homes' }, { value: 'office', label: 'Offices' }]} />
```

- `tabs` accepts strings or `{ value, label }` objects.
