# GRWSURE INFOTECH website

A multi-page Next.js redesign of [grwsureinfotech.in](https://www.grwsureinfotech.in/), built from the current site's content and expanded into dedicated service, industry, solution-blueprint, process, company, team, FAQ, insight, contact, privacy, and terms pages.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

## Theme and motion

- The header includes an accessible light/dark mode toggle. The first visit follows the operating-system preference, and an explicit choice is saved locally under `grwsure-theme`.
- A small pre-hydration script applies the resolved theme before the page paints, avoiding a light-theme flash for dark-mode visitors. Hydration suppression is scoped to the root element and that script, so the intentional theme change and an extension-mutated bootstrap node do not raise false application errors while mismatches elsewhere remain visible.
- Viewport reveals use [Motion](https://motion.dev/) through its lightweight `motion/mini` entry point. Animations are limited to compositor-friendly opacity and transform changes, run only once, and do not delay the primary hero copy.
- Visitors who enable reduced motion get fully visible content with JavaScript-driven reveals disabled.

## Illustrations

- The homepage hero and direct-answer section use bright, story-led SVG scenes; the Insights listing and article pages reuse three supporting editorial illustrations.
- All five SVGs are self-hosted, individually capped below 25 KB, and rendered on light illustration canvases in both themes.
- Story steps and cards reveal once on entry with a very small pointer-hover lift; no continuous animation or extra client-side animation code is used.
- Asset sources, license terms, integrity hashes, accessibility choices, and security checks are recorded in [`docs/illustrations.md`](docs/illustrations.md).

## Content and trust boundaries

- The three showcase items are labelled **solution blueprints** because the current website does not identify clients or provide evidence that they are published case studies.
- Unverified metrics and compliance claims from the current site are intentionally excluded.
- The contact form prepares a WhatsApp message and lets the visitor review it before sending. It does not submit data to a website backend.
- The privacy policy and website terms are clearly labelled drafts and need legal review before production publication.
- Only a country-level location is published because no city or street address was available on the current website.

## SEO, AEO, and generative discovery

- Unique route metadata, canonical URLs, Open Graph/Twitter image, semantic headings, and server-rendered content.
- Organization, WebSite, Service, FAQPage, BreadcrumbList, HowTo, CollectionPage, and TechArticle structured data where the visible page supports it.
- `robots.txt`, a user-facing `/sitemap`, `sitemap.xml`, web manifest, 404 page, and a factual `llms.txt` discovery aid.
- Answer-first copy, visible FAQs that match schema, descriptive internal links, industry topic clusters, and concise solution definitions.

## GitHub Pages deployment

- `.github/workflows/nextjs.yml` builds and uploads the generated `out/` directory whenever `main` is pushed.
- GitHub's Pages setup injects the static-export and repository base-path settings. Generated metadata routes are explicitly marked static so they do not require a Next.js server at runtime.
- Canonical, robots, sitemap, and structured-data URLs use `site.url`; confirm the custom domain before treating a Pages deployment as production.

## Before production deployment

1. Confirm the production hostname (`www` vs apex) and redirect the alternate host.
2. Verify company identity, team details, email, WhatsApp number, operating hours, and brand relationship language.
3. Replace legal drafts after counsel review.
4. Add verified social and portfolio URLs only when their exact destinations are available.
5. Add analytics, consent, CRM, or backend form integrations only after privacy and operational ownership are defined.
6. Add named case studies, outcomes, reviews, certifications, and office/service-area details only with evidence and approval.
