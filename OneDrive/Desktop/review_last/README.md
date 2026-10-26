Q1. Build production router for FundooNotes: RootLayout, Protected DashboardLayout, lazy loaded pages, note loader, errorElement, scroll restoration, login redirect logic.

Q2. FundooNotes dashboard has /dashboard/notes/:noteId, /dashboard/labels/:labelName, /dashboard/trash. Sidebar must not remount on navigation (preserve scroll & state). Unauth users redirect to /login?redirect=original path. Bundle split per route. Filter by label/search must be reflected in URL for shareable links. 404 handling with errorElement.
