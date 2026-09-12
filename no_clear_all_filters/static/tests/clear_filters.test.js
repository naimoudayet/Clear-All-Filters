// Copyright 2026 Naim OUDAYET
// License LGPL-3
import { describe, expect, test } from "@odoo/hoot";
import {
    clearAllFilters,
    hasActiveFilters,
} from "@no_clear_all_filters/js/clear_filters";

describe("no_clear_all_filters / hasActiveFilters", () => {
    test("returns false for empty searchModel", () => {
        expect(hasActiveFilters({ facets: [], query: [] })).toBe(false);
    });
    test("returns true when there is at least one facet", () => {
        expect(hasActiveFilters({ facets: [{ groupId: 1 }], query: [] })).toBe(true);
    });
    test("returns true when there is a typed query", () => {
        expect(hasActiveFilters({ facets: [], query: [{ value: "abc" }] })).toBe(true);
    });
    test("returns true when both facets and query are present", () => {
        expect(
            hasActiveFilters({
                facets: [{ groupId: 1 }],
                query: [{ value: "abc" }],
            })
        ).toBe(true);
    });
    test("returns false when searchModel is null", () => {
        expect(hasActiveFilters(null)).toBe(false);
    });
    test("returns false when searchModel is undefined", () => {
        expect(hasActiveFilters(undefined)).toBe(false);
    });
    test("treats missing facets array as empty", () => {
        expect(hasActiveFilters({ query: [] })).toBe(false);
    });
    test("treats missing query array as empty", () => {
        expect(hasActiveFilters({ facets: [] })).toBe(false);
    });
    test("returns true with multiple facets", () => {
        expect(
            hasActiveFilters({
                facets: [{ groupId: 1 }, { groupId: 2 }, { groupId: 3 }],
                query: [],
            })
        ).toBe(true);
    });
});

function makeSearchModelStub({ facets = [], query = [] } = {}) {
    const calls = {
        deactivateGroup: [],
        clearQuery: 0,
        notifyToggles: [],
    };
    return {
        facets,
        query,
        blockNotification: false,
        deactivateGroup(groupId) {
            calls.deactivateGroup.push(groupId);
            calls.notifyToggles.push(this.blockNotification);
        },
        clearQuery() {
            calls.clearQuery++;
        },
        _calls: calls,
    };
}

describe("no_clear_all_filters / clearAllFilters", () => {
    test("calls deactivateGroup for each facet", () => {
        const sm = makeSearchModelStub({
            facets: [{ groupId: 1 }, { groupId: 2 }, { groupId: 3 }],
        });
        clearAllFilters(sm);
        expect(sm._calls.deactivateGroup).toEqual([1, 2, 3]);
    });
    test("calls clearQuery exactly once", () => {
        const sm = makeSearchModelStub({ facets: [{ groupId: 1 }] });
        clearAllFilters(sm);
        expect(sm._calls.clearQuery).toBe(1);
    });
    test("clearQuery is still called when there are no facets", () => {
        const sm = makeSearchModelStub({ facets: [] });
        clearAllFilters(sm);
        expect(sm._calls.deactivateGroup).toEqual([]);
        expect(sm._calls.clearQuery).toBe(1);
    });
    test("blockNotification is true while deactivating facets", () => {
        const sm = makeSearchModelStub({
            facets: [{ groupId: 10 }, { groupId: 20 }],
        });
        clearAllFilters(sm);
        expect(sm._calls.notifyToggles).toEqual([true, true]);
    });
    test("blockNotification is reset to false after deactivation loop", () => {
        const sm = makeSearchModelStub({ facets: [{ groupId: 1 }] });
        clearAllFilters(sm);
        expect(sm.blockNotification).toBe(false);
    });
    test("snapshots facets so deactivation does not skip mid-loop", () => {
        // Real searchModel removes from facets array as deactivateGroup runs.
        // The implementation must iterate a copy ([...facets]) so every group
        // is deactivated even when the underlying array shrinks.
        const facets = [{ groupId: 1 }, { groupId: 2 }, { groupId: 3 }];
        const sm = {
            facets,
            query: [],
            blockNotification: false,
            deactivateGroup(groupId) {
                const idx = this.facets.findIndex((f) => f.groupId === groupId);
                if (idx > -1) this.facets.splice(idx, 1);
            },
            clearQuery() {},
        };
        clearAllFilters(sm);
        expect(sm.facets.length).toBe(0);
    });
    test("preserves facet order when deactivating", () => {
        const sm = makeSearchModelStub({
            facets: [{ groupId: 7 }, { groupId: 3 }, { groupId: 5 }],
        });
        clearAllFilters(sm);
        expect(sm._calls.deactivateGroup).toEqual([7, 3, 5]);
    });
    test("does not crash when searchModel is null", () => {
        expect(() => clearAllFilters(null)).not.toThrow();
    });
    test("does not crash when searchModel is undefined", () => {
        expect(() => clearAllFilters(undefined)).not.toThrow();
    });
    test("does not crash when clearQuery is missing", () => {
        const sm = {
            facets: [{ groupId: 1 }],
            query: [],
            blockNotification: false,
            deactivateGroup() {},
        };
        expect(() => clearAllFilters(sm)).not.toThrow();
    });
    test("treats missing facets as empty without crashing", () => {
        const sm = {
            query: [],
            blockNotification: false,
            deactivateGroup() {},
            clearQuery() {},
        };
        expect(() => clearAllFilters(sm)).not.toThrow();
    });
});
