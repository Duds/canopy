---
title: Content guidelines — canopy
type: reference
created: 2026-04-27
---

# Content guidelines — canopy

Operational decisions from the IA interview (Rounds 3–4, 2026-04-27).

## Writing index (`/writing`)

**Layout:** Featured strip (3–4 curated articles) + chronological list below.

**Rationale:** Featured slots serve as a presentation layer for walkthrough-mode screen shares and give you a way to lead with evergreen or cornerstone pieces. Chronological below signals freshness to search and readers.

**Implementation:**
- Top section: `featured: true` frontmatter flag in Markdown — pull 3–4 manually curated pieces.
- Below: all articles, sorted by date descending.
- Each article has inline tag chips — clicking a tag filters/navigates to `/topic/[tag]`.

## Aging article policy

**Policy:** Editorial note where the position has shifted; archive the obviously stale; keep the rest as-is with publish date prominent.

**Rationale:** Service design moves fast. Your 2018 pieces may have shifted ground. Being transparent about that (rather than deleting or silent updating) builds trust and signals you're a live thinker.

**Process:**
- During migration, review each article against current practice.
- If the core thesis has aged (outdated): add a 1–2 line editorial note at the top: *"Updated 2026-04: This reflects my 2018 position on [topic]. Here's what's changed: [link to newer piece or thought]."*
- If it's obviously stale (e.g., "MS Teams security in 2016" when Teams has since evolved): archive quietly (move to a `_archive/` collection, no `/writing` link).
- If it's still sound: keep as-is, date prominent.

**Example editorial note:**
> *2026 note: This piece was written during the pre-AI era of SD. My thinking on the verification/validation loop in a vibecoding context has evolved — see [AI and service design](ai-and-practice) for the updated framing.*

## Case study header — engagement state

**Add a status field to every case study header:**
- `engagement-state: active | shipped | pivoted | ongoing`

**Rationale:** You're now engaged via client-side labour hire with EOFY-shaped, pivot-at-moments-notice terms. Case studies need to honestly reflect that. An "active" engagement signals current knowledge; a "pivoted" one signals real-world pressures.

**Where it appears:**
- Frontmatter: `engagement-state: shipped`
- Rendered on page: small badge in the header, e.g., *"Antarctic doctrine application · DCCEEW · 2021 · Shipped"*

**Meanings:**
- `shipped`: completed, outcomes known
- `active`: engagement ongoing, outcomes still unfolding
- `pivoted`: original scope shifted mid-flight
- `ongoing`: no end date, continuous relationship

## Cross-link strategy

Every piece of content (case study, article, lab project) links via its tags to `/topic/[tag]` pillar pages.

**Additionally:** Case studies can include a "next case study in your tour →" link at the bottom for F2F walkthrough mode. This is a manual curation — you pick which case study follows which. Use sparingly (not on all pieces, only where a narrative thread makes sense).

## Sources

- IA interview Rounds 1–4 (2026-04-26 to 2026-04-27)
