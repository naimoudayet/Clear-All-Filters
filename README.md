# Clear All Filters Button — Odoo 17

One-click button to wipe every active filter, group-by, favorite, and typed query from the search bar. Pure frontend OWL patch on the standard `SearchBar` component. Zero configuration, zero server impact.

## Features

- **One-Click Reset** — clears every active filter, group-by, favorite, and typed query in a single click.
- **Auto-Hide** — the button only appears when the search bar has something to clear.
- **Every View** — list, kanban, pivot, graph, calendar, activity, and any custom view that uses Odoo's standard search bar.
- **Native API** — drives `searchModel.deactivateGroup()` + `clearQuery()`. No private API, no monkey-patches.
- **Single Re-Render** — uses `blockNotification` to batch facet deactivations into one view refresh.
- **Pure Frontend** — no Python models, no RPC, no database changes.
- **Zero Configuration** — install and the button is there everywhere.
- **Translated into 9 Languages** — English, French, Spanish, German, Dutch, Portuguese (BR), Italian, Chinese (Simplified), Arabic. Each user sees the button label and tooltip in their own Odoo language.

## How It Works

1. The module patches `SearchBar.prototype` to add a `hasActiveFilters` getter and a `clearAllFilters` method.
2. A QWeb xpath inserts a button inside the standard `o_cp_searchview` container, conditionally rendered when `hasActiveFilters` is true.
3. On click, `clearAllFilters` iterates `searchModel.facets`, calls `deactivateGroup(facet.groupId)` on each (with `blockNotification = true` to suppress per-facet re-renders), then `clearQuery()` to wipe any typed text.
4. One final notification fires, the view re-renders once, the button hides itself again until the next facet stack.

## Technical Details

| Item                 | Value                                                       |
|----------------------|-------------------------------------------------------------|
| Odoo Version         | 17.0                                                        |
| License              | LGPL-3                                                      |
| Dependencies         | `web`                                                       |
| Python Dependencies  | None                                                        |
| Type                 | Pure Frontend (OWL patch on `SearchBar.prototype`)          |
| Mechanism            | `searchModel.deactivateGroup()` + `clearQuery()`            |
| Configuration        | None (zero-config)                                          |

## Installation

1. Place the `no_clear_all_filters` folder in your Odoo addons directory.
2. Restart the Odoo server (or run with `-u no_clear_all_filters` on first install).
3. Go to **Apps**, remove the *Apps* filter, search for **"Clear All Filters"**, and click **Install**.

## Configuration

None. Once installed, the button appears next to the search bar on every view that has one. It auto-hides when there are no active facets.

## Docker Setup (Development)

```bash
docker-compose up -d
```

- Odoo: http://localhost:10417
- PostgreSQL: internal `db17` service (port `7417` exposed for tooling)

The provided `Dockerfile` installs Chromium and `python3-websocket` so Odoo's `HttpCase.browser_js` can run the JS test suite headlessly.

## Running Tests

```bash
docker exec -it clearfilters-odoo-17 \
  odoo --test-enable --stop-after-init \
  -d test_db -i no_clear_all_filters \
  --test-tags no_clear_all_filters_js
```

Runs the QUnit JS specs under `static/tests/` plus the `HttpCase` wrapper in `tests/test_js_suite.py`.

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

Each user sees the button label + tooltip in the language set in **Preferences → Language**. Regional variants (e.g. `fr_BE`, `nl_BE`) inherit from the base language via Odoo's standard fallback. To add a new language, drop a `<code>.po` file into `i18n/` — the canonical template is `i18n/no_clear_all_filters.pot`.

## Compatibility

- Odoo 17.0 Community
- Odoo 17.0 Enterprise
- Works with every view that uses Odoo's standard search bar (list, kanban, pivot, graph, calendar, activity, custom views)

## Author

**Naim OUDAYET**
Odoo developer based in Tunisia.

- Website: [oudayet.com](https://www.oudayet.com)
- Email: contact@oudayet.com
- GitHub: [@naimoudayet](https://github.com/naimoudayet)

## License

This module is licensed under [LGPL-3](https://www.gnu.org/licenses/lgpl-3.0.html).
