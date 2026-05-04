/** @odoo-module **/
// Copyright 2026 Naim OUDAYET
// License LGPL-3

import { SearchBar } from "@web/search/search_bar/search_bar";
import { patch } from "@web/core/utils/patch";

/**
 * Returns true if the given searchModel has at least one active facet
 * (filter, group-by, favorite) or any text in the typed query.
 *
 * Pure function — exported for unit tests.
 */
export function hasActiveFilters(searchModel) {
    if (!searchModel) {
        return false;
    }
    const facets = searchModel.facets || [];
    const query = searchModel.query || [];
    return facets.length > 0 || query.length > 0;
}

/**
 * Clears all active filters, group-bys, favorites, and typed query
 * from the given searchModel.
 *
 * Uses `blockNotification` to suppress per-facet re-renders so the view
 * only refreshes once at the end. Pure function — exported for unit tests.
 */
export function clearAllFilters(searchModel) {
    if (!searchModel) {
        return;
    }
    searchModel.blockNotification = true;
    for (const facet of [...(searchModel.facets || [])]) {
        searchModel.deactivateGroup(facet.groupId);
    }
    searchModel.blockNotification = false;
    if (typeof searchModel.clearQuery === "function") {
        searchModel.clearQuery();
    }
}

patch(SearchBar.prototype, "no_clear_all_filters.SearchBar", {
    get hasActiveFilters() {
        return hasActiveFilters(this.env.searchModel);
    },

    clearAllFilters() {
        clearAllFilters(this.env.searchModel);
    },
});
