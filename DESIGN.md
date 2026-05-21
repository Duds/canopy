# Design

## Visual Theme

**Pragmatic minimalism.** Clean, readable, focused on content. No decorative flourish, no trendy effects. Confidence through clarity and intentional use of space. Warmth through typography and a restrained but distinctive color strategy.

**Principle:** Design serves the work, not itself. Visitors should feel the competence and humanity behind the portfolio, not admiration for the design.

## Color Palette

Light-mode first (confident, approachable). Dark mode optional future enhancement.

### Primary palette (OKLCH)

- **Neutral base:** `oklch(99% 0.008 0)` (off-white, tinted toward warm gray)
- **Text primary:** `oklch(18% 0.015 270)` (near-black, slight cool tint for readability)
- **Text secondary:** `oklch(50% 0.06 270)` (mid-tone gray)
- **Accent:** `oklch(48% 0.22 25)` (warm ochre/rust; distinctive, not trendy)
- **Muted:** `oklch(65% 0.05 270)` (light gray for borders, dividers)

### Semantic colors

- **Success:** `oklch(65% 0.20 142)` (accessible green, calm)
- **Warning:** `oklch(75% 0.18 70)` (amber, warm)
- **Error:** `oklch(55% 0.22 10)` (rust-red, aligned with accent for family)
- **Info:** `oklch(60% 0.15 250)` (soft blue)

**Rationale:** Ochre/rust as primary accent reflects confident, grounded practice without adopting corporate blue or designer-trendy gradients. The palette is warm, readable, and works across government, industrial, and regulated contexts without feeling academic or clinical.

## Typography

### Font stack

- **Sans-serif (primary):** Inter (system fallback: system-ui)
- **Monospace (code/technical):** JetBrains Mono or Courier New

### Scale & hierarchy

**Desktop:**
- H1: 44px / 1.2 / 700 (Hero, confidence)
- H2: 28px / 1.3 / 600 (Section headers)
- H3: 20px / 1.4 / 600 (Subsections)
- Body: 16px / 1.6 / 400 (Content, reading)
- Small: 14px / 1.5 / 400 (Metadata, captions)
- Mono: 13px / 1.5 / 400 (Code blocks, technical detail)

**Mobile:**
- H1: 32px (readable, not oversized)
- H2: 22px
- H3: 18px
- Body: 16px (no smaller; accessibility)
- Preserve line-height and weight ratios

**Constraint:** Max line length 65-75ch for body text. Readability over full-width spectacle.

## Spacing & Layout

### Scale

Base unit: 4px. Use multiples: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

- **Micro (4-8px):** Button padding, icon spacing
- **Compact (12-16px):** Content padding, tight grouping
- **Breathing (24-32px):** Component gaps, moderate separation
- **Section (48-64px):** Major section breaks
- **Hero (96-128px):** Top/bottom of page

### Grid

- **Desktop:** 12-column grid, 24px gutters
- **Tablet:** 8-column, 20px gutters
- **Mobile:** Single column, 16px padding

### Card / container pattern

Minimal use. If a card is needed:
- Background: `oklch(99.5% 0.004 0)` (barely perceptible tint)
- Border: 1px `oklch(90% 0.01 0)`
- Padding: 24px
- Radius: 4px (subtle, not rounded)
- No drop shadows (flat design)

**Constraint:** No nested cards. Ever.

## Components

### Navigation

- Sticky header, subtle background (`oklch(99.5%)`)
- Logo + primary nav (home, work, writing, about)
- No hamburger menu on mobile — full nav remains visible (simple, flat structure)
- Active link indicator: bottom border, accent color, 2px
- Hover: text color → accent, no background change

### Buttons

- Primary: accent background, white text, 4px radius, 12-16px padding
- Secondary: transparent, accent text, 1px border, accent
- Hover: darken accent by 10% in lightness
- Focus: ring, 2px, accent, 2px offset
- No drop shadows

### Links

- Text color: accent
- Underline: never (color alone sufficient)
- Hover: darken slightly, no animation
- External: optional subtle icon (→ or ↗) in prose only

### Content cards (work, writing)

- Title (h3), summary (body), date (small), tags (micro)
- Optional cover image (16:9, responsive)
- No background or border by default (white space = structure)
- Hover on title or entire card: title color → accent (gentle)
- Transition: 150ms ease-out on color

### Tags

- Background: `oklch(95% 0.008 0)`
- Text: text-secondary
- Radius: 2px (minimal)
- Padding: 4px 8px
- Semantic colors where relevant (green for category, blue for topic)

### Metadata

- Date: small, muted
- Category: small, accent
- Reading time: small, muted (if present)

## Motion & Interaction

**Philosophy:** Motion should feel fast, not fancy. No easing curves that call attention to themselves.

### Animations

- Link hover: color transition, 150ms, ease-out
- Focus ring: fade in, 100ms, ease-out
- Page transition: optional 200ms fade (if router used)
- Avoid: bounces, springs, bounces, hover scale, rotation

**Never animate:** layout properties (width, height, position)

## Accessibility

- **WCAG AA compliance minimum.** Test with real screen readers.
- **Color contrast:** All text ≥7:1 (AAA for primary, AA acceptable for disabled states)
- **Focus:** Visible focus ring on all interactive elements (2px, accent color)
- **Motion:** Respect `prefers-reduced-motion` — disable transitions where possible
- **Font size:** No text smaller than 14px in reading contexts; 16px preferred
- **Form labels:** Always visible, associated with input via `for`/`id`
- **Images:** All have alt text; decorative images marked `alt=""`
- **Headings:** Semantic h1-h6, no skipping levels
- **Links:** Understandable out of context ("learn more" is not acceptable)

## Responsive Behavior

- **Mobile-first:** Start at smallest viewport, enhance for larger
- **Breakpoints:** 640px (sm), 1024px (lg), 1280px (xl)
- **Images:** Responsive via srcset or Astro image optimization
- **Touch targets:** ≥44px (buttons, links, interactive areas)
- **Type scale:** Reduce on mobile, preserve readability
- **Layout:** Single column on mobile, expand grid at lg+

## Brand application

### Tone in copy

- Clear, direct, jargon-free where possible
- Acknowledge complexity without hiding behind buzzwords
- First-person when reflecting on practice; third-person for case study narratives
- No em dashes (use commas, colons, periods)
- Short paragraphs (2-4 sentences)

### Image treatment

- Photographs only if they show real work (whiteboards, research, delivery)
- No stock photography (expensive desk, people in meetings, pointing at screens)
- Case study diagrams/wireframes are welcome; tools and process visible
- Cover images for case studies: either real work output or abstract (color block, pattern)

### Data & metrics

- Present outcomes clearly; don't oversell or vaguify
- Use small data viz (simple charts) where they add clarity
- Always include context ("solved in 3 months" not just "3 months")

## Implementation notes

### CSS architecture

- CSS tokens in `src/styles/tokens.css` (OKLCH values as custom properties)
- Tailwind extends from tokens via `tailwind.config.mjs`
- Component styles co-locate with component (Astro scoped styles preferred)
- Global styles in `src/styles/global.css` (typography, resets, focus rings)

### Tailwind usage

- Prefer utility classes for layout and spacing
- Reserve component classes for complex, reusable patterns (buttons, cards, nav)
- No arbitrary values unless unavoidable; add to config instead
- Dark mode: defer; light-mode-only for MVP

### Fonts

- **Inter:** loaded via system or bundle (check package.json for source)
- **JetBrains Mono:** same; fallback to Courier New if unavailable
- No variable fonts or font weights outside 400, 600, 700

## Future enhancements (not MVP)

- Dark mode (via `prefers-color-scheme`, toggle optional)
- Animated SVG icons (if personality pushes toward delight)
- Procedural brand graphic system (mentioned in PRD; asset seam ready at `/public/assets/`)
- Motion-heavy hero (parallax, scroll-driven) — only if brand voice shifts toward "bolder"
