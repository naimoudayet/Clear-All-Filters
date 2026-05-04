/** @odoo-module **/
// Copyright 2026 Naim OUDAYET
// License LGPL-3
import {
    clearAllFilters,
    hasActiveFilters,
} from "@no_clear_all_filters/js/clear_filters";

QUnit.module("no_clear_all_filters / clear_filters", {}, function () {
    // -------------------------------------------------------------------
    QUnit.module("hasActiveFilters");

    QUnit.test("returns false for empty searchModel", (assert) => {
        assert.strictEqual(hasActiveFilters({ facets: [], query: [] }), false);
    });
    QUnit.test("returns true when there is at least one facet", (assert) => {
        assert.strictEqual(
            hasActiveFilters({ facets: [{ groupId: 1 }], query: [] }),
            true
        );
    });
    QUnit.test("returns true when there is a typed query", (assert) => {
        assert.strictEqual(
            hasActiveFilters({ facets: [], query: [{ value: "abc" }] }),
            true
        );
    });
    QUnit.test("returns true when both facets and query are present", (assert) => {
        assert.strictEqual(
            hasActiveFilters({
                facets: [{ groupId: 1 }],
                query: [{ value: "abc" }],
            }),
            true
        );
    });
    QUnit.test("returns false when searchModel is null", (assert) => {
        assert.strictEqual(hasActiveFilters(null), false);
    });
    QUnit.test("returns false when searchModel is undefined", (assert) => {
        assert.strictEqual(hasActiveFilters(undefined), false);
    });
    QUnit.test("treats missing facets array as empty", (assert) => {
        assert.strictEqual(hasActiveFilters({ query: [] }), false);
    });
    QUnit.test("treats missing query array as empty", (assert) => {
        assert.strictEqual(hasActiveFilters({ facets: [] }), false);
    });
    QUnit.test("returns true with multiple facets", (assert) => {
        assert.strictEqual(
            hasActiveFilters({
                facets: [{ groupId: 1 }, { groupId: 2 }, { groupId: 3 }],
                query: [],
            }),
            true
        );
    });

    // -------------------------------------------------------------------
    QUnit.module("clearAllFilters");

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

    QUnit.test("calls deactivateGroup for each facet", (assert) => {
        const sm = makeSearchModelStub({
            facets: [{ groupId: 1 }, { groupId: 2 }, { groupId: 3 }],
        });
        clearAllFilters(sm);
        assert.deepEqual(sm._calls.deactivateGroup, [1, 2, 3]);
    });
    QUnit.test("calls clearQuery exactly once", (assert) => {
        const sm = makeSearchModelStub({ facets: [{ groupId: 1 }] });
        clearAllFilters(sm);
        assert.strictEqual(sm._calls.clearQuery, 1);
    });
    QUnit.test("clearQuery is still called when there are no facets", (assert) => {
        const sm = makeSearchModelStub({ facets: [] });
        clearAllFilters(sm);
        assert.deepEqual(sm._calls.deactivateGroup, []);
        assert.strictEqual(sm._calls.clearQuery, 1);
    });
    QUnit.test("blockNotification is true while deactivating facets", (assert) => {
        const sm = makeSearchModelStub({
            facets: [{ groupId: 10 }, { groupId: 20 }],
        });
        clearAllFilters(sm);
        assert.deepEqual(sm._calls.notifyToggles, [true, true]);
    });
    QUnit.test("blockNotification is reset to false after deactivation loop", (assert) => {
        const sm = makeSearchModelStub({ facets: [{ groupId: 1 }] });
        clearAllFilters(sm);
        assert.strictEqual(sm.blockNotification, false);
    });
    QUnit.test("snapshots facets so deactivation does not skip mid-loop", (assert) => {
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
        assert.strictEqual(sm.facets.length, 0);
    });
    QUnit.test("preserves facet order when deactivating", (assert) => {
        const sm = makeSearchModelStub({
            facets: [{ groupId: 7 }, { groupId: 3 }, { groupId: 5 }],
        });
        clearAllFilters(sm);
        assert.deepEqual(sm._calls.deactivateGroup, [7, 3, 5]);
    });
    QUnit.test("does not crash when searchModel is null", (assert) => {
        clearAllFilters(null);
        assert.ok(true, "no exception");
    });
    QUnit.test("does not crash when searchModel is undefined", (assert) => {
        clearAllFilters(undefined);
        assert.ok(true, "no exception");
    });
    QUnit.test("does not crash when clearQuery is missing", (assert) => {
        const sm = {
            facets: [{ groupId: 1 }],
            query: [],
            blockNotification: false,
            deactivateGroup() {},
        };
        clearAllFilters(sm);
        assert.ok(true, "no exception");
    });
    QUnit.test("treats missing facets as empty without crashing", (assert) => {
        const sm = {
            query: [],
            blockNotification: false,
            deactivateGroup() {},
            clearQuery() {},
        };
        clearAllFilters(sm);
        assert.ok(true, "no exception");
    });
});
