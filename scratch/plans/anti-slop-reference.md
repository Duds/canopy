# Anti-Slop Reference for Canopy Portfolio

## What This Document Is

A living reference of AI-slop anti-patterns — design signals that read as "AI generated" to an experienced eye. This is not a prohibition list; it is a diagnostic tool. When evaluating any design decision, ask: does this pattern appear below? If yes, redesign it.

---

## Tier 1: Absolute Bans (impeccable.style shared)

These are cross-register failures. No exceptions.

| Anti-Pattern | Why It Signals AI | What To Do Instead |
|-------------|-------------------|-------------------|
| **Side-stripe borders** — `border-left: 3px solid` accent on cards | Training-data default for "call attention to this" | Full border, background tint, or typographic emphasis |
| **Gradient text** — `background-clip: text` with gradient | Decorative, never meaningful | Single solid color, weight/size contrast for emphasis |
| **Glassmorphism** — blur + semi-transparent cards as default | 2021–2023 trend that became AI reflex | Solid surfaces, intentional texture, or nothing |
| **Hero-metric template** — Big number + small label + supporting stats + gradient accent | SaaS landing page monoculture | Let metrics live in context, use editorial hierarchy |
| **Identical card grids** — Same-sized cards with icon + heading + text, repeated | Template-first thinking | Vary card sizes, use asymmetric grids, break the pattern |
| **Modal as first thought** — Modals for everything | Laziness, no progressive disclosure | Inline states, progressive reveal, accordion, page transitions |
| **Purple-blue gradients** — The default "bold" AI move | Most common training-data reflex | Pick a real reference, name it, then pick the color strategy |
| **Cyan-purple neon on dark** — "Futuristic" AI default | Crypto/AI tool monoculture | If dark, warm off-white text on deep charcoal, not neon |

---

## Tier 2: Brand-Specific Slop Signals

These are particularly dangerous for a creative portfolio because they read as "template designer."

| Anti-Pattern | Why It Fails for Canopy | The Better Move |
|-------------|------------------------|-----------------|
| **Dark mode toggle / auto dark mode** | Overdone signal of "premium AI portfolio"; adds maintenance burden | Light-mode-first, commit to the warm editorial warmth |
| **Subtle card zoom on hover** — `transform: scale(1.02)` + `box-shadow` lift | The #1 AI slop micro-interaction | State change via border, color shift, or typographic change |
| **Floating label inputs** — Material Design leftover | Every form builder default | Static labels above inputs, generous spacing |
| **Three-feature column grid** — Icon + heading + body × 3 | The most generic pattern on the internet | Asymmetric layout, varied widths, editorial rhythm |
| **"Trusted by" logo bar** — Grayscale logos in a row | Social proof cliché | Integrate clients into case study narrative |
| **Sticky glass nav** — `backdrop-filter: blur(10px)` | Every AI portfolio has this | Solid nav, color-shift on scroll, or no sticky at all |
| **Generic blob shapes** — Organic SVG blobs as "brand element" | Meaningless decoration | Procedural shapes with system (noise, flow fields, dot-matrix) |
| **5-star gradient buttons** — `linear-gradient(135deg, ...)` CTAs | Training-data "make it pop" | Solid accent, border animation, or typographic CTA |
| **Lottie confetti on success** — Playful = animation library | Lazy personality substitute | Custom micro-interaction tied to brand motion language |
| **"Meet the team" headshots with social icons** | Corporate template residue | Process photos, workspace details, or no team section |
| **Parallax scroll on every section** — `background-attachment: fixed` | 2015 trend that won't die | Scroll-driven reveals with `animation-timeline`, purposeful only |
| **Testimonial carousel** — Quote + photo + name in a slider | No one reads these | Integrate quotes into case study flow, editorial pull-quote style |

---

## Tier 3: Subtle AI Residue

These won't kill a design alone, but stacked they create unmistakable AI slop.

| Pattern | The Tell | Alternative |
|---------|----------|-------------|
| **Over-rounded everything** — 16px+ border-radius on all elements | Friendly = rounded, AI default | Sharp corners for structure, small radius (2–4px) for UI, full radius only for pills |
| **Identical vertical rhythm** — Every section has same padding | No compositional thinking | Vary spacing for rhythm: tight groupings, generous separations |
| **System font stack** — `-apple-system, BlinkMacSystemFont...` | No typographic commitment | Chosen fonts with voice (see impeccable reflex-reject list) |
| **Pure gray neutrals** — `#f5f5f5`, `#e0e0e0` | No color thinking | Tinted neutrals toward brand hue |
| **Drop shadow as depth** — `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` | Default elevation | No shadow, or colored shadow, or shadow as structural element |
| **Em dashes everywhere** — `&mdash;` as pause | AI loves em dashes | Commas, colons, semicolons, periods |
| **"Let's build something amazing"** — Generic CTA copy | Hallucinated copy | Specific, contextual CTAs |
| **AOS / animate.css defaults** — `fade-up`, `fade-in` | Off-the-shelf motion | Custom choreography, or no entrance motion |

---

## The Canopy Anti-Slop Checklist

Before shipping any component:

- [ ] No dark mode toggle
- [ ] No card zoom hover
- [ ] No gradient text
- [ ] No glassmorphism
- [ ] No side-stripe borders
- [ ] No identical card grids
- [ ] No three-feature columns
- [ ] No sticky blur nav
- [ ] No generic blob shapes
- [ ] No testimonial carousel
- [ ] No em dashes in copy
- [ ] No stock photos of people shaking hands
- [ ] No whiteboard-with-post-its imagery
- [ ] No "trusted by" logo bar
- [ ] Motion has purpose, not decoration

---

## What We DO Instead

| Domain | Our Approach |
|--------|-------------|
| **Imagery** | Procedural art, dot-matrix, flow fields, generative geometry — coded, not sourced |
| **Color** | Warm editorial palette, terracotta accent, tinted neutrals — no pure grays |
| **Typography** | Distinctive display + body pairing, extreme scale contrast, editorial hierarchy |
| **Layout** | Asymmetric grids, intentional breaks, varied rhythm — never centered-stack default |
| **Motion** | Subtle state changes, purposeful reveals, no entrance animation as decoration |
| **Depth** | Flat with structural borders, or textured surfaces — no drop-shadow default |
| **CTA** | Typographic, contextual, minimal — no gradient button |

---

## References That Pass the Slop Test

From our audit, these directions are slop-resistant:

- **Missy Reinikainen** — Serif + warm cream + rule lines. Editorial gravitas without cliché.
- **Frank Chimero** — Hand-drawn warmth, personal tone. Human-made is the antidote.
- **Litebox** — Swiss grid discipline, bold black typography. Systematic, not templated.
- **Shopify Commerce** — Dot-matrix graphics, bold values cards. Procedural + committed color.
- **Axion Neural** — Dark academic, technical diagrams. Specific voice, not generic dark mode.

---

*Last updated: 2026-05-10*
*Next review: After procedural art explorations are built*
