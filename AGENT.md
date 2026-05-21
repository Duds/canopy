---
status: active
type: code
started: 2026-04-26
last-updated: 2026-04-26
---

# canopy

Dale Rogers personal portfolio — showcasing service design, strategy, and indie hacker work to clients and employers.

## Stack

- **Framework**: Astro 5.x (static-first, Content Collections)
- **Styling**: Tailwind CSS + CSS design tokens
- **Content**: Markdown + YAML frontmatter (flat-file, no DB)
- **Hosting**: Azure Static Web Apps (free tier)
- **Domain**: dalerogers.com.au

## URL schema (permanent — do not change after first publish)

| Route | Purpose |
|---|---|
| `/` | Home |
| `/work` | Case study listing |
| `/work/[slug]` | Case study detail |
| `/writing` | Articles listing |
| `/writing/[slug]` | Article detail |
| `/about` | About |

## Content model

- `src/content/work/` — case studies (15 target, currently stubs)
- `src/content/writing/` — articles (15-20 target, currently stubs)
- See `_example.md` in each directory for frontmatter schema

## Dev workflow

```bash
npm install
npm run dev        # localhost:4321
npm run build      # static output to dist/
npm run preview    # preview built output
```

## Architecture docs

- [PRD.md](PRD.md) — product requirements
- [HLD.md](HLD.md) — high-level design + deployment pipeline
