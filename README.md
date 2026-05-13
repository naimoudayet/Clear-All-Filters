# Clear All Filters Button

One-click button next to the standard Odoo search bar that wipes every active filter, group-by, favorite, and typed query. Pure frontend OWL patch — no Python models, no RPC, no server impact. Zero configuration. Available in 9 languages.

## Choose Your Odoo Version

Each Odoo major version lives on its own branch. Pick the one matching your server.

| Odoo Version | Stable | Development |
|---|---|---|
| 19.0 | [`19.0`](../../tree/19.0) | [`19.0.dev`](../../tree/19.0.dev) |
| 18.0 | [`18.0`](../../tree/18.0) | [`18.0.dev`](../../tree/18.0.dev) |
| 17.0 | [`17.0`](../../tree/17.0) | [`17.0.dev`](../../tree/17.0.dev) |
| 16.0 | [`16.0`](../../tree/16.0) | [`16.0.dev`](../../tree/16.0.dev) |

The technical module name is **`no_clear_all_filters`** on every version branch.

## What It Does

- **One-Click Reset** — Wipes every active filter, group-by, favorite, and typed query in a single click. No partial state, no per-chip clicking.
- **Auto-Hide** — The button only appears when the search bar has something to clear. A clean view stays clean.
- **Every View** — List, kanban, pivot, graph, calendar, activity, and any custom view that uses Odoo's standard search bar.
- **Native API** — Drives `searchModel.deactivateGroup()` + `clearQuery()`. No private API, no monkey-patches.
- **Single Re-Render** — `blockNotification` batches facet deactivations into one view refresh.
- **Pure Frontend** — No Python models, no RPC, no database changes.
- **Zero Configuration** — Install and the button is there everywhere.
- **Translated into 9 Languages** — English, French, Spanish, German, Dutch, Portuguese (BR), Italian, Chinese (Simplified), Arabic. Each user sees the button label and tooltip in their own Odoo language.

## Quick Install

1. Check out the branch matching your Odoo version (see table above).
2. Copy the `no_clear_all_filters/` folder into a directory listed in your Odoo `addons_path`.
3. **Apps → Update Apps List → search "Clear All Filters" → Install**.

Full per-version installation, configuration, and test instructions live in each branch's own README.

## Languages

Ships with translations for:

| Code     | Language                |
|----------|-------------------------|
| `en_US`  | English (source)        |
| `fr`     | French                  |
| `es`     | Spanish                 |
| `de`     | German                  |
| `nl`     | Dutch                   |
| `pt_BR`  | Portuguese (Brazil)     |
| `it`     | Italian                 |
| `zh_CN`  | Chinese (Simplified)    |
| `ar`     | Arabic                  |

Regional variants (e.g. `fr_BE`, `nl_BE`) inherit from the base language via Odoo's standard fallback. To add a new language, drop a `<code>.po` file into the branch's `i18n/` folder — the canonical template is `i18n/no_clear_all_filters.pot`.

## Compatibility

Works on **Odoo 16.0 through 19.0**, Community and Enterprise editions. Compatible with every view that uses Odoo's standard search bar (list, kanban, pivot, graph, calendar, activity, custom views). No Python dependencies.

## Repository Layout

This `main` branch is a landing page only. Module code, the development Docker stack, and per-version tests live on the per-version branches above.

## Author

**Naim OUDAYET** — Odoo developer based in Tunisia.

- Website: [oudayet.com](https://www.oudayet.com)
- Email: contact@oudayet.com
- GitHub: [@naimoudayet](https://github.com/naimoudayet)

## License

[LGPL-3](https://www.gnu.org/licenses/lgpl-3.0.html).
