---
updated: 2026-04-27
---

# canopy — Tasks

## Now

- [x] 20260426-001 Write PRD.md from alignment interview context
- [x] 20260426-002 Write HLD.md — stack diagram, content model, Azure deployment pipeline
- [x] 20260426-003 Design token pass — define brand colour, type, spacing placeholders in tokens.css
- [x] 20260427-001 Impeccable setup — wire skills globally, write PRODUCT.md + DESIGN.md, document brand direction
- [ ] **NEXT SESSION — Design & layout implementation**
  - [ ] **D-1** — Implement colour palette from DESIGN.md into tokens.css (OKLCH: ochre accent, tinted neutrals, semantic colours) `[feature, S]`
  - [ ] **D-2** — Update tailwind.config.mjs to use new colour tokens + typography scale `[feature, S]` ← needs D-1
  - [ ] **D-3** — Run `impeccable live` on home page — visual variant iteration, pick best direction `[design, S]` ← needs D-1, D-2
  - [ ] **D-4** — Refine home page layout (hero, selected work 3-up, recent thinking) based on live iteration `[design, S]` ← needs D-3
  - [ ] **D-5** — Implement home page layout in Astro (with new colours + typography) `[feature, M]` ← needs D-2, D-4
  - [ ] **D-6** — Audit & harden: WCAG AA contrast, focus rings, `prefers-reduced-motion`, responsive at 640/1024/1280 `[chore, M]` ← needs D-5
  - [ ] **D-7** — Build & test on localhost, verify no regressions `[chore, S]` ← needs D-6

## Next — Phase 1: Content & IA lock (from IA interview, 2026-04-27)

### PLAN

- [ ] **P-1** — Review Agriculture/biosecurity case study (new addition to portfolio) — assess what's publishable given NDA/confidentiality `[spike, S]`
- [ ] **P-2** — Audit archive case studies (10 existing) for migration fit — which are publishable, which need redaction? `[chore, M]`
- [ ] **P-3** — Audit archive articles (15 existing) — identify stale, identify editorial-note candidates, identify keepers `[chore, M]`

### BUILD

- [ ] **B-1** — Migrate case studies into `src/content/work/[slug].md` (15 target, use frontmatter schema from sitemap.md) `[feature, M]` ← needs P-2
- [ ] **B-2** — Migrate articles into `src/content/writing/[slug].md` (15-20 target, apply editorial notes per content-guidelines.md) `[feature, M]` ← needs P-3
- [ ] **B-3** — Add Agriculture/biosecurity as new case study if publishable `[feature, S]` ← needs P-1
- [ ] **B-4** — Author `llms.txt` at site root — machine-readable site summary for AEO/GEO `[feature, S]`
- [ ] **B-5** — Add Schema.org markup templates to Astro (Person, Article, CollectionPage, CreativeWork) `[feature, M]`
- [ ] **B-6** — Implement `/topic/[tag]` pillar page template (aggregates work + writing + labs by tag) `[feature, M]` ← needs B-1, B-2
- [ ] **B-7** — Implement ContentCard, ArticleCard, LabCard, TagChip components `[feature, S]`
- [ ] **B-8** — Design home page layout per sitemap specs `[design, S]` — hero one-liner + selected work (3) + recent thinking (2-3) + footer
- [ ] **B-9** — Design about page layout per sitemap specs (narrative + values grid + V&V framework + indie hacker + contact) `[design, M]`
- [ ] **B-10** — Implement home page layout `[feature, M]` ← needs B-7, B-8
- [ ] **B-11** — Implement about page layout `[feature, M]` ← needs B-7, B-9
- [ ] **B-12** — Implement `/work` listing with category filter `[feature, M]` ← needs B-1, B-7
- [ ] **B-13** — Implement `/work/[slug]` detail page with related content + optional "next in series" link `[feature, M]` ← needs B-1, B-6
- [ ] **B-14** — Implement `/writing` listing (featured strip + chronological) `[feature, M]` ← needs B-2, B-7
- [ ] **B-15** — Implement `/writing/[slug]` detail page with related content + editorial notes `[feature, M]` ← needs B-2, B-6
- [ ] **B-16** — Implement `/labs` listing `[feature, S]` ← needs B-7
- [ ] **B-17** — Implement `/labs/[slug]` detail page with companion article link `[feature, S]` ← needs B-7
- [ ] **B-18** — Implement `/topic/[tag]` pillar pages with hub-and-spoke cross-linking `[feature, M]` ← needs B-6

### TEST

- [ ] **T-1** — Content audit: all case studies have correct frontmatter, all tags valid, no missing images `[chore, S]`
- [ ] **T-2** — Schema.org validation: Person, Article, CollectionPage, CreativeWork all render correctly `[chore, S]` ← needs B-5
- [ ] **T-3** — Cross-link audit: all tag links resolve, no dead internal links `[chore, S]` ← needs B-6
- [ ] **T-4** — AEO audit: `llms.txt` renders, AI crawlers can read site structure `[chore, S]` ← needs B-4
- [ ] **T-5** — Lighthouse: score ≥ 90 (perf, a11y, SEO), zero broken links `[chore, M]`

### SHIP

- [ ] **S-1** — Set up GitHub repo + Azure Static Web Apps deployment pipeline `[chore, M]`
- [ ] **S-2** — Wire custom domain dalerogers.com.au → Azure SWA `[chore, S]` ← needs S-1
- [ ] **S-3** — PR review: content migration, IA implementation, schema markup, cross-linking, all tests pass `[chore, S]` ← needs T-1…T-5

## Next — Phase 2: Future features (v1.5+, backlog)

- [ ] **V2-1** — Implement adaptive home (referrer-aware case study re-ordering) — see `_tasks/20260427-001-adaptive-home-referrer-reshuffle.md` `[feature, M]`
- [ ] **V2-2** — Implement "Ask my portfolio" chat (RAG over public content, guardrailed) — spike first on chatbot UX + hallucination guards `[spike, M]`
- [ ] **V2-3** — GenUI spike for DCCEEW environment-digital-gateway (separate project) — see DCCEEW `_tasks/F-1-genui-constrained-component-pattern.md`

## Blocked

(none)

## Backlog

- [ ] Integrate procedural brand graphic system (spike: `scratch/portfolio-brand-graphic-procedural-design`)
- [ ] About page content
- [ ] Open Graph / meta tags for SEO
- [ ] Sitemap.xml generation
- [ ] robots.txt
- [ ] `llms.txt` at site root — site summary for AI crawlers (AEO/GEO foundation)
- [ ] Schema.org structured data — Person, Article, CreativeWork on every page
- [ ] 20260427-001 Adaptive home — referrer-aware reshuffle (v1.5) — see [_tasks/20260427-001-adaptive-home-referrer-reshuffle.md](_tasks/20260427-001-adaptive-home-referrer-reshuffle.md)
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit
- [ ] Content pruning workshop — narrative arc review

## Done

- [x] 20260426-000 Scaffold canopy project directory + Astro base
