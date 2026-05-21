# Design System — Canopy Portfolio

## Philosophy

Warm editorial minimalism with procedural media. No stock photography. No illustration libraries. No AI-slop patterns. Every visual element is either typographic, structural, or generated from code.

---

## Typography

### Fonts
- **Display:** Syne (700/600 for headlines, uppercase for hero)
- **Body:** Space Grotesk (400/500)
- **Mono:** Space Mono (400/700 for labels, captions, metadata)

### Scale
- Display: 80px
- H1: 64px
- H2: 48px
- H3: 32px
- H4: 24px
- H5: 20px
- H6: 12px uppercase (mono)
- Body Large: 18px
- Body: 16px
- Caption: 12px (mono)

---

## Colors

### Backgrounds
- Primary: #FAF9F6 (warm off-white)
- Secondary: #FFFFFF
- Tertiary: #F0EFEB
- Dark: #1A1A1A

### Text
- Primary: #1A1A1A
- Secondary: #6B6B6B
- Muted: #9A9A9A
- Inverse: #FFFFFF

### Accents
- Primary: #E17055 (terracotta)
- Secondary: #00B894 (green)
- Tertiary: #74B9FF (blue)

### Procedural Art Palette
Used across all Canvas-based media treatments:
- Dot Primary: `rgb(196, 91, 63)` — terracotta
- Dot Warm: `rgb(212, 165, 116)` — ochre-warm
- Dot Ochre: `rgb(201, 162, 39)` — golden accent
- Background: `rgb(245, 243, 239)` — warm cream
- Dark: `rgb(26, 26, 26)` — near-black

All procedural colors are derived from these base values. No pure grays. No pure black. Tinted neutrals only.

---

## Spacing
- Section padding: 128px
- Grid gutter: 24px
- Max-width: 1400px

---

## Components

### Buttons
- Primary: Dark fill, light text
- Secondary: Outline
- Ghost: Text only with arrow
- Sizes: Small (compact), Regular, Large (CTA)

### Cards
- Border-radius: 12px
- Shadow: subtle on default, elevated on hover
- Transition: 200ms ease

### Tags
- Monospace, uppercase, 12px
- Pill shape (full radius)
- Muted background default, accent fill for featured

---

## Layout Patterns
- 12-column grid
- Asymmetric layouts (5col/7col splits)
- Full-bleed sections for impact
- Breakout elements (extend beyond container)
- Masonry editorial grids with staggered items

---

## Procedural Art System

### Purpose
Replace stock photography and generic illustration with code-generated visual media. Every procedural element shares the same warm palette and noise-based generation logic.

### Generators

#### 1. Halftone Dot-Matrix
- **Technique:** Per-cell brightness evaluation, circular dot rendering
- **Parameters:** density (px per cell), type (gradient/noise/ordered/wave), animate (boolean)
- **Use:** Hero backgrounds, card thumbnails, section textures
- **Files:** [`scratch/procedural-exploration-01.html`](scratch/procedural-exploration-01.html)

#### 2. Flow-Field Line Art
- **Technique:** Simplex noise vector field, particle tracing
- **Parameters:** scale (noise frequency), stepSize, numSteps, lineWidth, opacity, animate, interactive
- **Use:** Project thumbnails, full-bleed section backgrounds, cursor-reactive art
- **Files:** [`scratch/procedural-exploration-02.html`](scratch/procedural-exploration-02.html)

#### 3. Geometric Tessellation
- **Technique:** Voronoi cells + Delaunay triangulation
- **Parameters:** numPoints, type (voronoi/delaunay), colorMode (gradient/index), animate, interactive
- **Use:** Brand identity textures, card media, interactive backgrounds
- **Files:** [`scratch/procedural-exploration-03.html`](scratch/procedural-exploration-03.html)

#### 4. ASCII-Procedural Hybrid
- **Technique:** Character density maps brightness values
- **Parameters:** width/height (char grid), type (noise/gradient/wave/random), color, animate
- **Use:** Type specimens, dark backgrounds, texture overlays
- **Files:** [`scratch/procedural-exploration-04.html`](scratch/procedural-exploration-04.html)

### Implementation Notes
- All generators use Canvas 2D with DPR scaling for retina
- Simplex noise implementation is self-contained (no external libs)
- Interactive variants respond to cursor position (repel/attract)
- Animated variants use `requestAnimationFrame` with time offsets
- Progressive enhancement: static fallback for `prefers-reduced-motion`

---

## Animation Vocabulary

### Principles
- No `transform: scale()` on cards
- No `box-shadow` elevation on hover
- No bounce, no elastic easing
- No off-the-shelf animation libraries (AOS, animate.css)
- Motion serves state change, not decoration

### Easing Tokens
- `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)`
- `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`

### Patterns

| Pattern | Technique | Use |
|---------|-----------|-----|
| **Border Shift** | `border-color` transition on hover | Cards, buttons, interactive blocks |
| **Typographic Underline** | `::after` pseudo-element, width 0→100% | Links, CTAs, navigation |
| **Color State** | Background fill + subtle `translateY(-2px)` | Swatches, filters, selection |
| **Structural Reveal** | `max-height` transition, `overflow: hidden` | Accordions, progressive disclosure |
| **Arrow Slide** | `translateX(8px)` on arrow icon | CTAs, directional links |
| **Focus Ring** | Custom `box-shadow` matching accent | Form inputs, buttons, interactive elements |

### Files
- [`scratch/animation-vocabulary.html`](scratch/animation-vocabulary.html) — Live demos of all patterns
- [`scratch/what-not-to-do.html`](scratch/what-not-to-do.html) — Side-by-side slop vs intentional comparisons

---

## Anti-Slop Checklist

Before shipping any component, verify:

- [ ] No dark mode toggle
- [ ] No card zoom hover (`transform: scale()`)
- [ ] No gradient text (`background-clip: text`)
- [ ] No glassmorphism (`backdrop-filter: blur`)
- [ ] No side-stripe borders (`border-left` accent)
- [ ] No identical card grids (icon + heading + text × 3)
- [ ] No sticky blur nav
- [ ] No generic blob shapes
- [ ] No testimonial carousel
- [ ] No em dashes in copy
- [ ] No stock photos of people shaking hands
- [ ] No whiteboard-with-post-its imagery
- [ ] No "trusted by" logo bar
- [ ] Motion has purpose, not decoration
- [ ] Every color choice is named and justified

---

## Media Strategy

### What We Don't Use
- Stock photography (especially people, whiteboards, post-its)
- Illustration libraries (blush, undraw, etc.)
- Generic icons (unless custom)
- Dark mode variants

### What We Do Use
- **Procedural art** as primary visual language (hero, cards, backgrounds)
- **Typography** as the dominant visual element
- **Structural layout** (grid, borders, whitespace) as design
- **Process photography** only if genuinely personal/authentic

---

## References

### Slop-Resistant Directions
- Missy Reinikainen — Serif + warm cream + rule lines
- Frank Chimero — Hand-drawn warmth, personal tone
- Litebox — Swiss grid discipline, bold black typography
- Shopify Commerce — Dot-matrix graphics, bold values cards
- Axion Neural — Dark academic, technical diagrams

### Our Differentiation
- Warm editorial base + procedural media overlay
- No dark mode, no stock, no templates
- Code-generated visuals that respond to interaction
- Animation that serves state, not spectacle

---

*Last updated: 2026-05-10*
