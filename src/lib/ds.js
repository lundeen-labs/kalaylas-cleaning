/**
 * Barrel for the design system.
 *
 * The prototype reached these through `window.KaleylaSCleaningDesignSystem_b83ec6`,
 * a global published by _ds_bundle.js. The components themselves were always
 * ordinary ES modules under components/ — the global only existed because the
 * browser was compiling each section in its own Babel scope with no module
 * loader. Importing the sources directly means the bundler can see the graph,
 * drop what no page uses, and render all of it to HTML at build time.
 *
 * _ds_bundle.js is left in place: it is what the design-system preview cards in
 * guidelines/ and the prototypes in ui_kits/ still load.
 */
export { Button } from '../../components/actions/Button.jsx'
export { IconButton } from '../../components/actions/IconButton.jsx'
export { Icon } from '../../components/brand/Icon.jsx'
export { Logo } from '../../components/brand/Logo.jsx'
export { Card } from '../../components/containers/Card.jsx'
export { Tabs } from '../../components/containers/Tabs.jsx'
export { Avatar } from '../../components/data-display/Avatar.jsx'
export { Rating } from '../../components/data-display/Rating.jsx'
export { Stat } from '../../components/data-display/Stat.jsx'
export { Alert } from '../../components/feedback/Alert.jsx'
export { Badge } from '../../components/feedback/Badge.jsx'
export { Checkbox } from '../../components/forms/Checkbox.jsx'
export { Chip } from '../../components/forms/Chip.jsx'
export { Input } from '../../components/forms/Input.jsx'
export { Select } from '../../components/forms/Select.jsx'
export { Switch } from '../../components/forms/Switch.jsx'
export { Textarea } from '../../components/forms/Textarea.jsx'
