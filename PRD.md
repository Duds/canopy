# canopy — Product Requirements Document

> Status: stub — expand from alignment interview  
> Last updated: 2026-04-26

## Purpose

A personal portfolio for Dale Rogers (service designer, strategy consultant, indie hacker) to showcase skills and experience to potential clients and employers.

## Personas

| Persona | Goal | Key concern |
|---|---|---|
| **Potential client** | Evaluate Dale's domain fit for their engagement | Evidence of relevant outcomes, not just credentials |
| **Potential employer** | Assess depth and breadth of practice | Narrative coherence across case studies |
| **Peer / collaborator** | Understand Dale's methods and worldview | Authentic voice, intellectual rigour |

## Features — MVP

- [ ] Home page — hero, selected work, brief about
- [ ] Work listing — filterable by category/tag
- [ ] Work detail — case study with problem, approach, outcome
- [ ] Writing listing — articles index
- [ ] Writing detail — article page
- [ ] About page — background, philosophy, contact

## Features — v1.5 (progressive enhancement)

- [ ] **Adaptive home — referrer-aware reshuffle.** A user arriving from a LinkedIn link about regulatory work sees selected work re-ordered to lead with regulatory case studies. A user from a tender link sees government work first. Same content, server-side reshuffle by referrer (or query param `?lens=government|regulatory|industrial`). See [_tasks/20260427-001-adaptive-home-referrer-reshuffle.md](_tasks/20260427-001-adaptive-home-referrer-reshuffle.md). **Constraint note:** Azure SWA free tier has no server-side runtime, so this is implemented either (a) client-side JS reading `document.referrer` after hydration, accepting that AI crawlers see the default order, or (b) Azure SWA managed function on the entry path. Pick during the v1.5 spike.

## Non-goals (out of scope for v1)

- CMS or admin interface
- Authentication
- Contact forms
- E-commerce
- Comments / social features
- Newsletter / email capture

## Content targets

| Collection | Target count | Current state |
|---|---|---|
| Case studies (`/work`) | ~15 (pruned from ~15 existing) | Stubs only |
| Articles (`/writing`) | ~15-20 (pruned from ~20 existing) | Stubs only |
| Categories | 4 | `government` · `regulated-industry` · `industrial` · `enterprise` (exclusive, one per case study) |
| Tags | 18 | Locked in [docs/tag-taxonomy.md](docs/tag-taxonomy.md) — multi-select across all collections |
| Topic pillar pages | 18 | `/topic/[tag]` — each pillar aggregates work + writing + labs sharing that tag |

## URL schema (permanent)

```
/                    Home
/work                Case study listing
/work/[slug]         Case study detail
/writing             Articles listing
/writing/[slug]      Article detail
/about               About
```

## Success metrics

- Home page renders at dalerogers.com.au
- All case studies accessible at canonical `/work/[slug]` URLs
- Lighthouse score ≥ 90 (performance, accessibility, SEO)
- Zero broken links
- Build completes in < 30s

## Technical constraints

- Azure Static Web Apps free tier (100 GB bandwidth, no server-side runtime)
- No database — flat-file Markdown only
- Must support procedural brand graphic system as future drop-in (asset seam in `/public/assets/`)
