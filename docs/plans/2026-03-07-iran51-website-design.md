# Iran51 Website Design

## Overview

Bilingual advocacy website promoting Iran's admission as the 51st US state. English side focuses on strategic/economic benefits for Americans. Farsi side focuses on rights and issues facing Iranians. Infographic-heavy, data-driven, serious tone.

## Architecture

- **Framework**: Astro 5 static site with `@astrojs/cloudflare` adapter
- **Styling**: Tailwind CSS v4 with logical properties for automatic RTL
- **i18n**: Astro built-in i18n routing (`/en/...` and `/fa/...`)
- **Fonts**: Inter (English), Vazirmatn (Farsi), self-hosted via `@fontsource`
- **Deploy**: Cloudflare Pages via `wrangler pages deploy`
- **DNS**: iran51.com (primary), iran51.us (redirect), both on Cloudflare DNS

## Visual Design

- **Palette**: Navy (#1B2A4A), White (#FFFFFF), Gold (#C9A84C), Light gray (#F5F5F5)
- **Style**: Clean, authoritative, think-tank aesthetic. No flashy graphics.
- **Typography**: Large confident headings, clean body text, high contrast
- **Layout**: Max-width 1200px, generous whitespace, card-based argument sections
- **Infographic slots**: Hero stat number + supporting text per argument card
- **No images at launch** -- typography and data-driven design

## Site Map

```
/en/                    -> Homepage (hero + argument cards)
/en/why-iran/           -> Strategic & economic case
/en/the-process/        -> Legal path to statehood
/en/our-history/        -> US-Iran friendship history
/en/research/           -> Research library index
/en/research/[slug]/    -> Individual research articles
/en/about/              -> About the campaign

/fa/                    -> Homepage (rights-focused hero)
/fa/your-rights/        -> US Constitution explained
/fa/issues-today/       -> Current issues facing Iranians
/fa/the-process/        -> Legal path (Farsi)

/                       -> Redirects to /en/
```

## Content Strategy

- **English**: Pragmatic, strategic, data-driven. Speaks to American self-interest.
- **Farsi**: Aspirational, rights-focused, personal. Speaks to freedom and dignity.
- Two sides share brand and URL but tell fundamentally different stories.
- No CTA at launch -- let content establish credibility first.

## Content Pipeline

- Research markdown files in `content/research/` are the source of truth
- Polished pages (Why Iran, The Process, etc.) are handcrafted Astro pages pulling key stats
- `/en/research/` renders raw markdown files as browsable articles via Astro content collections

## RTL Handling

- `<html lang="fa" dir="rtl">` set automatically per locale
- Tailwind logical properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`)
- Vazirmatn font loaded only on Farsi pages
- Navigation and layout mirror automatically

## Farsi Content Focus

- Issues facing Iranians today (economic crisis, human rights, women's rights, religious persecution, ethnic minorities, LGBTQ+, internet censorship, corruption, etc.)
- US Constitution explained -- what each amendment means for Iranians
- Freedom of religion, separation of church and state, no national language
- Territorial integrity protected by US military -- no minority wants to leave
- Joining the global economy, US investment
- The process: how statehood works, phased citizenship

## English Content Focus

- Energy security (208.6B barrels oil, 1,201 TCF gas)
- National debt offset ($27.3T resources vs $38.5T debt)
- China competition (68 minerals, rare earths)
- Military savings ($20-50B/year)
- Market expansion (90M consumers)
- Drug prices (200+ generic pharma companies)
- STEM talent (335K graduates/year)
- Nuclear solution (permanent, no treaty needed)
- Strategic position (Caspian to Indian Ocean corridor)
- Cultural connections (369 English words from Persian, Bible, Rumi)
