# Copyright 2026 Naim OUDAYET
# License LGPL-3
import odoo.tests
from odoo.tests import HttpCase


@odoo.tests.tagged("post_install", "-at_install", "no_clear_all_filters_js")
class ClearAllFiltersJsSuite(HttpCase):
    """Wraps Odoo's JS test runner (Hoot) for just this module's specs.

    Invokes /web/tests in headless Chrome with a name-prefix filter so only
    the specs under `no_clear_all_filters` run — not the entire Odoo Hoot suite
    (which would be ~30min on CI).
    """

    @odoo.tests.no_retry
    def test_js_suite(self):
        self.browser_js(
            "/web/tests?headless&loglevel=2&preset=desktop&timeout=30000"
            "&filter=no_clear_all_filters",
            "",
            "",
            login="admin",
            timeout=300,
            success_signal="[HOOT] Test suite succeeded",
        )
