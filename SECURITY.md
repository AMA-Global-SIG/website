# Security

## Dependency vulnerability assessment (2026-07-02)

`npm audit fix` (non-breaking) was run to resolve all safely-fixable advisories,
including the high-severity transitive build-time dependencies (`devalue`,
`undici`, `vite`, `tmp`, `fast-uri`, `fast-xml-builder`). This reduced the alert
count from 42 to 28.

The remaining open Dependabot/`npm audit` alerts are **knowingly accepted**. They
all require a major-version Astro upgrade (5 → 7) that would cascade into a
site-wide Tailwind v3 → v4 rewrite (`@astrojs/tailwind` is unsupported on Astro 7)
and dropping `astro-embed` (no Astro-7-compatible release). That migration's
regression risk far outweighs the risk of the advisories themselves for this site.

### Why the residual `astro` advisories do not apply

This is a **fully prerendered static site** (Netlify adapter, no on-demand
rendering, no user input rendered at runtime). The outstanding `astro` advisories
require features this site does not use:

- **GHSA-j687-52p2-xcff** — XSS in `define:vars` via `</script>` sanitization (no
  `define:vars` with untrusted data).
- **GHSA-xr5h-phrj-8vxv** — Server Islands encrypted-param replay (no Server
  Islands / `server:defer`).
- **GHSA-8hv8-536x-4wqp** — reflected XSS via unescaped slot name (no dynamic slot
  names from untrusted input).
- **GHSA-jrpj-wcv7-9fh9** — XSS via unescaped attribute names in spread props (no
  untrusted spread-prop names).
- **GHSA-2pvr-wf23-7pc7** — host-header SSRF in prerendered error-page fetch (no
  SSR error pages).

The related low-severity alerts (`@astrolib/analytics`, `@astrolib/seo`,
`astro-embed`, `@astrojs/mdx`, `@astrojs/tailwind`) are flagged only because they
depend on Astro; they carry no independent runtime risk here.

### Follow-up

A dedicated Astro 7 + Tailwind v4 migration should be planned as its own project
when there is time to test the full site for visual regressions.
