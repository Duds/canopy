---
id: 20260427-001
type: feature
status: backlog
phase: v1.5
created: 2026-04-27
parent: TASKS.md
linked-prd: PRD.md#features--v15-progressive-enhancement
---

# 20260427-001 — Adaptive home: referrer-aware reshuffle

## Goal

The selected-work strip on `/` reshuffles itself to lead with the case studies most relevant to the visitor's referrer or stated lens, without changing routes or content.

## Why

Surfaced during site map research (2026-04-27). The PRD positions warm clients as the primary audience — those clients arrive from LinkedIn, recruiter emails, or tender packs, and the relevance signal is in the referrer or a lens query param. Adaptive home is the lightest possible "personalisation" that meaningfully improves first-impression fit, without LLMs and without breaking AEO/GEO crawlability.

## Behaviour

Default order = curated "most representative of practice" (3 case studies, locked in Round 2 of the IA interview).

Reshuffle triggers (in priority order):

1. Query param: `?lens=government | regulated-industry | industrial | enterprise` — explicit, deterministic, shareable, friendly to A/B campaigns.
2. Referrer match: if `document.referrer` host matches LinkedIn / known tender portals / recruiter domains, apply a default lens via referrer→lens map.
3. Otherwise: default curated order.

The reshuffle re-ranks the existing 3 selected slots — it does not invent new entries. If no case studies match the lens, fall back to default.

## Implementation options

- **(a) Client-side JS, post-hydration.** Read `document.referrer` and `URLSearchParams` after hydration, swap card positions. Cheapest. AI crawlers and the first paint see the default order — fine, because the default *is* the correct order for cold/uncategorised traffic.
- **(b) Azure SWA managed function on `/`.** Server-side, sees referrer header, returns the right HTML on first byte. More complex, conflicts with PRD's "no server-side runtime" line — would require a constraint update.
- **(c) Edge config / static-with-variants.** Pre-render lens variants at `/`, `/?lens=government`, etc. Build-time only.

**Default recommendation: (a)** — preserves Azure SWA free tier, AEO-safe, no infra change.

## Acceptance

- Visit with no referrer / no lens → default order.
- Visit with `?lens=government` → government case studies at slots 1–3 if available.
- Visit from LinkedIn (mocked referrer) → matches LinkedIn lens map.
- View source / `curl` the page → still returns default order as canonical HTML (AEO-safe).
- Lighthouse SEO score unchanged.

## Out of scope (v1.5)

- LLM-driven personalisation (deferred to v2 chat consideration).
- Personalisation beyond the selected-work strip.
- Persistent visitor preferences / cookies.

## Sources

- IA interview Round 4 + futurist research (2026-04-27)
- [Generative UI: Real-Time Personalized Interfaces via AI Models](https://earezki.com/ai-news/2026-03-26-generative-ui-notes/) — adaptive landing pattern
