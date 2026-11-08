# Apps No Ads — website

A clean, fast, **static** website for appsnoads.com. No build step, no framework,
no trackers, no cookies, no third-party fonts — just HTML + one CSS file.

## Files

| File | Purpose |
|---|---|
| `index.html` | Home — the **Apps No Ads apps page**: brand hero, the seven app cards (Sudoku by ANA, Sudoku Pro by ANA - with the apps' own icons and a capture each since 2026-11-06 -, LexiFlux, LexiFlux Pro, Crosswords, Crosswords | `sudoku.html` | **Product page for Sudoku by ANA and Sudoku Pro by ANA, 2.0.0** (rewritten 2026-11-06, Sudoku round 91; see *Recent changes*): hero, the moved note, free and Pro in short, the `#pro` table, the `#gallery` sections (`#themes`, `#kinds`, `#learn`, `#play`, `#your-games`, `#make-it-yours`, `#languages`, `#free`) from `screenshots/sudoku/`, the promise, `#get` (Google Play live; the App Store and the Microsoft Store coming soon - the one place to change them), `#faq`, review, coffee. The older 2.0 screenshots `screenshots/ana-*.png` are no longer used by it. |creenshots/ana-start-pro.png`, `ana-samurai.png`, `ana-killer.png` (420 x 900, Win64 2.0.0). |
| **launch branch** | **`sudoku-2.0-launch`** (2026-11-04, from the Sudoku repo's round 80): the app's first release is everything on its `main`, as **2.0.0**. This branch is `sudoku-2.2`'s pages (every puzzle kind, collections, replay, sound, ten languages) with the version marks taken out (no "(2.2)", "since 2.2"; a replay is missing only for a game brought along from another app). **Push this branch at launch**; `sudoku-by-ana`, `sudoku-2.1` and `sudoku-2.2` are superseded by it. Not merged, not pushed. |
| `simple-sudoku.html` | Product page for Simply Sudoku as it was (v1.9.0, + the `#pro` table); since 2026-10-31 a note at the top points to `sudoku.html`. The nav and footers on every page now link **Sudoku** → `sudoku.html` (was **Simply Sudoku** → `simple-sudoku.html`), and the home cards are *Sudoku by ANA* / *Sudoku Pro by ANA*. |
| `lexiflux.html` | Product page for LexiFlux (+ `#pro` LexiFlux Pro) — how it plays, the physics, today's puzzle, "coming soon" store buttons. |
| `crosswords.html` | Product page for Crosswords by Apps No Ads — generated-offline puzzles, four feature rows, promise band, SOON buttons (App Store, Microsoft Store, Linux). |
| `afm.html` | Product page for Another File Manager (AFM) — feature cards, live screenshot, "in development / ask for an early build". |
| `brand/` | The Apps No Ads mark and lockups, copied from `Dev\Branding\AppsNoAds` (never redraw): `mark-copper-64/128/256.png`, `lockup-wordmark.png`, `lockup-wordmark-light.png`, `tile-dark.png`. `mark-copper-64.png` is the favicon. |
| `apps/` | App icons for the home-page cards: `sudoku-ana.png` and `sudoku-ana-pro.png` (192, the apps' own launcher icons from the Sudoku repo's `res\android\` and `res\pro\android\`, 2026-11-06), `simply-sudoku.png` (256, from `Sudoku\icon\sudoku_icon_1024.png`), `lexiflux.png` (192, `LexiFlux\docs\icon.png`), `crosswords.png` (256, from `CrossWordsANA\assets\icons\ios\icon_1024.png`), `afm.png` (128, from `AFM\AFileManagerV\AFMV_Icon.ico`). |
| `guide.html` | User manual — "How to play Simply Sudoku" (v1.7): the start panel, today's puzzle, custom games (Pro), entering numbers, sticky numbers, notes, hints, mistakes, check-when-ready mode, pausing &amp; continue, statistics, settings, themes/board looks, landscape (Pro), privacy, rating &amp; feedback, Free vs Pro, keyboard shortcuts. Linked in the top nav as **Guide**. |
| `privacy.html` | Privacy Policy — **required** by Google Play and Apple. |
| `support.html` | Support / FAQ / contact — used as the app stores' "support URL". |
| `terms.html` | Terms of Use. |
| `styles.css` | All styling (design system + responsive layout). |
| `favicon` | now `brand/mark-copper-64.png` (the old `favicon.svg` Sudoku grid was removed). |
| `screenshots/sudoku/` | **2026-11-06 (Sudoku round 91):** 91 real captures of Sudoku by ANA / Pro 2.0.0 in nine folders (`themes`, `looks`, `kinds`, `learn`, `play`, `yours`, `yours2`, `free`, `langs`), each as `<name>-s.webp` / `-l.webp` (360 / 720 px wide, 480 / 960 for a landscape one), the same as `-s.png` / `-l.png` (the `<picture>` fallback) and `<name>.webp` (full size, for the lightbox); `shots.json` lists every size and byte count. **Made, not drawn:** the Sudoku repo's `tools\site-shots.ps1` runs the app's scene mode for each one and `tools\site-shots-web.py` writes these files - run it again to re-make them all. 20.2 MB on disk; a reader loads only what scrolls into view. |
| `lightbox.js` | The screenshot lightbox (2026-11-06): any `a.lb` opens its image in a native `<dialog>` - Escape or the close button closes it, Left / Right step through the gallery, focus goes back; nothing loaded from anywhere else. Without JavaScript the link opens the image. |
| `screenshots/` | App screenshots used across the site. The v1.7 set (`start-panel*.png`, `daily.png`, `gameplay.png`, `sticky.png`, `hint.png`, `check-mode.png`, `settings.png`, `stats*.png`, `seeded-game.png`, `landscape.png`, `about.png`, `hard-locked.png`) are 420×900 PNG captures of the Win64 build; `board-looks.jpg`, `themes.jpg`, `look-paper.jpg` and `board-looks-grid.png` are older Android captures of the pickers (still accurate). |

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
   **Simply Sudoku Pro** has no store buttons yet: the `#pro` section on
   `simple-sudoku.html`, the `#get` intro copy on `index.html`/`simple-sudoku.html`
   and the Pro FAQ on `support.html` all say it is "on its way". When the Pro
   listings go live (Play package `com.appsnoads.simplysudoku_v1__pro`; the Apple
   id is not known yet), add a second row of store buttons under `#get` and
   replace those sentences.
2. **Screenshots** — real app screenshots live in `screenshots/` and appear in
   the hero, the home gallery, the product-page feature tour and the guide. The
   v1.7 set was captured from the Win64 build (client area only, 420×900) with
   the Sudoku repo's `tools\shot.ps1`-style harness; re-capture from a phone when
   convenient (keep the file names; 420–540px wide keeps the site fast).
3. **Contact email** — currently `mstevens@dqbbs.com` throughout. Change if you
   want a dedicated support address (e.g. `support@appsnoads.com`).
4. **Copyright year / company name** — footer reads "© 2026 Apps No Ads".
5. **Legal pages** — `privacy.html` and `terms.html` are written to match how the
   apps actually behave (no data collected). Review them, and have a professional
   look them over if you want extra assurance for the stores.

## The "buy the author a coffee" link

The Stripe checkout is the honour-system tip jar, worded everywhere as **"Buy the
author a coffee"** (`☕ Coffee` on the top bar and in footers; `.btn-coffee`,
`.coffee-band`). It is wired throughout (nav, hero, coffee section, footer,
support page):

```
https://buy.stripe.com/4gM9AMfQPedP10m1bq1B607
```

To change it, search-and-replace that URL across the `.html` files (and make a new
`images/coffee-qr.png`).

Since 2026-11-07 (Sudoku repo round 96) the link above replaced
`https://buy.stripe.com/dRm5kwawvd9L7oK2fu1B605`, which is retired (Stripe keeps it
active a few weeks for cached pages). Three ways in:
- **`☕ Coffee`** (top bar, footers, the Support and Simply Sudoku pages) leads to
  **`coffee.html`**, the one page with Stripe's buy button
  (`buy_btn_1UZLiG6xENDPXnNCx5odQXYQ`). It is **the only page that loads
  `js.stripe.com`**: a third-party script that may set Stripe's own cookies, said in
  `privacy.html` section 5. The page also has the QR, the plain link for when a
  content blocker hides the button, and a `<noscript>` link.
- **The coffee bands' `☕ Buy the author a coffee`** is a plain link to Stripe, with
  **`images/coffee-qr.png`** beside it (`.coffee-pay` / `.coffee-qr`, 180 CSS px,
  `image-rendering: pixelated`, "Or scan with your phone"; hidden below 600px).
- **The QR** is Stripe's code without its purple frame and "Scan to pay": the same
  29 x 29 modules redrawn 1-bit, 8 px a module, a 4-module white margin (296 px,
  436 bytes). It decodes to the link above.

## Recent changes

### 2026-11-07 — The new coffee link, its QR code and Stripe's buy button (Sudoku repo round 96)
Branch `sudoku-2.0-launch`; not pushed.
- **The link:** `https://buy.stripe.com/dRm5kwawvd9L7oK2fu1B605` → `https://buy.stripe.com/4gM9AMfQPedP10m1bq1B607`
  on 18 files (38 links; the old one now has no hits). In detail:
  - 27 `☕ Coffee` buttons now lead to `coffee.html` (`/coffee.html` in `news-testing/` and `_layouts/`), in the
    same tab.
  - The 7 coffee bands' buttons go straight to Stripe.
  - 4 links in the text, in the 1.5.8 news post, the Support FAQ and this README.
- **`images/coffee-qr.png`** (new) sits beside each coffee band's button: `<div class="coffee-pay">` wraps the button
  and a `<figure class="coffee-qr">` (180 px). The button lost its `margin-top:8px`, which moved to `.coffee-pay`.
  `styles.css` gets `.coffee-pay`, `.coffee-qr` (hidden below 600px), `.coffee-page` and `.coffee-note`.
- **`coffee.html`** (new) holds:
  - Stripe's buy button;
  - the QR code;
  - the plain link with "If the button doesn't appear (a content blocker can hide it), use this link";
  - a `<noscript>` link;
  - the note "This page loads Stripe's button; Stripe's privacy policy applies to it."
- **The bands' "Any amount, one time, via Stripe" line** was off to the left (an inline `margin:14px 0 0` overrode the
  band's centering); now `margin:14px auto 0`, on all seven.
- **`privacy.html`**:
  - Section 5 gets a paragraph: the coffee page, and only that page, loads Stripe's button, which may set Stripe's own
    cookies.
  - Last updated: 6 → 7 November 2026.

### 2026-11-07 — Sudoku: the Mac (Sudoku repo round 92)
Branch `sudoku-2.0-launch`; not pushed. Both App Store records are for iPhone, iPad **and Mac** (Melvin, 2026-11-06):
`sudoku.html`'s FAQ ("Android phones and tablets; iPhone, iPad and Mac; and Windows") and the `#get` lead ("The App
Store (iPhone, iPad and Mac) and the Microsoft Store are next"); the launch draft's line the same. The App Store
buttons stay "coming soon" until the Apple IDs exist.

### 2026-11-06 — Sudoku 2.0.0: the product page rewritten, galleries of real captures (Sudoku repo round 91)
Branch `sudoku-2.0-launch`; **not pushed** - Melvin pushes once Google approves the apps.
- **`sudoku.html`** rewritten: hero (Pro's start page, *Get it on Google Play*); the moved note now says your games come
  along (it said the new app "starts fresh"); *What's in the free app* / *What Pro adds*; the **Free / Pro table**
  (26 rows, from the app repo's `docs\FREE-PRO.md`); **galleries** - themes (10) and board looks (12 + the look editor),
  *22 ways to play* (each with its one-line rule), *Learn as you play*, *Ways to start a game*, *Your games*, *Make it
  yours* (My Default, letters and shapes, settings, landscape, a tablet, Windows), *Ten languages*, *The free app*;
  the promise; **store buttons**: Google Play **live** for both apps, the App Store and the Microsoft Store **coming
  soon** as non-links (`<span class="store store-soon">`) - change them in one place, the `#get` section; FAQ (moving
  from Simply Sudoku, free to Pro, subscription, privacy, devices). `lightbox.js` loaded with `defer`.
- **`sudoku-guide.html`:** a picture beside each section (12, floated right on a wide screen, above the text on a phone),
  each opening in the lightbox.
- **`index.html`:** title and description name Sudoku by ANA; the two Sudoku cards get the apps' own icons, a capture
  of each start page, and *Google Play* status (was *Coming to the stores*); the review band rates Sudoku by ANA and
  Sudoku Pro by ANA on Google Play (was Simply Sudoku on Google Play and the App Store); the coffee band's Pro link goes
  to `sudoku.html#pro`.
- **`simple-sudoku.html`:** the note at the top now gives the three steps to bring your games along, with the Google
  Play links; every old anchor still works.
- **`privacy.html`:** names Sudoku by ANA and Sudoku Pro by ANA; what they keep on the device (history and replays,
  achievements, My Default and your board looks, the free app's daily count and tries); backups made only when you
  ask; the share sheet and print hand-offs; no permissions. **Section 5's heading and first sentence had lost their
  words** (live on `main` too: "5." with nothing after it, "If you choose to  is processed by") - now *Buying the
  author a coffee, and buying Pro*. Nothing about the Families policy (the apps are for 13 and over).
- **Site-wide:** the footer's *Download* link pointed at `index.html#get`, which doesn't exist - now `sudoku.html#get`
  (eight pages); `styles.css`: galleries, the lightbox, the guide's side pictures, the cards' capture; the comparison
  table's checks and the *live* status green darkened to `#17733a` (4.2:1 and 3.8:1 -> 5.9:1 and 5.3:1); under
  420 px the header shows the mark without the wordmark, so Review, Coffee and the menu fit on a 360 px phone (they
  were cut off on every page).
- **`_drafts/sudoku-by-ana-2-0.md`:** dated 2026-11-06, ten languages, 22 kinds, the Google Play links; still a draft.
- **Checked:** every internal link and anchor on the five changed pages (812), every image (136: alt, width / height, the
  file exists), tags balanced and ids unique; rendered at 360, 768 and 1440 px (headless Edge, the narrow widths inside
  a fixed-width frame because headless Edge won't lay out narrower than about 500 px); contrast in the light page and
  the dark bands (the site has no dark mode). No Jekyll here (no Ruby), so the site was not built; the pages are plain
  HTML that Jekyll copies through.

### 2026-09-12 (later still) — Crosswords Pro: separate edition, no IAP
Owner's decision: **no in-app purchases anywhere; every Pro is a separate store
listing.** `index.html` gained a seventh card, **Crosswords Pro** (paid once,
coming soon), after Crosswords. `crosswords.html` gained a **`#pro` "Free and
Pro" section** with a `.compare` table (free: unlimited puzzles, four levels,
7×7 / 11×11, check/reveal; Pro: timer and pause, density picker, and — as they're
finished — 15×15 / 21×21 grids and themed clue sets, per the gates in
`CrossWordsANA\Crosswords.Features.pas`; the tfoot says the Pro rows may shift
before launch), the promise band now says "a separate app you buy once", its
tick list gained "No in-app purchases", and the download copy names both
editions.

### 2026-09-12 (later) — Crosswords added
- **`index.html`** — sixth app card, **Crosswords** (free, "Coming soon", iOS ·
  macOS · Windows · Linux), between LexiFlux Pro and AFM so the grid is 3×2.
- **`crosswords.html` (new)** — hero + four feature rows written from
  `CrossWordsANA\Architecture.md` (ship set: Easy–Expert, 7×7 / 11×11, density,
  auto-check / ✓ Check, Reveal letter/word/puzzle, timer, clue navigation,
  on-screen keyboard, SCOWL / WordNet® / Crossword Nexus / Abate word sources),
  promise band noting a planned Pro tier, SOON store buttons for the App Store,
  Microsoft Store and a Linux download, coffee + feedback.
- **Screenshots** — `crosswords-portrait.png` (420×900) and
  `crosswords-landscape.png` (1000×660) captured from the v0.96 Win64 Release
  build (a dev build: the "(any theme)" clue-theme picker and the Dark theme
  dropdown it shows are not in the ship set). `apps/crosswords.png` from the iOS
  1024 icon.
- **Nav on every page** now has eight links (… LexiFlux · **Crosswords** · AFM …);
  `styles.css` tightened `.nav-links` gap to 1.25rem and moved the hamburger
  breakpoint from 720px to **980px** so the links never crowd the buttons.
  Footers gained Crosswords. `support.html`'s "when are they coming" FAQ covers it.

### 2026-09-12 — Apps No Ads apps site: brand mark, "buy the author a coffee", five apps
Three changes asked for together: put the Apps No Ads logo on the pages, turn
every "Donate" into a buy-the-author-a-coffee sentiment, and make the site an
Apps No Ads *apps* site rather than a Simply Sudoku site.

- **Brand** — new `brand/` folder (copied from `Dev\Branding\AppsNoAds`, see
  its `BRAND.md`). Every page's header `.brand` is now the copper mark
  (`mark-copper-128.png` at 36px) + the lower-case wordmark **apps no ads**
  (`.brand .mark`, `.brand .wordmark` in `styles.css`) instead of the violet
  Sudoku-grid SVG + "AppsNoAds". Every footer `.footer-brand` is
  `lockup-wordmark-light.png` (mark + wordmark + QUIET BY DESIGN., 48px high).
  The favicon is `brand/mark-copper-64.png` (`favicon.svg` deleted). The home
  hero shows `mark-copper-256.png` with the tagline (`.hero-brand`). Palette
  vars `--copper`, `--copper-dark`, `--charcoal`, `--ivory` added.
- **Coffee** — `.btn-donate` → `.btn-coffee` (copper gradient, ivory text) and
  `.donate-band` → `.coffee-band` (warm cream, brown headings, `.coffee-cup`
  emoji) in `styles.css` and every page incl. the news-trial pages. Buttons:
  `♥ Donate` → `☕ Coffee` (nav/footer), `♥ Make a donation` / `♥ Support the
  work` → `☕ Buy the author a coffee`. Copy: the support bands on `index`,
  `simple-sudoku`, `philosophy` (and the new pages) are now "Enjoying the apps?
  / Buy the author a coffee — made by one person, with no ads to pay for it;
  never required, nothing locked behind it"; review-band eyebrow "bigger than a
  donation" → "bigger than a coffee"; `support.html` FAQ answers say "buy the
  author a coffee"; `privacy.html` §5 and `terms.html` §3 are retitled
  "“Buy the author a coffee” (donations) …" and keep the legal word *donation*
  in the body.
- **Apps site** — `index.html` body rewritten: hero (brand mark instead of a
  Sudoku screenshot), **`#apps` card grid** (`.app-grid` / `.app-card` with icon,
  kind, blurb, status badge live/soon/dev and platform chips) for Simply Sudoku,
  Simply Sudoku Pro, LexiFlux, LexiFlux Pro and Another File Manager; the trust
  bar, philosophy band (with a link to the philosophy page), a generalised
  review band ("rate & review the apps you use", Sudoku store buttons, note that
  LexiFlux/AFM links come when they ship) and the coffee band. The Sudoku
  screenshot gallery and Sudoku download section left the home page (they live
  on `simple-sudoku.html`). New **`lexiflux.html`** (hero, four feature rows from
  `LexiFlux\README.md`, `#pro` comparison table, promise band, SOON store
  buttons, coffee + feedback) and **`afm.html`** (centred hero, live screenshot,
  nine feature cards from `AFM\AFileManagerV\README.md` v1.6, "in development /
  ask for an early build", coffee). Screenshots added: `lexiflux-portrait.png`,
  `lexiflux-newgame.png`, `lexiflux-landscape.png` (from `LexiFlux\docs`),
  `afm.jpg` (1200px capture of the running AFMV window). Nav on every page:
  **Apps · Simply Sudoku · LexiFlux · AFM · Philosophy · Support · Privacy**
  (Guide and Why-no-ads moved to footer/product page). Footer Product column
  gained LexiFlux and Another File Manager. `support.html` gained a "When are
  LexiFlux and AFM coming out?" FAQ and its wording is app-neutral.
- `index.html` `<title>`/descriptions name the three apps.

### 2026-09-11 — Simply Sudoku v1.7.0: start panel, daily puzzle, statistics, Free vs Pro
The app's v1.7.0 release replaced the startup level picker with a start panel,
added today's puzzle, custom (seeded) games, a statistics page, an in-app
rate/feedback card, and split the product into a **free edition** and a
**one-time-purchase Pro edition**. The site was brought in line everywhere it
described the old behaviour.

- **`screenshots/`** — removed the pre-1.7 captures that showed the retired UI
  (`gameplay.jpg`, `features.jpg`, `difficulty.jpg` (old level picker),
  `hint.jpg`, `settings.jpg`, `guide-check.png`, `guide-landscape.png`,
  `guide-newdialog.png`, `guide-sticky.png`). Added 14 new 420×900 PNGs from the
  v1.7.0 Win64 build: `start-panel.png` (Free), `start-panel-pro.png` (Pro, Expert
  + seed "coffee"), `daily.png`, `gameplay.png`, `sticky.png`, `hint.png`,
  `check-mode.png`, `settings.png`, `stats.png` (Pro), `stats-free.png`,
  `seeded-game.png`, `landscape.png` (960×540), `about.png`, `hard-locked.png`.
  Kept `board-looks.jpg`, `themes.jpg`, `look-paper.jpg`, `board-looks-grid.png`.
- **`styles.css`** — new `.pro-badge` (amber "PRO" pill for headings) and
  `.compare` table (the Free/Pro comparison: white card, centred ✓ columns,
  `tfoot` note, tighter padding ≤560px). Appended after `.callout`.
- **`simple-sudoku.html`** — meta/og descriptions mention the daily puzzle and
  the Pro edition; hero copy + note ("Free, with a one-time Pro edition") and hero
  image → `start-panel.png`; **feature tour rewritten** (9 rows: start panel,
  today's puzzle, board, notes + sticky numbers, hints, statistics (Pro), custom
  games (Pro), settings, themes/board looks with the Free/Pro split); board-looks
  blurb notes "Free includes Classic, Midnight and High-Contrast; Pro has all
  twelve"; **new `#pro` section** "Free stays free. Pro is paid once." with the
  `.compare` table; promise band: "No subscriptions or paywalls" → "No
  subscriptions — ever" + a sentence that Pro is bought once; `#get` intro says
  Pro is on its way; support band now leads with "buy Simply Sudoku Pro" as the
  way to support, donation second; feedback callout mentions the in-app ★ Rate →
  Send feedback path.
- **`index.html`** — hero image → `start-panel.png`; ethos list "No
  subscriptions or paywalls" → "No subscriptions — a paid app is paid once"; the
  Simply Sudoku blurb/bullets ("Four difficulties" → today's puzzle, sticky
  numbers, Pro line); gallery re-cut to the new shots (start panel, daily, board,
  hint, statistics, settings, board looks "(Pro; 3 free)", mix & match); `#get`
  intro mentions Pro with a link to `simple-sudoku.html#pro`.
- **`guide.html`** — rewritten for v1.7: contents list gained *The start panel*,
  *Today's puzzle*, *Custom games*, *Statistics*, *Settings*, *Rating &
  feedback*, *Free vs Pro*; **Starting a game** (level picker, "Ask me for a
  level", "Don't warn on New") → **The start panel** with the card-by-card list
  and the touched-game confirm rule; new **Today's puzzle**, **Custom games
  (Pro)**, **Statistics**, **Settings** (the four rows + Apply), **Rating,
  reviews & feedback** and **What's in Free, what's in Pro** sections;
  **Pausing** now says an unfinished game is *always* saved and offered as
  CONTINUE / the Welcome-back card (the "Resume interrupted game" switch is
  gone); **Landscape** and **Allow screenshots** marked Pro; themes/board-looks
  paragraph carries the 2/3 vs 10/12 split; every screenshot repointed.
- **`support.html`** — FAQ: "really free?" answer no longer says "no paywalls"
  and lists what Free includes; new entries *What is Simply Sudoku Pro*, *Will my
  best times and statistics carry over*, *What is Today's puzzle*, *Where did the
  level picker go*, *Does my unfinished game come back*, *How do I send feedback
  from the app*; data/progress answers mention statistics and that custom games
  never set a best time; "How can I support" adds "buy Simply Sudoku Pro".
- **`privacy.html`** — Last updated → 11 September 2026; §2 local-data list adds
  statistics and the rating-prompt counters, notes Reset statistics and that the
  two editions are sandboxed apart; §4 lists the three user-started hand-offs
  (store page, mail draft, Apple's built-in rating prompt); §5 renamed
  *Donations and purchases* with a paragraph on Pro purchases through the stores.
- **`terms.html`** — Last updated → 11 September 2026; §3 renamed *Donations and
  paid editions* with a paragraph on the one-time Pro edition.
- **`philosophy.html`** — donate band: "enjoy every part of the app" → "play the
  free edition as much as you like", plus a paragraph tying Pro-bought-once to the
  "software is goods" argument.
- **All pages** — footer *Product* column gained **Free vs Pro** →
  `simple-sudoku.html#pro`.

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
