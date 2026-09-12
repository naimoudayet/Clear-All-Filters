# Copyright 2026 Naim OUDAYET
# License LGPL-3
import odoo.tests
from odoo.tests import HttpCase


@odoo.tests.tagged("post_install", "-at_install", "no_clear_all_filters_js")
class ClearAllFiltersJsSuite(HttpCase):
    """Wraps Odoo's QUnit JS test runner for just this module's specs.

    Loads /web/tests?filter=no_clear_all_filters in headless Chrome so only our
    QUnit tests execute, then waits for QUnit.done to report pass/fail.
    """

    def test_js_suite(self):
        self.browser_js(
            "/web/tests?filter=no_clear_all_filters",
            "",
            "",
            login="admin",
            timeout=180,
        )
