# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Thai Food" — a static guide website introducing Thai dishes to people unfamiliar with them (English first, Thai script alongside). Plain HTML/CSS/JavaScript: **no build step, no package manager, no tests, no linter.** Open any `.html` file directly in a browser (double-click works; don't introduce anything that requires a server, e.g. `fetch` of local JSON or ES modules).

`task.md` is the Thai-language task list with the agreed scope (out of scope for v1: recipes, dietary filters, blog, phrases page, deployment). `hello.rs` is an unrelated scratch file.

## Domain language

Use the terms in `CONTEXT.md` exactly (**Dish**, **Spice Level** 0–3, **Category**, **Pronunciation**) and avoid the "_Avoid_" synonyms listed there (e.g. say "Dish" not "menu item"/"recipe"; "Spice Level" not "heat"). Each Dish has exactly one Category; regional/ingredient variants are notes on a Dish, not separate Dishes. Update `CONTEXT.md` when introducing new domain terms.

## Architecture

Pages are static HTML shells (`index.html`, `dishes.html`, `dish.html`, `menu.html`, `about.html`) that share `style.css` and a copy-pasted header/nav/footer — a nav or footer change must be made in every page. Content is rendered client-side from a single data file:

- `dishes.js` — globals `CATEGORIES` and `DISHES` (the only source of Dish content). Each Dish: `id`, `thai`, `english`, `pronunciation`, `category`, `spice`, `spiceNote`, `image`, `taste`, `ingredients[]`, `culture`, `howToOrder`, optional `featured: true` (shows on Home). `image` points to a per-Category placeholder in `images/` until real photos exist.
- `app.js` — shared helpers (`escapeHtml`, `spiceHtml`, `dishUrl`, `cardHtml`, `SPICE_LABELS`) plus page logic. `initDishes()` drives search/category/spice filters for both Home (grid with `data-default="featured"` shows only featured Dishes until a filter is used) and Dishes; `initDish()` renders `dish.html?id=<dish id>`. Each `init*` no-ops if its page's root element is absent, so `app.js` is safe to load on any page.
- `menu.js` — Menu page; `PRICES` maps Dish `id` → typical THB price (optional `unit`). Only Dishes with a `PRICES` entry appear, grouped by `CATEGORIES` order. Adding a Dish that should show on the Menu means editing both `dishes.js` and `PRICES`.

Script load order is significant (globals, no modules): `dishes.js` → `app.js` → `menu.js`. All dynamic content goes through `escapeHtml` before being inserted with `innerHTML`.

## Conventions

- Visual design follows `.claude/DESIGN.md` ("Limón": dark olive canvas, cream reading sections, one lemon accent, 1px radius, no shadows/gradients). Page content sits in `<section class="band dark|cream">` full-bleed bands; lemon `.button` only on dark bands, `.ghost-link` on cream. Thai text keeps `letter-spacing: 0` (the rest of the site uses wide tracking).

- Category names are used as strings in `dishes.js`, filter chips, and Menu anchors — keep them in sync with `CATEGORIES`.
- Pages should stay mobile-friendly and accessible (skip link, `aria-current` on the active nav link, `lang="th"` on Thai text, `aria-label` on spice ratings).

## Tooling

`.claude/settings.json` only configures audio notification hooks (PowerShell speech on permission request and on stop). Project skills (`domain-modeling`, `frontend-design`, `grilling`, `grill-with-docs`) live in `.claude/skills/`, mirrored in `.agents/skills/` and pinned by `skills-lock.json`.
