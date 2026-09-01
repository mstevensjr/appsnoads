# Apps No Ads — website

A clean, fast, **static** website for appsnoads.com. No build step, no framework,
no trackers, no cookies, no third-party fonts — just HTML + one CSS file.

## Files

| File | Purpose |
|---|---|
| `index.html` | Home / landing page (hero, philosophy, Simply Sudoku, screenshot gallery, download, donate). |
| `simple-sudoku.html` | Product page for Simply Sudoku — feature tour with screenshots, download, donate. |
| `guide.html` | User manual — "How to play Simply Sudoku": every feature explained (starting a game, entering numbers, sticky numbers, notes, hints, mistakes, check-when-ready mode, pausing &amp; resume-on-next-launch, themes/board looks, landscape, privacy, keyboard shortcuts). Linked in the top nav as **Guide**. |
| `privacy.html` | Privacy Policy — **required** by Google Play and Apple. |
| `support.html` | Support / FAQ / contact — used as the app stores' "support URL". |
| `terms.html` | Terms of Use. |
| `styles.css` | All styling (design system + responsive layout). |
| `favicon.svg` | Site icon (the Sudoku mark). |
| `screenshots/` | App screenshots used across the site (optimized JPEGs, ~540px wide). |

## News page — two test versions (temporary, to compare & pick one)

Two throwaway approaches for a blog/news page live side by side so we can choose
one and delete the other. They are **`noindex`** and only reachable by direct URL
(not linked from the main nav yet).

**Version 1 — hand-written HTML** (`appsnoads.com/news-testing/`)
| File | Purpose |
|---|---|
| `news-testing/index.html` | Post list. |
| `news-testing/2026-08-07-simply-sudoku-1-5-8.html`, `news-testing/2026-08-05-welcome.html` | Two sample posts (complete HTML pages). |
| `news-testing/_post-template.html` | Copy-me template (leading `_` = not published). |

Edit in the GitHub web editor or locally; no build step. To keep this version:
delete everything in the Version-2 list below, then rename `news-testing/`.

**Version 2 — Jekyll + Decap CMS dashboard** (`appsnoads.com/news-testing-2/`, editor at `/admin/`)
| File | Purpose |
|---|---|
| `_config.yml` | Turns on Jekyll (+ `jekyll-feed` → `/feed.xml`). |
| `_layouts/nt2_base.html`, `_layouts/nt2_post.html` | Site chrome + single-post template. |
| `news-testing-2/index.html` | Post list, generated from `_posts/` via Liquid. |
| `_posts/*.md` | Posts written in **Markdown** — and Markdown accepts raw **HTML/HTML5** inline (see `2026-08-06-what-html-can-do.md`, which drops in a styled callout, an image `<figure>`, and a button). |
| `admin/index.html`, `admin/config.yml` | Decap CMS editor — **demo (`test-repo`) backend**, no login, nothing saves. The Body field is a **raw editor** (`modes: ["raw"]`) so you type Markdown *and/or* HTML. Real publishing needs the GitHub backend + a one-time free OAuth helper (Cloudflare Worker). |

To keep this version: delete the `news-testing/` folder. To drop it instead:
delete `_config.yml`, `_layouts/`, `_posts/`, `news-testing-2/`, and `admin/`
(that turns Jekyll back off).

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

1. **Store links** — Google Play and the **App Store**
   (`apps.apple.com/app/id6799698344`) are now wired live across the site. The only
   remaining placeholder is the **Microsoft Store** button (`<a class="store"
   href="#">` with a `SOON` badge, in `index.html` and `simple-sudoku.html`) —
   replace `href="#"` and delete the `<span class="soon">SOON</span>` when the
   Windows version ships.
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
https://buy.stripe.com/dRm5kwawvd9L7oK2fu1B605
```

To change it, search-and-replace that URL across the `.html` files.

## Recent changes

### 2026-09-01 — iOS launch: App Store links wired site-wide
The iOS app went live as **"Simply Sudoku by AppsNoAds"**
(`apps.apple.com/app/id6799698344`, bundle `com.appsnoads.simplysudoku`), so every
App Store placeholder was replaced with the real listing.

- **App Store *review* links** (`index`, `simple-sudoku`, `support`, `guide`,
  `philosophy`) — the `<a class="store" href="#">` placeholder (and its `TODO`
  comment) now points at `https://apps.apple.com/app/id6799698344`
  (`target="_blank" rel="noopener"`).
- **App Store *download* button** (`index`, `simple-sudoku` `#get`) — changed from
  a disabled *"Coming soon on the App Store"* + `SOON` badge to a live *"Download on
  the App Store"* link. Microsoft Store stays *Coming soon* (Windows not shipped).
- **Download intro copy** (`index`, `simple-sudoku`) — *"Now on Google Play … iOS
  and Windows are coming soon."* → *"Now on Google Play and the App Store … A
  Windows version is coming soon."*
- **Review-note** (all five review-band pages) — *"Now live on Google Play — the
  App Store link goes live when the iOS version launches."* → *"Live now on both
  Google Play and the App Store."*
- **`guide.html` / `philosophy.html`** — these two also carry the review band but
  had been missed in the emphasis pass below; they were brought to parity (new
  eyebrow/heading, `.lead-review`, `.review-reasons` pills) at the same time.

### 2026-09-01 — Big site-wide emphasis on ratings & reviews
Reviews are Simply Sudoku's only "advertising" (no ad budget), so the review ask
was made unmissable across the whole site.

- **`styles.css`** — new **`.btn-review`** top-bar button (violet gradient + gold
  `★`, gentle `reviewGlow` box-shadow pulse) so it stands out beside the amber
  `.btn-donate`. Amplified **`.review-band`**: taller padding (46→60px), larger
  heading (`clamp(2rem,5vw,3rem)`), new **`.lead-review`** bold subhead, bigger
  **pulsing stars** (32→40px, staggered `starPulse`), and a new **`.review-reasons`**
  pill row (30 seconds · free · helps others). Added a `prefers-reduced-motion`
  guard that disables both animations, and a `≤560px` block that shrinks the
  nav buttons (so `★ Review` + `♥ Donate` + hamburger all fit) and the band.
- **Every page** (`index`, `simple-sudoku`, `support`, `guide`, `philosophy`,
  `privacy`, `terms`) — added a persistent **`★ Review`** button to the top-bar
  `.nav-actions`, before Donate. Pages with a review band link to `#review`; the
  rest link to `index.html#review`.
- **`index` / `simple-sudoku` / `support`** — rewrote the review band copy:
  eyebrow *"Enjoying Simply Sudoku?"* → *"The #1 way to help — bigger than a
  donation"*; heading *"Please rate & review it"* → *"Please rate & review Simply
  Sudoku"*; added the free/30-second/discovery reason pills and a "great reviews
  are our advertising" explanation; review-note now thanks past reviewers.
- **`support.html`** — the *"How can I support the app?"* FAQ answer now leads with
  rate & review as the single best (free) way to help.
- **Footers** (`index`, `simple-sudoku`, `support`) — added a **★ Rate & review**
  link to the Product column.

## Notes

- Fully responsive (mobile menu included, no JavaScript required).
- Accessible: semantic HTML, labelled controls, good color contrast.
- The privacy page's promises (no ads/analytics/tracking, offline, local-only
  storage) reflect the real app — keep them true if the apps ever change.
