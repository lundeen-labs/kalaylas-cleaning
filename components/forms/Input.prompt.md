Labelled text field with optional leading icon, hint, and error. Forwards all native `<input>` props.

```jsx
<Input label="Full name" placeholder="Jane Garcia" required />
<Input label="Email" type="email" leadingIcon={<Icon name="mail" size={18} />} />
<Input label="ZIP code" hint="We serve Skagit Valley" />
<Input label="Phone" error="Enter a valid number" />
```

- Sizes `sm | md | lg`. `error` overrides `hint` and turns the field red.
