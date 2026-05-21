# Scratch vs References — Audit Report

## Executive Summary

The scratch files explore a narrow slice of the aesthetic territory covered by the reference images. Currently anchored in **warm editorial minimalism** (terracotta palette, Syne/Space Grotesk typography), the scratches successfully probe Armonia-excursions and Missy-Reinikainen territory but miss entirely on dark-academic, Swiss-international, color-field brutalist, and hand-crafted aesthetic lanes.

---

## Reference Taxonomy

| # | Reference | Primary Aesthetic | Key Visual Traits |
|---|-----------|-------------------|-------------------|
| 1 | Armonia Excursions | Warm editorial minimalism | Warm beige background, clean cards, rounded corners, soft shadows, green accent |
| 2 | Axion Neural | Dark academic / scientific | Dark background, serif display, monospace meta, technical diagrams, high contrast |
| 3 | Commure Health | Color-field / playful | Bright yellow border, illustrated characters, generous whitespace, simple sans |
| 4 | Designer Process | Process / personal | Color-coded step blocks, bold mixed typography, grid cards, personal photo |
| 5 | Extract Papers | Geometric / abstract | Large polygon shapes, minimal text, white space, artistic composition |
| 6 | Frank Chimero | Hand-crafted / warm | Hand-drawn illustration, warm cream, simple lists, personal tone |
| 7 | Gobe Loyalty | Eco / systematic | Nature palette, tier system, progress bars, clean icons, earthy tones |
| 8 | Growwwkit | Bold / color-blocked | Pastel section backgrounds, large display type, playful email CTA, flat colors |
| 9 | GT Brand Palette | Color system / Swiss | Strict grid, Pantone values, systematic documentation, neutral beige |
| 10 | Litebox | Swiss / International | Bold black typography on beige, strict grid, neon accents, geometric shapes |
| 11 | Meagan Durlak | Academic / monochromatic | Blue duotone photo, structured CV, clean hierarchy, single accent color |
| 12 | Missy Reinikainen | Editorial / refined | Large serif headline, warm cream, rule lines, asymmetric two-column, client list |
| 13 | Plenary Co-Labs | Scientific / structured | Lab card with image, circular photo, project grid, muted pastels |
| 14 | Shopify Commerce | Brutalist / color-blocked | Lime green + pink sections, dot-matrix graphics, bold values cards |
| 15 | So Social | Warm / commercial | Peach + sage palette, stats callouts, case study cards, brand logos |
| 16 | UI Style Guide | Systematic / documentation | Grid specimen, type scale, form elements, neutral gray, technical precision |

---

## Scratch File Inventory

| File | Purpose | Aesthetic Direction | Key Tokens |
|------|---------|---------------------|------------|
| `design-system.html` | Component sampler | Warm editorial (v1) | Terracotta #D4654A, Syne, Space Grotesk, warm off-white #FAF9F6 |
| `design-system-v02.html` | Component sampler (iteration) | Warm editorial + energy accent | Same as v1 + lime #C8E03E, tighter leading, larger scale |
| `design-system-docs.html` | Documentation page | Technical / systematic | Same tokens, structured docs layout |
| `sampler.html` | Layout grid tool | Neutral / structural | Warm beige #F5F3EF, grid overlay, layout blocks |

---

## Gap Analysis

### 🔴 Major Gaps — Entirely unexplored territories

| Gap | References | Why it matters for Canopy |
|-----|------------|---------------------------|
| **Dark mode / high contrast** | Axion | Portfolio has no dark variant; increasingly expected for "premium" feel |
| **Serif display typography** | Missy, Axion, Plenary | Scratch uses only Syne (sans); serif adds editorial gravitas for strategy content |
| **Swiss / International Style strict grid** | Litebox, GT Brand | Rigorous grid discipline with bold typography; signals precision and systematic thinking |
| **Color-field section blocking** | Shopify, Growwwkit, Commure | Distinct background colors per section create rhythm and visual interest |
| **Hand-drawn / illustration integration** | Frank Chimero, Growwwkit | Personal, approachable tone; differentiates from corporate portfolios |
| **Process visualization** | Designer Process | Shows *how* work happens — critical for service design credibility |
| **Stats / metrics display** | So Social, Axion | Evidence over credentials principle; numbers with context |
| **Geometric / abstract graphics** | Extract, Litebox | Visual interest without stock photography; ownable aesthetic |
| **Monochrome / duotone imagery** | Meagan Durlak | Cohesive image treatment across case studies |
| **Dot-matrix / pattern textures** | Shopify | Subtle texture adds depth without clutter |

### 🟡 Partial Gaps — Explored but under-developed

| Area | Current State | Gap |
|------|---------------|-----|
| **Typography scale** | 44–120px display in v02 | No serif pairing explored; no extreme scale contrast (e.g., 200px+ display) |
| **Border radii** | 2–14px range | No fully rounded (pill) or sharp (0px) exploration |
| **Shadows** | Subtle 0–24px blur | No colored shadows, no inset shadows, no shadow as structural element |
| **Grid breaks** | Sampler has 12-col grid | No asymmetric 5/7 splits, no breakout elements, no overlapping cards |
| **Animation** | None in scratches | All references use subtle motion; scratch has zero animation exploration |
| **Form elements** | Minimal in docs | No styled inputs, selects, toggles — UI Style Guide reference unaddressed |
| **Card treatments** | Default + elevated hover | No border-only cards, no image-as-background cards, no horizontal cards |

### 🟢 Well Covered

| Area | Evidence |
|------|----------|
| Warm neutral palette | All scratch files use warm off-whites consistently |
| Terracotta accent | Present and iterated across v1 and v02 |
| Space Grotesk + Syne pairing | Established and documented |
| 12-column grid | Sampler provides interactive grid tool |
| Responsive type scale | Mobile-first tokens in design-system.html |
| Monospace labels | Space Mono used for captions and meta |

---

## Recommendations

### Immediate experiments (single-session scratches)

1. **Dark-mode variant** — Fork `design-system.html` with near-black background (`#0F0F0F`), warm off-white text, same terracotta accent. Test readability and mood shift.

2. **Serif display exploration** — Replace Syne with a serif (e.g., `Newsreader`, `Source Serif 4`, or `Playfair Display`) in a hero section. Test against Canopy's "pragmatic minimalism" principle.

3. **Color-blocked section** — Create a single-page scratch with 3–4 sections, each with a distinct background color from a unified palette (sage, terracotta, cream, charcoal). Test transition rhythm.

4. **Process step visualization** — Build the "How it all works" pattern from Designer Process reference: numbered steps, color-coded blocks, asymmetric grid.

5. **Stats/metrics component** — Large number + small label pattern from So Social. Test with real project data.

### Medium experiments (multi-session)

6. **Swiss grid page** — Strict 12-column, bold black typography, minimal color, geometric accent shapes. Inspired by Litebox + GT Brand.

7. **Hand-crafted about section** — Integrate a hand-drawn illustration or sketch treatment with warm editorial layout. Inspired by Frank Chimero.

8. **Case study card system** — Horizontal, vertical, and featured card variants with image treatments, tag systems, and hover states.

9. **Form system** — Complete input, textarea, select, checkbox, toggle, and button styles with focus, error, and disabled states.

### Strategic questions for Canopy

- Does the portfolio need a **dark mode toggle**, or is light-mode-first sufficient?
- Should case study imagery use a **consistent treatment** (monochrome, duotone, color-blocked) or remain natural?
- Is **illustration** part of the brand vocabulary, or should the site remain illustration-free?
- How important is **animation/micro-interaction** to the "premium" feel vs. performance?

---

## Mapping: References → Scratch Coverage

```
Armonia Excursions        ████████████████████  FULLY COVERED (warm editorial)
Missy Reinikainen         █████████████████░░░  MOSTLY COVERED (needs serif)
So Social                 █████████████░░░░░░░  PARTIALLY (needs stats, peach palette)
Gobe Loyalty              ██████████░░░░░░░░░░  PARTIALLY (needs tier system, icons)
UI Style Guide            █████████░░░░░░░░░░░  PARTIALLY (needs form elements)
Plenary Co-Labs           ████████░░░░░░░░░░░░  GAPS (needs serif, circular images)
Designer Process          ██████░░░░░░░░░░░░░░  GAPS (needs process blocks, bold type)
GT Brand Palette          █████░░░░░░░░░░░░░░░  GAPS (needs strict grid discipline)
Frank Chimero             ████░░░░░░░░░░░░░░░░  GAPS (needs illustration, hand-crafted)
Meagan Durlak             ███░░░░░░░░░░░░░░░░░  GAPS (needs monochrome, structured CV)
Litebox                   ██░░░░░░░░░░░░░░░░░░  MAJOR GAP (Swiss style unexplored)
Shopify Commerce          ██░░░░░░░░░░░░░░░░░░  MAJOR GAP (color blocking unexplored)
Commure Health            ██░░░░░░░░░░░░░░░░░░  MAJOR GAP (playful color unexplored)
Growwwkit                 ██░░░░░░░░░░░░░░░░░░  MAJOR GAP (pastel boldness unexplored)
Extract Papers            █░░░░░░░░░░░░░░░░░░░  MAJOR GAP (geometric abstraction unexplored)
Axion Neural              █░░░░░░░░░░░░░░░░░░░  MAJOR GAP (dark academic unexplored)
```
