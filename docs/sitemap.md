---
title: Sitemap — canopy
type: reference
created: 2026-04-27
last-updated: 2026-04-27
---

# Sitemap — canopy

Information architecture for dalerogers.com.au. All routing decisions from IA interview (Rounds 1–5, 2026-04-26 to 2026-04-27).

---

## Route map

### Top-level (permanent URL schema)

```
/                    Home page
/work                Case study listing (with category/tag filter UI)
/work/[slug]         Individual case study detail
/writing             Articles listing (featured strip + chronological)
/writing/[slug]      Individual article detail
/about               About Dale — philosophy, methods, contact
/labs                Indie hacker projects (artefacts + reflection)
/labs/[slug]         Individual lab project detail
/topic/[tag]         Tag pillar page (aggregates work + writing + labs)
/now                 "What I'm doing now" — status page
/cv                  Formal CV / résumé (PDF download)
```

### Footer / Legal

```
/contact             Contact form + email + social links
/privacy             Privacy notice / data handling
/terms               Terms of service
/colophon            Build notes, stack, credits
/accessibility       Accessibility statement (WCAG conformance)
```

### Auxiliary (generated, no hand-edit needed)

```
/sitemap.xml         Auto-generated Astro sitemap
/robots.txt          Standard robots.txt (allow all)
/llms.txt            Site summary for AI crawlers (AEO/GEO foundation)
/feed.xml            RSS/Atom feed for articles
```

### Error

```
/404                 Custom branded error page
```

---

## Structure by section

### `/` — Home

**Purpose:** Warm clients arriving from sales pitch or LinkedIn confirm fit.

**Blocks (top to bottom):**

1. **Hero** — declarative one-liner (pick from notes candidates). No marketing copy. Name, role, location. Calm, identity-confirming.
2. **Selected work** — 3 case studies, most representative of practice (not most recent). Curated, may be adaptive on referrer (v1.5 feature). Tag chips inline on each card.
3. **Recent thinking** — thin strip, 2–3 latest articles (or 2–3 featured). Each with title, date, tag chips. Link to `/writing`.
4. **Footer** — global footer (see Footer section below).

**Responsiveness:** mobile-first; selected work and recent thinking stack vertically.

**AEO considerations:** Person schema at top, OpenGraph for home preview, internal links to all main sections.

---

### `/work` — Case study listing

**Purpose:** Browse case studies by domain fit (warm clients); filter by method/discipline (peers).

**Layout:**

1. **Header** — "Selected work" with brief description.
2. **Category filter** (optional UI) — four toggles: `government` · `regulated-industry` · `industrial` · `enterprise`. Single-select. Applies a client-lens (adaptive home uses same logic).
3. **Case study cards** — curated order (not chronological; reflects Dale's narrative). Each card shows:
   - Title
   - Client/sector
   - Year(s)
   - 1–2 line summary
   - Category badge + tag chips
   - Featured image placeholder

4. **Footer** — global footer.

**Interaction:**
- Clicking a tag navigates to `/topic/[tag]`.
- Clicking category reorders cards (client filter).
- No pagination; all ~15 pieces visible (or load-more if needed).

**AEO:** CollectionPage schema, internal links to each detail page and tag pillars.

---

### `/work/[slug]` — Case study detail

**Purpose:** Deep read for peers; proof of expertise for warm clients on a second visit.

**Header block:**

```
Title
Client/sector · Years · Role · Collaborators
Engagement-state badge: Shipped | Active | Pivoted | Ongoing
```

**Body blocks (flexible order based on story):**

1. **The situation** — 1–2 paragraphs of context. What was at stake?
2. **What I did** — methods, decisions, approach. Links to relevant tags → `/topic/[tag]`.
3. **What shipped** — the artefact, framework, decision, doctrine. *Not metrics* (you're gone before delivery). Signal of impact (adoption, usage, stakeholder quote).
4. **Reflection** — honest retrospective. What worked? What would you do differently? *Signals seniority.*
5. **Pull-quote** *(optional)* — stakeholder or self, if it lands hard. Use sparingly.

**Sidebar / inline:**

- Tag chips — each is a link to `/topic/[tag]`.
- Related case studies — sidebar showing 2–3 other pieces sharing a tag.
- Next in walkthrough *(optional)* — "Next case study in series →" manual link (curated by Dale for F2F walkthrough mode).

**NDA discipline:** Write at method/shape level, not content. "I designed the verification framework for a federal border programme" rather than redacted specifics.

**Footer block:**

```
← Back to /work
Tags: [tag chips]
Next in series → [optional manual link to next case study]
```

**AEO:** Article + Person schema, internal links to tag pillars and related work, clear author attribution.

---

### `/writing` — Articles listing

**Purpose:** Signal live thinking; establish topical authority; cluster content for AEO.

**Layout:**

1. **Header** — "Thinking" or "Writing" or "Essays". Brief description.
2. **Featured strip** — 3–4 curated articles (marked `featured: true` in frontmatter). Small cards, visible above the fold. Ideal for cornerstone pieces or evergreen content.
3. **Chronological list** — all articles, newest first. Each shows:
   - Title
   - Publish date
   - Reading time (auto-calculated)
   - 1–2 line summary
   - Tag chips

4. **Tag filter** *(optional UI)* — same as `/work`, allows filtering by tag.

**Footer** — global footer.

**AEO:** CollectionPage schema, internal links to all pieces, structured data for publication dates.

---

### `/writing/[slug]` — Article detail

**Purpose:** Establish Dale as a knowledge authority; cluster with related work/labs via tags.

**Header:**

```
Title
Published date · Reading time · Author: Dale Rogers
Tags: [tag chips, each links to /topic/[tag]]
```

**Body:** Markdown article. Links to:
- Related case studies (tag-based) at bottom: "Where I took this further in practice →"
- Related articles (tag-based)

**Sidebar / footer:**

- Related content — 2–3 case studies + 2–3 labs sharing a tag.
- Editorial note *(if applicable)* — positioned at top of article body if the position has shifted. Format: *"2026 note: This reflects my 2018 thinking. Here's what's changed: [link to newer piece or related tag]."*
- Next article *(optional)* — manual "next in series" link if Dale has curated a reading order.

**AEO:** Article schema with datePublished, dateModified (if edited), author Person schema, internal links to case studies and tag pillars for cluster authority.

---

### `/labs` — Indie hacker projects

**Purpose:** Demonstrate the learning engine; show prototype-first thinking; prove vibecoding capability.

**Layout:**

1. **Header** — "Labs" or "Experiments". "Where I explore, play, and learn."
2. **Project cards** — chronological. Each shows:
   - Project title
   - Date shipped
   - 1–2 line description
   - Screenshot/demo link
   - Tag chips
   - "Read about this →" link to companion article (if exists)

3. **Footer** — global footer.

**AEO:** CollectionPage schema, links to each detail page and companion articles.

---

### `/labs/[slug]` — Lab project detail

**Purpose:** Living proof of learning; entry point for the artefact + reflection loop.

**Header:**

```
Project title
Date shipped · Tech stack · Link to live demo / GitHub / deployed app
Tags: [chips, each links to /topic/[tag]]
```

**Body blocks:**

1. **What I built** — the artefact. Screenshot, embed, or link. 1–2 sentences on the "why I built this."
2. **What I learned** — reflection on the learning. Skills gained, surprises, direction it sent the thinking.
3. **How it influenced my practice** — connection to consulting work (optional). "This OSINT work informed how I think about data-driven verification in regulatory contexts."

**Sidebar:**

- Companion article link: "Read the full reflection →" (links to `/writing/[slug]` if it exists).
- Related labs (tag-based).
- Related case studies (tag-based).

**Footer block:**

```
Tags: [chips]
Read the reflection → /writing/[slug-for-reflection-article]
```

**AEO:** CreativeWork schema (for the project itself), links to companion article and tag pillars.

---

### `/topic/[tag]` — Tag pillar page

**Purpose:** Topic cluster hub; establishes topical authority for AEO; cross-links work/writing/labs.

**Header:**

```
Tag name (e.g., "Regulatory service design")
Brief description (once pillar has 5+ pieces)
```

**Content blocks (if pillar has 5+ items):**

1. **Pillar intro** — 200–300 word overview of the topic, Dale's take, why it matters. Written once, lives here.
2. **Case studies** — all work tagged with this; chronological, newest first.
3. **Articles** — all writing tagged with this; chronological, newest first.
4. **Labs** — all projects tagged with this; chronological, newest first.

**Early pillars (1–4 pieces):** no intro paragraph needed yet; just the list.

**Internal cross-linking:** each case study / article / lab links back to its tag pillar(s).

**AEO:** CollectionPage or Topic schema; hub-and-spoke internal linking creates topical authority signals.

---

### `/about` — About Dale

**Purpose:** Philosophy, worldview, methods, contact. The "why you should work with this person" page.

**Layout (hybrid narrative + structural):**

1. **Narrative intro** — 2–3 paragraphs weaving mining → Holden → quality systems → service design → AI era. Origin, worldview, through-line.

2. **Operating values** — visual or grid format. Six values from notes (Collaboration, Push further, Good to work with, Details matter, Only the brightest, Always get it done). Each with a 1–2 line explanation.

3. **The quality framework** — Verification vs Validation, with a concrete example (Agriculture/biosecurity FPP work). Frame as the antidote to speed-without-reflection.

4. **Indie hacker thread** — 1–2 paragraphs on OSINT, rock oracle, how play and learning feed practice. Link to `/labs`.

5. **Contact block** — email link (hello@dalerogers.com.au) + LinkedIn + links to GitHub/social if applicable.

6. **AI risk position** *(optional, emerging as pillar)* — 1–2 sentences on defence-in-depth, DCCEEW AI Advisory Panel role. Link to relevant articles if written.

**Sidebar / end:**
- Link to `/work` ("See recent work").
- Link to `/topic/critical-control-thinking` or other signature tags.

**AEO:** Person schema (name, role, contact), internal links to all major sections.

---

### `/contact` — Contact

**Purpose:** Lightweight dedicated contact point. Primary CTA for recruiters, clients, press.

**Layout:**
1. **Email** — `hello@dalerogers.com.au` (mailto link, obfuscated if needed).
2. **Social** — LinkedIn, GitHub, Twitter/X (if active).
3. **Form** *(optional, v1.1)* — Netlify/Vercel form or Tally embed. Fields: name, email, message.
4. **Availability** — brief "Open to advising / contracting" status line.

**AEO:** Person schema with contactPoint.

---

### `/privacy` — Privacy notice

**Purpose:** Compliance baseline; required for contact form, analytics, and AI-crawler signalling.

**Layout:**
1. **What data is collected** — analytics (Plausible or Fathom, privacy-first), contact form submissions.
2. **How it is used** — no third-party sale, no tracking beyond anonymous visit counts.
3. **Cookies** — statement that none are used (if true) or list essential-only cookies.
4. **Contact** — link to `/contact` for privacy questions.

**AEO:** Legal/service schema not needed; plain HTML is fine.

---

### `/terms` — Terms of service

**Purpose:** Protects IP (case studies, articles, labs); sets boundaries for content reuse.

**Layout:**
1. **Copyright** — all content © Dale Rogers unless otherwise stated.
2. **Permitted use** — personal reading, sharing with attribution.
3. **Prohibited use** — scraping for LLM training without permission, republication without consent.
4. **Disclaimer** — views are personal, not employer/sponsor.

**AEO:** Plain HTML.

---

### `/colophon` — Colophon

**Purpose:** Indie-hacker credibility; transparency about tooling and build process.

**Layout:**
1. **Stack** — Astro, Tailwind CSS, TypeScript.
2. **Hosting** — Azure Static Web Apps.
3. **Typography** — font names and why they were chosen.
4. **Tools** — Figma (design), GitHub (source), Claude Code (build assist).
5. **Credits** — any open-source dependencies or assets requiring attribution.
6. **Version** — last deployed date / commit hash (auto-generated during build).

**AEO:** Plain HTML; CreativeWork schema if you want to get fancy.

---

### `/accessibility` — Accessibility statement

**Purpose:** Compliance and trust signal for government/regulated-industry clients. Demonstrates inclusive design practice.

**Layout:**
1. **Conformance claim** — target level (WCAG 2.1 AA), assessment date.
2. **Measures taken** — semantic HTML, keyboard navigation, colour contrast, alt text discipline.
3. **Known limitations** — honest callouts (e.g., "Some lab demos use third-party embeds outside my control").
4. **Feedback** — link to `/contact` for accessibility issues.

**AEO:** Plain HTML.

---

### `/now` — What I'm doing now

**Purpose:** Indie-web convention; signals active practice and current focus. Updated monthly or when context shifts.

**Layout:**
1. **Current engagement** — one-line status: "Advising DCCEEW on AI risk framework" or "Open to new projects".
2. **Reading / learning** — 2–3 things currently being explored.
3. **Side projects** — brief note on active lab work.
4. **Last updated** — timestamp.

**AEO:** Plain HTML; WebPage schema with dateModified.

---

### `/cv` — CV / Résumé

**Purpose:** Formal credential document for procurement panels, recruiters, and LinkedIn complement. Distinct from the narrative `/about`.

**Layout:**
1. **PDF download** — primary CTA. Clean, print-ready PDF generated from Markdown or Figma.
2. **HTML summary** — condensed version on the page for SEO: roles, sectors, key skills, certifications.
3. **Download CTA** — "Download PDF" button.

**AEO:** Person schema with hasCredential, workExperience.

---

### `/404` — Error page

**Purpose:** Branded fallback when a route doesn't exist. Keeps users in the site experience.

**Layout:**
1. **Friendly message** — "That page doesn't exist."
2. **Navigation aid** — links to `/work`, `/writing`, `/about`.
3. **Search** *(optional, v1.2)* — site search input.
4. **Brand tone** — calm, not apologetic. Matches site voice.

**AEO:** None.

---

## Global elements

### Top navigation

**Routes visible:** `/` · `/work` · `/writing` · `/about` · `/labs`

**Layout:** horizontal nav bar (desktop) or hamburger menu (mobile). Active route highlighted.

**Styling:** minimal, respects brand. Font from headline family.

---

### Footer

**Blocks:**

1. **Contact** — email link (hello@dalerogers.com.au), brief "open to work" or "advising on X" note.
2. **Social** — LinkedIn, GitHub (if applicable), Twitter/X (if active).
3. **Copyright** — © 2026 Dale Rogers. All rights reserved. Links to [`/terms`](terms), [`/privacy`](privacy), and [`/accessibility`](accessibility).
4. **Colophon** — "Built with Astro + Tailwind. Deployed to Azure Static Web Apps." Links to [`/colophon`](colophon).

**Styling:** minimal, matches top nav visual language.

---

## Cross-linking strategy

**Hub model:** Tag pillars (`/topic/[tag]`) are the cluster hubs.

**Spokes:**
- Each case study links to all its tags → `/topic/[tag]`.
- Each article links to all its tags → `/topic/[tag]`.
- Each lab project links to all its tags → `/topic/[tag]`.

**Reverse cross-links:**
- Each case study shows "where I wrote about this" → `/writing/[related-by-tag]`.
- Each article shows "where I took this further in practice" → `/work/[related-by-tag]`.
- Each lab shows "read the reflection" → `/writing/[companion-article]`.

**Optional walkthrough links:**
- End of `/work/[slug]`: "Next in series →" (manual, curated by Dale for F2F walkthrough mode).
- End of `/writing/[slug]`: "Next in series →" (manual, optional).

---

## Content metadata & frontmatter

### Case studies (`src/content/work/[slug].md`)

```yaml
---
title: Project name
client: Client name
sector: government | regulated-industry | industrial | enterprise
years: 2020–2021
role: Service designer / lead
collaborators: Name, Name
engagement-state: shipped | active | pivoted | ongoing
tags: [tag1, tag2, tag3]
featured: true | false
image: /images/work/slug.jpg
---
```

### Articles (`src/content/writing/[slug].md`)

```yaml
---
title: Article title
published: 2026-04-20
updated: 2026-04-27 (if edited)
author: Dale Rogers
tags: [tag1, tag2]
featured: true | false
reading-time: 5 (auto-calculated, optional)
---
```

### Labs (`src/content/labs/[slug].md`)

```yaml
---
title: Project name
shipped: 2026-04-15
tech: Python, React, Figma, etc.
demo-url: https://link-to-live
github-url: https://github.com/...
tags: [tag1, tag2]
reflection-article: /writing/[slug] (optional link to companion)
---
```

---

## Design system integration

- **Tokens:** all colour, spacing, type from `src/theme/` (via token pipeline) — no hardcoded values.
- **Components:** ContentCard, ArticleCard, LabCard, TagChip, Badge (engagement-state), RelatedContent (sidebar).
- **Responsive:** mobile-first. Stacked on small viewports, grid/flexbox on desktop.
- **Brand graphic:** procedural asset system future-proofed at `/public/assets/` (spike in progress; not v1).

---

## AEO/SEO foundations

- **`llms.txt`** at site root — machine-readable site summary.
- **Schema.org markup** on every page:
  - Person (Dale Rogers profile, on home and `/about`)
  - Article (on `/writing/[slug]`)
  - CollectionPage (on `/work`, `/writing`, `/labs`, `/topic/[tag]`)
  - CreativeWork (on `/labs/[slug]`)
- **Internal linking:** every entry cross-links via tags to `/topic/[tag]` hubs. This reinforces topical authority for both search engines and generative AI.
- **Structured frontmatter:** clean Markdown frontmatter + canonical metadata enables programmatic schema generation.

---

## Deployment & monitoring

- **Build:** Astro static site generation. Target < 30s build time.
- **Hosting:** Azure Static Web Apps (free tier).
- **Domain:** dalerogers.com.au (custom domain wired to SWA).
- **CI/CD:** GitHub Actions → Azure SWA (auto-deploy on push).
- **Monitoring:** Lighthouse score ≥ 90 (perf + a11y + SEO), zero broken links (via link-checker action).

---

## Future considerations (v1.5+)

- **Adaptive home** — referrer-aware case study re-ordering (client-side or via SWA function).
- **"Ask my portfolio" chat** — RAG over public content, guardrailed, links back to source pages.
- **Topic pillar intro paragraphs** — write once per tag as it reaches 5+ pieces.
- **Procedural brand graphic** — animated/generative system for hero and section headers.
- **Related content ML** — as content scale grows, consider richer cross-linking via content similarity.
- **`/newsletter`** — email subscription / "get notified" if Dale starts a mailing list.
- **`/search`** — site-wide search (Pagefind or Algolia) once content volume justifies it.

---

## Sources

- IA interview Rounds 1–5 (2026-04-26 to 2026-04-27)
- [docs/tag-taxonomy.md](tag-taxonomy.md) — canonical tag pool (18 tags)
- [docs/content-guidelines.md](content-guidelines.md) — Round 4 operational decisions
- SEO research: AEO/GEO, topic clusters, schema.org
