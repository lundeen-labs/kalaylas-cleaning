/**
 * Build an internal URL that survives being served from a subpath.
 *
 * GitHub Pages serves this as a project site under /kaleylas-cleaning/, so a
 * hardcoded href="/es/" would point at the domain root and 404. Astro exposes
 * the configured base as BASE_URL; it always carries a trailing slash, which is
 * stripped here so joining never produces a double slash.
 *
 *   href('/')    -> '/kaleylas-cleaning/'
 *   href('/es/') -> '/kaleylas-cleaning/es/'
 *
 * On a custom domain (base '/') both collapse back to '/' and '/es/'.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function href(path) {
  if (!path.startsWith('/')) return path
  return `${BASE}${path}` || '/'
}
