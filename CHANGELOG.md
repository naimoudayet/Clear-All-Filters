# Changelog

All notable changes to **Clear All Filters Button** for Odoo 16.0 are documented here.

This file follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.
Versions use Odoo's `<odoo_version>.<module_major>.<module_minor>.<module_patch>` scheme.

## [16.0.1.2.0] - 2026-05-13

### Added
- **Arabic translation** (`ar`) — 9 languages total. All 5 msgids covered (manifest `name` / `summary` / `description`, button label "Clear All", tooltip "Clear all active filters, group-bys, and favorites").
- New language card with AR flag in the "Available in 9 Languages" section of the App Store description.
- `ar` row in the Languages table in README.
- `ar.png` added under `static/description/flags/` (sourced from the shared `_shared/flags/` library).
- New **"Translated into 9 Languages"** feature bullet in README + Languages section table.

### Changed
- Hero "8 Languages" badge updated to "9 Languages" and section header from "Available in 8 Languages" to "Available in 9 Languages".
- Language flag grid switched from 4-per-line (`col-md-3 col-sm-4 col-6`) to 3-per-line (`col-md-4 col-sm-6 col-12`) to match the portfolio standard set by PDF-Preview-Before-Print.
- Trailing "Standard PO translation files…" technical footnote removed from the Languages section (not buyer-facing).
- Technical Details: version row bumped + Languages row appended with `AR`.
- Module version bumped from `16.0.1.1.0` to `16.0.1.2.0` (semver minor for new language).

## [16.0.1.1.0] - 2026-05-12

### Added
- **Internationalization (i18n) support** with 8 languages: English (source), French, Spanish, German, Dutch, Portuguese (Brazil), Italian, Chinese (Simplified).
- POT template + 7 PO files under `no_clear_all_filters/i18n/`.
- `static/description/flags/` folder with 8 PNG flags.
- **"Available in 8 Languages"** section in App Store description.
- **"8 Languages"** badge in App Store hero banner.
- `Languages` row in Technical Details table.
- `CHANGELOG.md` at repo root.

### Changed
- Manifest `currency` fixed from `EUR` to `USD` (per portfolio rule — ODOO_GUIDELINES §4).
- Banded sections in `index.html` now use `padding: 48px 32px` (was `48px 0`) — keeps inner Bootstrap cards from touching the column edges (ODOO_GUIDELINES §2.0).
- Inline `<code>` replaced with `<em>` in `index.html` (Odoo stylesheet otherwise restyles `<code>` red).
- Monospace `<div>` code block replaced with `<pre>` (no `font-family` declaration — ODOO_GUIDELINES §2.0).
- Module version bumped from `16.0.1.0.0` to `16.0.1.1.0`.

## [16.0.1.0.0] - Initial release

### Added
- One-click `Clear All` button next to the standard Odoo search bar.
- OWL patch on `SearchBar.prototype` exposing `hasActiveFilters` getter + `clearAllFilters` method.
- Uses native `searchModel.deactivateGroup()` + `clearQuery()`; single re-render via `blockNotification`.
- Button auto-hides when no facets / typed query is active.
- Hoot/QUnit JS test suite + `HttpCase` wrapper.
