# Mentor Bookstore — DESIGN.md (v2)

## Shift
From editorial mentor landing → **book-selling platform** (Rokomari-like commerce density) for a mentor-author.

## Identity
Commerce bookstore, not magazine. Books lead; courses sell like products.

## Palette
| Token | Value | Use |
|-------|--------|-----|
| brand | `#C62828` | Logo, primary CTA, sale badges |
| brand-dark | `#8E1B1B` | Hover, utility bar |
| ink | `#212121` | Titles |
| body | `#555555` | Descriptions |
| page | `#F5F5F5` | Page bg |
| card | `#FFFFFF` | Product cards |
| rule | `#E0E0E0` | Borders |
| sale | `#C62828` | Discounted price |
| muted | `#9E9E9E` | Struck price, meta |
| stock | `#2E7D32` | In stock |
| gold | `#F9A825` | Stars |

## Type
- UI/system sans throughout (commerce density)
- Book titles: 15px semi-bold, 2-line clamp
- Price: 16–18px bold; old price 13px struck
- No editorial serif hero — marketplace header instead

## Layout (Rokomari patterns)
1. Top utility strip (hotline · track order · login)
2. Sticky header: logo · **search** · cart badge
3. Category row (Books · Courses · Ebooks · Workshops · Bundles)
4. Promo hero (book + course offer)
5. **Books grid** (4–5 cols desktop) — cover, title, author, stars, price/discount, Add to Cart
6. **Courses grid** — same card pattern, “Enroll”
7. Mentor spotlight strip
8. YouTube playlists
9. Sayings
10. Reviews
11. Momentum placeholders
12. Checkout band + modal
13. Footer + social

## Card anatomy (signature)
```
[cover]
Title
Author
★★★★☆ (12)
TK. ~~3000~~  1800  (-40%)
[Add to Cart]
```

## Payment
Cart drawer/modal — multi-item, same as Rokomari cart flow. Demo gateway.

## Decision
Books first visually so the site *feels* like a bookstore; mentor/courses remain first-class SKUs.
