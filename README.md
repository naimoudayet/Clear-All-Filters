# Clear All Filters Button

**Odoo 19.0** | **LGPL-3** | **FREE** | **Author: Naim OUDAYET**

One-click button to clear all active filters, group-bys, and favorites from the search bar. No more clicking X on each tag individually.

## Features

- **One Button** - removes all active filters, group-bys, favorites, and typed queries
- **Auto-Hide** - button only appears when filters are active
- **Matches Search Bar** - same height, seamless integration
- **Responsive** - adapts to mobile/small screens
- **Pure Frontend** - OWL widget patch, zero server impact
- **Uses Native API** - calls Odoo 19's `searchModel.deactivateGroup()` and `clearQuery()`

## Installation

1. Copy `no_clear_all_filters` to your Odoo addons directory
2. Update Apps List, search "Clear All Filters", install

### Docker

```bash
docker-compose up -d
```

Access at http://localhost:10419

## Usage

1. Go to any list or kanban view
2. Apply some filters, group-bys, or favorites
3. Click the red **Clear All** button that appears next to the search bar
4. Everything is cleared in one shot

## Technical Details

| Detail | Value |
|--------|-------|
| Module Name | `no_clear_all_filters` |
| Version | 19.0.1.0.0 |
| Dependencies | `web` |
| License | LGPL-3 |
| Type | Pure frontend (OWL 2 patch on SearchBar) |
| Server Impact | None |

## Author

**Naim OUDAYET**
- [All Modules](https://apps.odoo.com/apps/modules/browse?author=Naim%20OUDAYET)

## License

LGPL-3
