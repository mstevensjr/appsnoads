# Apps No Ads — website

A clean, fast, **static** website for appsnoads.com. No build step, no framework,
no trackers, no cookies, no third-party fonts — just HTML + one CSS file.

## Files

| File | Purpose |
|---|---|
| `index.html` | Home / landing page (hero, philosophy, Simply Sudoku, screenshot gallery, download, donate). |
| `simple-sudoku.html` | Product page for Simply Sudoku — feature tour with screenshots, download, donate. |
| `privacy.html` | Privacy Policy — **required** by Google Play and Apple. |
| `support.html` | Support / FAQ / contact — used as the app stores' "support URL". |
| `terms.html` | Terms of Use. |
| `styles.css` | All styling (design system + responsive layout). |
| `favicon.svg` | Site icon (the Sudoku mark). |
| `screenshots/` | App screenshots used across the site (optimized JPEGs, ~540px wide). |

## Preview locally

Just open `index.html` in a browser, or serve the folder:

```
# Python
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

It's plain static files — host them anywhere:

- **Netlify / Cloudflare Pages / GitHub Pages / Vercel** — drag-and-drop or connect the folder; free and fast.
- **Any web host** — upload the files to your web root (`public_html`, etc.).

### Replacing the current WordPress site
Point the `appsnoads.com` domain at the new host (or upload these files to your
existing host's web root, replacing the WordPress install). Keep a backup of the
old site first. The donation link already points at your Stripe checkout.

## Before you launch — customize these

1. **Store links** — in `index.html`, the three "Coming soon" store buttons
   (`<a class="store" href="#">`) are placeholders. Replace `href="#"` with the
   real Google Play / App Store / Microsoft Store URLs and delete the
   `<span class="soon">SOON</span>` tags when each version is live.
2. **Screenshots** — real app screenshots live in `screenshots/` and appear in
   the hero, the home gallery, and the product-page feature tour. To refresh
   them, replace the JPEGs (keep the same file names); ~540px wide keeps the
   site fast. Consider re-capturing the About screen once you've built v1.2.0 so
   its version label matches.
3. **Contact email** — currently `mstevens@dqbbs.com` throughout. Change if you
   want a dedicated support address (e.g. `support@appsnoads.com`).
4. **Copyright year / company name** — footer reads "© 2026 Apps No Ads".
5. **Legal pages** — `privacy.html` and `terms.html` are written to match how the
   apps actually behave (no data collected). Review them, and have a professional
   look them over if you want extra assurance for the stores.

## The donation link

The Stripe checkout is wired throughout (nav, hero, donate section, footer,
support page):

```
https://buy.stripe.com/8x2dR24870mZ4cyg6k1B602
```

To change it, search-and-replace that URL across the `.html` files.

## Notes

- Fully responsive (mobile menu included, no JavaScript required).
- Accessible: semantic HTML, labelled controls, good color contrast.
- The privacy page's promises (no ads/analytics/tracking, offline, local-only
  storage) reflect the real app — keep them true if the apps ever change.
