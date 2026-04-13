# Copyright 2026 Naim OUDAYET
# License OPL-1

{
    "name": "Clear All Filters Button",
    "version": "19.0.1.0.0",
    "category": "Productivity",
    "summary": "Adds a single button to clear all active filters, group-bys, and favorites at once",
    "description": """
Clear All Filters Button
========================

Adds a "Clear All" button to the search bar area that removes all active
filters, group-bys, and favorites in one click.

Currently, users must click the X on each individual filter to remove them.
This module adds a convenient button that clears everything at once.

Features:
- Single "Clear All" button in the search bar area
- Removes all active filters, group-bys, and favorites
- Only visible when at least one search item is active
- Clean, minimal design that matches the Odoo UI
    """,
    "author": "Naim OUDAYET",
    "license": "OPL-1",
    "depends": ["web"],
    "assets": {
        "web.assets_backend": [
            "no_clear_all_filters/static/src/js/clear_filters.js",
            "no_clear_all_filters/static/src/xml/clear_filters.xml",
            "no_clear_all_filters/static/src/scss/clear_filters.scss",
        ],
    },
    "installable": True,
    "application": False,
    "auto_install": False,
}
