---
title: "What custom HTML looks like in a post"
date: 2026-08-06 12:00:00 -0500
category: "Demo"
description: "A test post proving you can drop full HTML/HTML5 straight into a Decap/Jekyll post — a styled callout and an image figure, all hand-written."
---

Most of this post is plain Markdown — but everything below the line is
**hand-written HTML dropped straight into the post body.** It passes through
untouched, so you get the full run of HTML/HTML5 whenever you want it.

<div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border-radius:14px;background:#f3ecff;border:1px solid #d9c9ff;color:#3a2a5a">
  <strong style="display:block;font-size:1.05rem;margin-bottom:.3rem">📌 This whole box is raw HTML</strong>
  A styled callout with its own background, border, and rounded corners — none of
  which plain Markdown can do on its own. You can build cards, notes, buttons, or
  anything else right inside a post.
</div>

<figure style="margin:1.6rem 0;text-align:center">
  <img src="/screenshots/themes.jpg" alt="Simply Sudoku theme picker" width="540" height="1170" style="max-width:240px;width:100%;height:auto;border-radius:16px;box-shadow:0 10px 30px rgba(76,29,149,.18)">
  <figcaption style="margin-top:.6rem;color:#6b6480;font-size:.9rem">An image <code>&lt;figure&gt;</code> with a caption — also just HTML in the post.</figcaption>
</figure>

<p style="text-align:center;margin:1.4rem 0">
  <a class="btn btn-primary" href="/simple-sudoku.html">Even a styled button &rarr;</a>
</p>

And then you can drop right back into **Markdown** for the rest of the post. Mix
and match however you like — that's the point.
