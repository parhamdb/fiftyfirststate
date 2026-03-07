# Iran51 Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build and deploy a bilingual (EN/FA) advocacy website for Iran51 on Cloudflare Pages.

**Architecture:** Astro 5 static site with Tailwind CSS v4, built-in i18n routing for `/en/` and `/fa/`, content collections for research articles, deployed to Cloudflare Pages via wrangler. Self-hosted Inter and Vazirmatn fonts. RTL support via CSS logical properties.

**Tech Stack:** Astro 5, Tailwind CSS v4, @astrojs/cloudflare, @fontsource/inter, @fontsource/vazirmatn, wrangler CLI

---

### Task 1: Scaffold Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/pages/index.astro`
- Create: `.gitignore`

**Step 1: Initialize Astro project**

Run from `/home/parham/develop/src/parhamdb/fiftyfirststate`:

```bash
npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict
```

If prompted about existing files, allow overwrite of package.json (the content/ dir will be preserved).

**Step 2: Install dependencies**

```bash
npm install @astrojs/cloudflare @astrojs/tailwind tailwindcss @fontsource/inter
npm install -D wrangler
```

For Vazirmatn, check npm availability:
```bash
npm install @fontsource-variable/vazirmatn || npm install @fontsource/vazirmatn
```

**Step 3: Configure Astro**

Replace `astro.config.mjs` with:

```javascript
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://iran51.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [tailwindcss()],
});
```

**Step 4: Add .gitignore entries**

Append to `.gitignore`:
```
node_modules/
dist/
.astro/
.wrangler/
```

**Step 5: Verify it builds**

```bash
npx astro build
```

Expected: Build succeeds with a dist/ directory.

**Step 6: Commit**

```bash
git add -A && git commit -m "feat: scaffold Astro project with i18n and Tailwind"
```

---

### Task 2: Tailwind Config and Global Styles

**Files:**
- Create: `src/styles/global.css`

**Step 1: Create global stylesheet**

```css
@import 'tailwindcss';
@import '@fontsource/inter/400.css';
@import '@fontsource/inter/600.css';
@import '@fontsource/inter/700.css';
@import '@fontsource/inter/900.css';

@theme {
  --color-navy: #1B2A4A;
  --color-navy-light: #2A3F6A;
  --color-gold: #C9A84C;
  --color-gold-light: #D4BC72;
  --color-gray-bg: #F5F5F5;
  --color-gray-text: #6B7280;
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-family-farsi: 'Vazirmatn', 'Inter', system-ui, sans-serif;
}
```

**Step 2: Commit**

```bash
git add src/styles/global.css && git commit -m "feat: add global styles with color palette and fonts"
```

---

### Task 3: Base Layout Component

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `src/components/LanguageSwitcher.astro`

**Step 1: Create BaseLayout**

```astro
---
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
  lang?: 'en' | 'fa';
}

const { title, description = 'Advocating Iran\'s admission as the 51st U.S. state', lang = 'en' } = Astro.props;
const dir = lang === 'fa' ? 'rtl' : 'ltr';
const fontClass = lang === 'fa' ? 'font-farsi' : 'font-sans';
---

<!doctype html>
<html lang={lang} dir={dir} class={fontClass}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <title>{title} | Iran51</title>
    {lang === 'fa' && (
      <style>
        @import '@fontsource-variable/vazirmatn';
      </style>
    )}
  </head>
  <body class="bg-white text-navy min-h-screen flex flex-col">
    <slot name="header">
      <Header lang={lang} />
    </slot>
    <main class="flex-1">
      <slot />
    </main>
    <Footer lang={lang} />
  </body>
</html>
```

Note: Import Header and Footer at top of frontmatter. Vazirmatn import approach may need adjustment based on actual package -- test and adapt.

**Step 2: Create Header with navigation and language switcher**

The Header should include:
- Logo/wordmark "IRAN 51" on the start side
- Navigation links (Why Iran, The Process, Our History, Research, About) for English
- Navigation links (Your Rights, Issues Today, The Process) for Farsi
- LanguageSwitcher component on the end side
- Responsive: hamburger menu on mobile
- Sticky top, white background with navy text, subtle bottom border

**Step 3: Create Footer**

Simple footer with:
- "Iran51" wordmark
- Copyright line
- Links to social handles (placeholder hrefs for now)

**Step 4: Create LanguageSwitcher**

A simple link that switches between `/en/` and `/fa/` versions of the current page. Maps known routes:
- `/en/` <-> `/fa/`
- `/en/the-process/` <-> `/fa/the-process/`
- All other English pages link to `/fa/`
- All other Farsi pages link to `/en/`

**Step 5: Verify layout renders**

Update `src/pages/index.astro` to use BaseLayout and confirm it renders.

```bash
npx astro dev
```

Visit http://localhost:4321 and confirm header, footer, and language switcher appear.

**Step 6: Commit**

```bash
git add src/layouts/ src/components/ src/pages/index.astro && git commit -m "feat: add base layout with header, footer, and language switcher"
```

---

### Task 4: English Homepage

**Files:**
- Create: `src/pages/en/index.astro`
- Create: `src/components/StatCard.astro`
- Create: `src/components/HeroSection.astro`

**Step 1: Create StatCard component**

A reusable card that displays:
- A large hero number (e.g. "208.6B")
- A unit/label (e.g. "barrels of oil")
- A one-sentence explanation
- Navy background with white text, or white background with navy text (variant prop)

**Step 2: Create HeroSection component**

- Full-width navy background
- Large headline: "The 51st State"
- Subtitle: "The case for Iran joining the United States of America"
- Clean, centered, authoritative

**Step 3: Create English homepage**

Uses BaseLayout with lang="en". Sections:
1. HeroSection
2. Grid of 6 StatCards with top arguments:
   - 208.6B barrels of oil (3rd largest reserves)
   - $27.3T in natural resources
   - $20-50B/year in military savings
   - 335,000 STEM graduates per year
   - 90M new citizens and consumers
   - 29 UNESCO World Heritage sites
3. Brief "Why Now?" section with timing argument (3-4 sentences)
4. Links to Why Iran, The Process, Our History pages

**Step 4: Verify**

```bash
npx astro dev
```

Visit http://localhost:4321/en/ and confirm the page renders with all sections.

**Step 5: Commit**

```bash
git add src/pages/en/ src/components/StatCard.astro src/components/HeroSection.astro && git commit -m "feat: add English homepage with hero and stat cards"
```

---

### Task 5: Farsi Homepage

**Files:**
- Create: `src/pages/fa/index.astro`

**Step 1: Create Farsi homepage**

Uses BaseLayout with lang="fa". Sections:
1. HeroSection variant with Farsi text:
   - Headline: "قانون اساسی از آن شماست" (The Constitution Is Yours)
   - Subtitle in Farsi about rights and freedom
2. Grid of StatCards with rights-focused stats:
   - 2,228+ executions in 2025
   - 48% inflation
   - Death penalty for changing religion
   - Women's testimony = half a man's
   - Internet freedom score: 2/100
   - 6M vacant homes while millions homeless
3. Section: "What the US Constitution guarantees" -- brief list
4. Links to Your Rights, Issues Today, The Process

All text in Farsi. The page should render RTL correctly.

**Step 2: Verify RTL rendering**

```bash
npx astro dev
```

Visit http://localhost:4321/fa/ and confirm:
- Text flows right-to-left
- Navigation is mirrored
- Vazirmatn font loads
- Cards lay out correctly in RTL

**Step 3: Commit**

```bash
git add src/pages/fa/ && git commit -m "feat: add Farsi homepage with RTL support"
```

---

### Task 6: Research Content Collection

**Files:**
- Create: `src/content.config.ts`
- Move: `content/research/*.md` -> `src/content/research/*.md`
- Create: `src/pages/en/research/index.astro`
- Create: `src/pages/en/research/[slug].astro`

**Step 1: Define content collection**

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { research };
```

**Step 2: Move research files**

```bash
mkdir -p src/content/research
mv content/research/*.md src/content/research/
```

The existing markdown files don't have frontmatter. Add a simple title frontmatter to each file (extract from the `# ` heading). Or handle this in the collection by making title optional and extracting from content.

**Step 3: Create research index page**

Lists all research articles with title and a one-line summary. Links to individual pages. Sorted by filename (which is already numbered 00-16).

**Step 4: Create research article page**

Dynamic route `[slug].astro` that renders a single research markdown file. Uses BaseLayout with a clean article typography style (prose classes).

**Step 5: Verify**

```bash
npx astro dev
```

Visit http://localhost:4321/en/research/ -- should list all 16 articles.
Visit http://localhost:4321/en/research/03-economic-value/ -- should render the markdown.

**Step 6: Commit**

```bash
git add src/content/ src/pages/en/research/ && git commit -m "feat: add research content collection and article pages"
```

---

### Task 7: English Content Pages

**Files:**
- Create: `src/pages/en/why-iran.astro`
- Create: `src/pages/en/the-process.astro`
- Create: `src/pages/en/our-history.astro`
- Create: `src/pages/en/about.astro`

**Step 1: Create Why Iran page**

Polished page drawing from research files 03, 09, 14, 16. Sections:
- Energy & Resources (oil, gas, minerals)
- Military Savings ($20-50B/year)
- Strategic Position (map description, borders, Strait of Hormuz)
- STEM Talent & Innovation
- Market Expansion
- Nuclear Solution
Each section uses StatCard-style hero numbers with explanatory text.

**Step 2: Create The Process page**

Drawing from research files 01, 10. Sections:
- Constitutional Basis (Article IV Section 3)
- The Texas Precedent (timeline)
- Three Possible Paths (direct/territory/COFA)
- What Changes (citizenship, federal law, governance)
Clean timeline or step-by-step visual layout.

**Step 3: Create Our History page**

Drawing from research files 05, 11, 12, 13. Sections:
- 100 Years of Friendship (1834-1953)
- Americans Who Died for Iran (Baskerville, Cochran)
- Cultural Connections (language, Zoroastrianism, Bible, Rumi)
- What Went Wrong (1953 coup, divergence)
- What Could Be (reconciliation through union)
Narrative, storytelling approach.

**Step 4: Create About page**

Simple page explaining:
- What Iran51 is
- The mission (one paragraph)
- Contact information (placeholder email)
- Disclaimer that this is an advocacy campaign

**Step 5: Verify all pages**

```bash
npx astro dev
```

Check each URL renders correctly with navigation working.

**Step 6: Commit**

```bash
git add src/pages/en/ && git commit -m "feat: add English content pages (Why Iran, Process, History, About)"
```

---

### Task 8: Farsi Content Pages

**Files:**
- Create: `src/pages/fa/your-rights.astro`
- Create: `src/pages/fa/issues-today.astro`
- Create: `src/pages/fa/the-process.astro`

**Step 1: Create Your Rights page**

The US Constitution explained in Farsi. Sections:
- First Amendment (speech, religion, press, assembly)
- Second Amendment (right to bear arms)
- Fourth Amendment (privacy, no unreasonable search)
- Fifth Amendment (due process, no self-incrimination)
- Fourteenth Amendment (equal protection)
- Nineteenth Amendment (women's suffrage)
Each amendment with a plain-language Farsi explanation of what it means for daily life.
Include comparison: "Under the Islamic Republic..." vs "Under the US Constitution..."

**Step 2: Create Issues Today page**

Drawing from research file 15. Present the key issues with data:
- Economic collapse (inflation, currency, poverty)
- Executions and political prisoners
- Women's rights
- Religious persecution
- Ethnic minority oppression
- Internet censorship
Use StatCards for the most impactful numbers.

**Step 3: Create The Process page (Farsi)**

Farsi version of the statehood process. Focus on:
- What citizenship means for you
- How the transition works
- What stays (language, culture, identity)
- What changes (rights, economy, freedom)

**Step 4: Verify RTL on all pages**

```bash
npx astro dev
```

Check each `/fa/` URL. Confirm text direction, font, layout all correct.

**Step 5: Commit**

```bash
git add src/pages/fa/ && git commit -m "feat: add Farsi content pages (Your Rights, Issues Today, The Process)"
```

---

### Task 9: Root Redirect and Meta

**Files:**
- Modify: `src/pages/index.astro`
- Create: `public/favicon.svg`
- Create: `public/_redirects`

**Step 1: Root redirect to /en/**

Update `src/pages/index.astro` to redirect to `/en/`:

```astro
---
return Astro.redirect('/en/');
---
```

**Step 2: Create favicon**

Simple SVG favicon -- "51" in navy on transparent background, or a minimal star motif.

**Step 3: Add OG meta tags to BaseLayout**

Add Open Graph and Twitter card meta tags to BaseLayout head:
- og:title, og:description, og:type, og:url, og:site_name
- twitter:card, twitter:title, twitter:description

**Step 4: Commit**

```bash
git add src/pages/index.astro public/ src/layouts/BaseLayout.astro && git commit -m "feat: add root redirect, favicon, and OG meta tags"
```

---

### Task 10: Deploy to Cloudflare Pages

**Files:**
- Create: `wrangler.toml`

**Step 1: Create wrangler config**

```toml
name = "iran51"
compatibility_date = "2026-03-07"

[site]
bucket = "./dist"
```

**Step 2: Build the site**

```bash
npx astro build
```

Expected: Clean build, dist/ directory with all pages.

**Step 3: Create Cloudflare Pages project and deploy**

```bash
wrangler pages project create iran51
wrangler pages deploy dist/
```

**Step 4: Add custom domains**

```bash
wrangler pages project add-domain iran51 iran51.com
wrangler pages project add-domain iran51 iran51.us
```

If CLI doesn't support domain commands, add via Cloudflare dashboard:
- Pages > iran51 > Custom domains > Add iran51.com and iran51.us

**Step 5: Verify live site**

Visit https://iran51.com and confirm:
- Redirects to /en/
- All English pages load
- All Farsi pages load with RTL
- Language switcher works
- HTTPS works
- iran51.us redirects to iran51.com (configure in Cloudflare DNS)

**Step 6: Commit**

```bash
git add wrangler.toml && git commit -m "feat: add Cloudflare Pages deploy config"
```

**Step 7: Push everything**

```bash
git push
```

---

### Task 11: iran51.us Redirect

**Step 1: Configure iran51.us redirect**

In Cloudflare DNS for iran51.us, add a page rule or redirect rule:
- From: `iran51.us/*`
- To: `https://iran51.com/$1`
- Type: 301 Permanent

This can be done via wrangler or Cloudflare dashboard. Use a Bulk Redirect rule:
```bash
# If CLI supports it, otherwise do via dashboard
```

**Step 2: Verify**

Visit http://iran51.us -- should 301 redirect to https://iran51.com.

---

## Summary

| Task | What | Commit |
|------|------|--------|
| 1 | Scaffold Astro + deps | `feat: scaffold Astro project with i18n and Tailwind` |
| 2 | Global styles + fonts | `feat: add global styles with color palette and fonts` |
| 3 | Layout + Header + Footer | `feat: add base layout with header, footer, and language switcher` |
| 4 | English homepage | `feat: add English homepage with hero and stat cards` |
| 5 | Farsi homepage | `feat: add Farsi homepage with RTL support` |
| 6 | Research collection | `feat: add research content collection and article pages` |
| 7 | English content pages | `feat: add English content pages` |
| 8 | Farsi content pages | `feat: add Farsi content pages` |
| 9 | Redirect + meta + favicon | `feat: add root redirect, favicon, and OG meta tags` |
| 10 | Deploy to Cloudflare | `feat: add Cloudflare Pages deploy config` |
| 11 | iran51.us redirect | Configure via Cloudflare |
