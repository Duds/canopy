# canopy — High-Level Design

> Status: stub — expand as design matures  
> Last updated: 2026-04-26

## Architecture overview

```
┌─────────────────────────────────────────────────────┐
│  Author (local)                                     │
│  ├── src/content/work/*.md     (case studies)       │
│  ├── src/content/writing/*.md  (articles)           │
│  └── src/pages/**/*.astro      (templates)          │
└──────────────────┬──────────────────────────────────┘
                   │ git push
┌──────────────────▼──────────────────────────────────┐
│  GitHub                                             │
│  └── GitHub Actions → npm run build → dist/        │
└──────────────────┬──────────────────────────────────┘
                   │ deploy artifact
┌──────────────────▼──────────────────────────────────┐
│  Azure Static Web Apps (free tier)                  │
│  └── dalerogers.com.au                              │
└─────────────────────────────────────────────────────┘
```

## Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Astro 5.x | Static output, Content Collections |
| Styling | Tailwind CSS 4.x | Utility-first, token layer via CSS vars |
| Content | Markdown + YAML frontmatter | Flat-file, no DB |
| Build | Vite (via Astro) | |
| Hosting | Azure Static Web Apps | Free tier, custom domain + SSL |
| CI/CD | GitHub Actions | Astro's official Azure SWA action |

## Content model

### Work (case studies)

```
src/content/work/[slug].md
```

Frontmatter:
```yaml
title:     string
slug:      string        # permanent — maps to /work/[slug]
client:    string
category:  string        # one of 3-5 categories
tags:      string[]      # subset of 12-15 tag pool
status:    published | draft
date:      YYYY-MM-DD
summary:   string        # one sentence
cover:     string?       # /assets/images/[slug]-cover.jpg (optional)
```

### Writing (articles)

```
src/content/writing/[slug].md
```

Frontmatter:
```yaml
title:    string
slug:     string         # permanent — maps to /writing/[slug]
tags:     string[]
status:   published | draft
date:     YYYY-MM-DD
summary:  string
```

## Design token layer

Tokens defined in `src/styles/tokens.css` as CSS custom properties.
Tailwind config references these tokens — brand rebrand = update tokens only.

Asset seam: `/public/assets/images/` — procedural brand graphics drop in here with no template changes.

## Routing

Astro file-based routing:

```
src/pages/
├── index.astro           → /
├── about.astro           → /about
├── work/
│   ├── index.astro       → /work
│   └── [slug].astro      → /work/[slug]
└── writing/
    ├── index.astro       → /writing
    └── [slug].astro      → /writing/[slug]
```

## Deployment pipeline

1. Push to `main` on GitHub
2. GitHub Actions runs `npm run build`
3. Built `dist/` artifact deployed to Azure Static Web Apps
4. Custom domain `dalerogers.com.au` resolves via Azure DNS / CNAME

## Azure resource decisions

| Resource | Tier | Monthly cost | Notes |
|---|---|---|---|
| Static Web Apps | Free | $0 | 100 GB BW, custom domain, SSL |
| PostgreSQL | — | $0 | Not needed — flat-file content |

## Future seams

- **Procedural brand graphics**: drop replacement assets into `/public/assets/images/`; no template changes needed
- **Server-side features** (contact form, search): Azure Functions available on SWA free tier (1M invocations/month)
- **Content volume growth**: Astro Content Collections scale to thousands of files; no architecture change needed
