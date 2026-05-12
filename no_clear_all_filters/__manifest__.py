# Copyright 2026 Naim OUDAYET
# License LGPL-3
{
    "name": "Clear All Filters Button",
    "summary": "One-click button to clear all active filters, group-bys, favorites, and typed queries from the search bar",
    "description": "Clear All Filters Button adds a single button next to the search bar that "
                   "removes all active filters, group-bys, favorites, and typed queries in one click. "
                   "Uses Odoo's native searchModel API. Pure frontend, zero server impact, no configuration.",
    "version": "18.0.1.1.0",
    "category": "Extra Tools",
    "website": "https://www.oudayet.com",
    "author": "Naim OUDAYET",
    "maintainers": ["naimoudayet"],
    "license": "LGPL-3",
    "application": False,
    "installable": True,
    "auto_install": False,
    "depends": ["web"],
    "data": [],
    "assets": {
        "web.assets_backend": [
            "no_clear_all_filters/static/src/scss/clear_filters.scss",
            "no_clear_all_filters/static/src/xml/clear_filters.xml",
            "no_clear_all_filters/static/src/js/clear_filters.js",
        ],
        "web.assets_unit_tests": [
            "no_clear_all_filters/static/tests/**/*.test.js",
        ],
    },
    "images": [
        "static/description/banner.png",
    ],
    "price": 0,
    "currency": "USD",
    "support": "contact@oudayet.com",
}
