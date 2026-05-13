# Changelog

This repository hosts **Clear All Filters Button** as separate per-Odoo-version branches. Each version branch maintains its own detailed changelog. This file tracks repository-level changes only.

## 2026-05-13 (v1.2.0 — Arabic + storefront polish)

- All version branches bumped to `X.0.1.2.0`. **9 languages total** with the addition of `ar` (Arabic). New `ar.png` flag picked up from the shared library at `N:\Apps\_shared\flags\`.
- **Storefront `index.html` polish** — language flag grid switched from 4-per-line (`col-md-3 col-sm-4 col-6`) to 3-per-line (`col-md-4 col-sm-6 col-12`) so 9 cards lay out evenly across 3 rows. Hero badge updated from `8 Languages` to `9 Languages`, section header to "Available in 9 Languages". Trailing "Standard PO translation files…" technical footnote removed (gettext mechanics are not buyer-facing).
- **`main` rewritten as a multi-version landing page** — module code, `Dockerfile`, `docker-compose.yml`, and `config/` removed from `main` (they now live on the per-version branches only). README is now a buyer-facing landing page that routes to the correct version branch.
- **Repository-level `CHANGELOG.md`** added (this file).

## 2026-05-12 (v1.1.0 — i18n release)

- Tier 2 i18n set added to every version branch: 8 languages (EN source, FR, ES, DE, NL, PT-BR, IT, ZH-CN). POT + 7 PO files under `no_clear_all_filters/i18n/`. Flag PNGs under `no_clear_all_filters/static/description/flags/`.
- App Store description: sanitizer hardening (`<code>` → `<em>`, monospace `<div>` → `<pre>`, banded sections use `padding: 48px 32px`). Hero gets an "8 Languages" badge. Color palette canonicalized to canonical uppercase per `N:\Apps\ODOO_GUIDELINES.md` §1.
- Manifest: `currency` fixed from `EUR` to `USD` per portfolio rule.
- All version branches bumped to `X.0.1.1.0`.

## Initial release

- One-click `Clear All` button next to the standard Odoo search bar.
- OWL patch on `SearchBar.prototype` exposing `hasActiveFilters` getter + `clearAllFilters` method.
- Uses native `searchModel.deactivateGroup()` + `clearQuery()`; single re-render via `blockNotification`.
- Button auto-hides when no facets / typed query is active.
- Hoot/QUnit JS test suite + `HttpCase` wrapper on every version branch.

## Per-version changelogs

For module-level history, see the `CHANGELOG.md` on each version branch:

| Odoo Version | Stable | Development |
|---|---|---|
| 19.0 | [`19.0/CHANGELOG.md`](../../blob/19.0/CHANGELOG.md) | [`19.0.dev/CHANGELOG.md`](../../blob/19.0.dev/CHANGELOG.md) |
| 18.0 | [`18.0/CHANGELOG.md`](../../blob/18.0/CHANGELOG.md) | [`18.0.dev/CHANGELOG.md`](../../blob/18.0.dev/CHANGELOG.md) |
| 17.0 | [`17.0/CHANGELOG.md`](../../blob/17.0/CHANGELOG.md) | [`17.0.dev/CHANGELOG.md`](../../blob/17.0.dev/CHANGELOG.md) |
| 16.0 | [`16.0/CHANGELOG.md`](../../blob/16.0/CHANGELOG.md) | [`16.0.dev/CHANGELOG.md`](../../blob/16.0.dev/CHANGELOG.md) |
