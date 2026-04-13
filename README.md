# Clear All Filters Button

**Odoo 19.0** | **OPL-1** | **Author: Naim OUDAYET**

Adds a single "Clear All" button to the search bar area that removes all active filters, group-bys, and favorites in one click. No more clicking the "x" on each individual tag one by one.

## Features

- Single "Clear All" button in the search bar area to wipe all active search facets
- Removes all active filters, group-by groupings, and applied favorites at once
- Only appears when at least one search item is active, keeping the interface clean
- Clean icon button design that fits naturally into Odoo's search bar aesthetic
- Pure frontend implementation (OWL component patch) -- no server-side changes

## Installation

1. Copy the `no_clear_all_filters` folder to your Odoo addons directory
2. Update the apps list in Odoo (Settings > Apps > Update Apps List)
3. Search for "Clear All Filters Button" and install

### Docker

```bash
docker-compose up -d
```

Then navigate to `http://localhost:10419` and install the module.

## Configuration

No configuration required. The module works out of the box immediately after installation.

## Usage

1. Navigate to any list or kanban view in the Odoo backend
2. Apply one or more filters, group-bys, or favorites
3. A "Clear All" button appears in the search bar area
4. Click it to remove all active search facets and return to the default unfiltered view

## Technical Details

| Detail | Value |
|--------|-------|
| Module Name | `no_clear_all_filters` |
| Version | 19.0.1.0.0 |
| Category | Productivity |
| Dependencies | web |
| License | OPL-1 |

## Author

**Naim OUDAYET**

## License

This module is licensed under the Odoo Proprietary License v1.0 (OPL-1).
