// Copyright 2026 Naim OUDAYET
// License LGPL-3
//
// The rendered button, not the helpers: mount the real SearchBar and check the
// button appears only with a facet, and that one click empties the bar. The
// specs in clear_filters.test.js cover the pure functions and stay green even
// if the template never renders the button (Odoo 20 resolves template names
// through `this.`; a bare `hasActiveFilters` is simply undefined there).
import { describe, expect, test } from "@odoo/hoot";
import { click } from "@odoo/hoot-dom";
import { animationFrame } from "@odoo/hoot-mock";
import {
    defineModels,
    fields,
    models,
    mountWithSearch,
} from "@web/../tests/web_test_helpers";
import { SearchBar } from "@web/search/search_bar/search_bar";

class Partner extends models.Model {
    name = fields.Char();
    foo = fields.Char();

    _records = [{ id: 1, name: "First record", foo: "yop" }];
}

defineModels([Partner]);

const SEARCH_ARCH = `
    <search>
        <filter name="yop" string="Yop" domain="[('foo', '=', 'yop')]"/>
        <filter name="by_foo" string="Foo" context="{'group_by': 'foo'}"/>
    </search>`;

function mountBar(context = {}) {
    return mountWithSearch(SearchBar, {
        resModel: "partner",
        searchMenuTypes: ["filter", "groupBy"],
        searchViewId: false,
        searchViewArch: SEARCH_ARCH,
        context,
    });
}

describe("no_clear_all_filters / the Clear All button", () => {
    test("is not shown while the search bar is empty", async () => {
        await mountBar();
        expect(".o_searchview_facet").toHaveCount(0);
        expect(".o_no_clear_all_filters_btn").toHaveCount(0);
    });

    test("appears with a facet and clears filter and group-by in one click", async () => {
        await mountBar({ search_default_yop: 1, search_default_by_foo: 1 });
        expect(".o_searchview_facet").toHaveCount(2);
        expect(".o_no_clear_all_filters_btn").toHaveCount(1);

        await click(".o_no_clear_all_filters_btn");
        await animationFrame();

        expect(".o_searchview_facet").toHaveCount(0);
        expect(".o_no_clear_all_filters_btn").toHaveCount(0);
    });
});
