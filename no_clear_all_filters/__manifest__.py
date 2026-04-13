# Copyright 2026 Naim OUDAYET
# License LGPL-3

{
    "name": "Clear All Filters Button",
    "version": "19.0.1.0.0",
    "category": "Productivity",
    "summary": "One-click button to clear all active filters, group-bys, and favorites from the search bar",
    "description": """Clear All Filters - adds a single button next to the search bar
that removes all active filters, group-bys, favorites, and typed queries in one click.
Uses Odoo 19 native searchModel API. Pure frontend, zero server impact.""",
    "author": "Naim OUDAYET",
    "website": "https://apps.odoo.com/apps/modules/browse?author=Naim%20OUDAYET",
    "license": "LGPL-3",
    "depends": ["web"],
    "assets": {
        "web.assets_backend": [
            "no_clear_all_filters/static/src/js/clear_filters.js",
            "no_clear_all_filters/static/src/xml/clear_filters.xml",
            "no_clear_all_filters/static/src/scss/clear_filters.scss",
        ],
    },
    "images": ["static/description/banner.png"],
    "installable": True,
    "application": False,
    "auto_install": False,
}
