---
feature: dark-minimal-home
status: delivered
updated: 2026-09-11
branch: feature/dark-minimal-home
commits: 6b974ad..09322dd
---

# Dark Minimal Home + Catalog Pages

## Report

**What was built** — Study Box BD demo converted to a dark storefront (`#0F0F10` page, `#C7253E` accent). Home is minimal: exactly 3 featured books, 3 courses, and 3 reviews, each with a **View more** link to a dedicated page (`books.html`, `courses.html`, `reviews.html`). Shared CSS/JS live in `assets/`. Product cards and Buy/Enroll buttons use the reference hover: card lifts −20px and scales 1.08 with accent border + crimson glow; the button expands from 82px to full width on card hover and flips to white-on-ring on its own hover. Cart persists across pages via `sessionStorage` (`sb_cart_v1`). Reduced-motion disables lift/scale.

**Verification** —
- `JS_OK` `assets/app.js`; inline scripts on all four HTML pages parse
- Local `href`s resolve; home `slice(0, 3)` present
- CSS contains dark tokens, hover values, `prefers-reduced-motion`
- Subagent review: all 3 acceptance criteria **Pass**; no critical findings
- Follow-ups from review fixed: courses search handler, reviews checkout fields, stars `aria-label`

**Journey log** —
1. Session folder was not a git repo → `git init` + feature worktree `feature/dark-minimal-home`
2. Reference hover lives in CSS (not markup); button expand is `max-width` transition
3. Multi-page static + `sessionStorage` keeps cart without a backend

## [S1] Problem
Long single-page catalog would keep growing; user wanted dark mood, 3-item home, and reference card/button hover.

## [S2] Design
### Theme
page `#0F0F10` · card `#1A1A1C` · border `#2A2A2E` · ink `#F5F5F5` · muted `#9A9A9E` · accent `#C7253E` · glow `rgba(199,37,62,0.28)`

### Home
3 books + 3 courses + 3 reviews; View more → dedicated pages.

### Hover
Card: `translateY(-20px) scale(1.08)`, accent border, glow, z-index 30, cover `scale(1.05)`.
Button: `max-width: 82px` → `100%` on card hover; white + ring on button hover.
`prefers-reduced-motion` disables transforms.

### Pages
`index.html` · `books.html` · `courses.html` · `reviews.html` · `assets/app.css` · `assets/app.js`

## [S3] Out of Scope
Real payment gateway, CMS, events product catalog.

## Tasks
- [x] T1: Dark theme tokens + chrome — acceptance: dark pages with `#C7253E` (covers: S2 theme)
- [x] T2: Card + button hover matching reference — acceptance: lift/scale/glow + expanding Buy (covers: S2 hover)
- [x] T3: Home 3 books + 3 courses + View more — acceptance: 3 cards/section; links open full pages (covers: S2 home; depends: T1)
- [x] T4: `books.html` + `courses.html` + `reviews.html` — acceptance: full lists, search, cart (covers: S2 full pages; depends: T1)
- [x] T5: Persist cart (sessionStorage) — acceptance: add on books.html, badge on index (covers: S2 shared JS; depends: T3 T4)
- [x] T6: Verify syntax + links + reduced-motion — acceptance: JS parses; View more hrefs resolve (covers: S2; depends: T1–T5)
