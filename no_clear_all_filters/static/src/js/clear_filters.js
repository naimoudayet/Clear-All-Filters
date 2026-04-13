/** @odoo-module **/
// Copyright 2026 Naim OUDAYET
// License OPL-1

import { SearchBar } from "@web/search/search_bar/search_bar";
import { patch } from "@web/core/utils/patch";

patch(SearchBar.prototype, {
    /**
     * Returns true if there is at least one active facet
     * (filter, group-by, favorite, or typed query).
     */
    get hasActiveFilters() {
        const searchModel = this.env.searchModel;
        return searchModel.facets.length > 0 || searchModel.query.length > 0;
    },

    /**
     * Clears all active filters, group-bys, favorites, and typed query
     * from the search bar in a single click.
     *
     * Uses Odoo 19's native searchModel methods for maximum compatibility.
     */
    clearAllFilters() {
        const searchModel = this.env.searchModel;
        // Block notifications during batch deactivation to avoid
        // multiple re-renders — one _notify() at the end is enough.
        searchModel.blockNotification = true;
        // Deactivate every active facet (filters, groupBy, favorites)
        for (const facet of [...searchModel.facets]) {
            searchModel.deactivateGroup(facet.groupId);
        }
        searchModel.blockNotification = false;
        // Clear any typed text in the search bar
        searchModel.clearQuery();
    },
});
