# Changelog

All notable changes to **Clear All Filters Button** for Odoo 16.0 are documented here.

This file follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.
Versions use Odoo's `<odoo_version>.<module_major>.<module_minor>.<module_patch>` scheme.

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
