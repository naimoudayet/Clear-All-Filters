# Manual Test Scenarios -- Clear All Filters Button

Dev stack: `docker-compose up -d`, then open <http://localhost:10416> and use database `clear16`.
Any list or kanban view with a search bar will do; the examples use **Contacts**.

## 1. The button only appears when there is something to clear
1. Open **Contacts** with an empty search bar.
2. No **Clear All** button is shown.
3. Type anything into the search bar and press Enter: the button appears.

## 2. Clearing a typed query
1. Type a partner name into the search bar and press Enter.
2. Click **Clear All**: the query facet disappears, the full list returns, and the button hides again.

## 3. Clearing filters and group-bys together
1. Apply two filters from the **Filters** menu and one **Group By**.
2. Click **Clear All**: every facet goes at once and the list is ungrouped.

## 4. Clearing a saved favorite
1. Save the current search as a favorite, then load it.
2. Click **Clear All**: the favorite facet is removed from the search bar.
3. The favorite itself still exists under **Favorites** -- clearing a search never deletes it.

## 5. Action domains survive
1. Open a menu whose action carries its own domain (for example **Sales > Orders > Quotations**).
2. Apply a filter, then click **Clear All**.
3. Only your own facets are removed; the action's built-in scope still applies and the list does
   not fall back to every record of the model.

## 6. Every view type
1. Repeat scenario 3 in list, kanban, pivot and graph views.
2. The button behaves the same everywhere the standard search bar is present.

## 7. Translation
1. Switch your user language in **Preferences > Language** to French, then to Arabic.
2. The button label and tooltip follow the language; in Arabic the layout flips right-to-left
   and the button stays correctly placed.

## 8. No server round-trip
1. Open the browser network tab, apply a few filters and click **Clear All**.
2. Only the normal search read is issued -- the button itself makes no extra RPC.

## 9. Uninstall is clean
1. **Apps > Clear All Filters Button > Uninstall**.
2. The search bar returns to stock, with no leftover button and no console error.
