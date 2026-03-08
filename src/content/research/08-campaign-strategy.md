---
title: "Campaign Launch Strategy"
---

# Campaign Launch Strategy

## Website Structure

### Essential Sections
1. **Homepage / Hero**: Bold mission statement, immediate CTA (sign petition, join movement)
2. **About / Mission**: The "why" -- vision statement, founding story, core arguments
3. **The Case**: Detailed pages -- economic arguments, human rights, cultural ties, geopolitical benefits
4. **Take Action**: Petition, email your representative, volunteer signup, share tools
5. **Stories**: Personal narratives from Iranian-Americans
6. **News / Blog**: Regular updates, op-ed reposts, campaign progress
7. **Events**: Meetups, virtual town halls
8. **Press / Media Kit**: Press releases, logos, spokesperson bios, fact sheets
9. **FAQ**: Counterarguments addressed head-on
10. **Donate**: If applicable (depends on legal structure)

### Bilingual (English + Farsi) Technical Requirements
- `<html lang="fa" dir="rtl">` for Farsi pages
- CSS Logical Properties: `margin-inline-start`, `padding-inline-end` instead of left/right
- Mirror directional UI elements (navigation, breadcrumbs, icons)
- Numbers remain LTR even in RTL context
- Farsi fonts render smaller -- increase by ~3 points vs English equivalent
- Use Vazirmatn or IranSans for Persian script
- Human translation for primary content (not machine translation)
- Persistent language toggle (English / فارسی)

### Mobile-First
- 68% of political website traffic is mobile
- Large, thumb-friendly CTAs
- Under 3-second load times
- Seamless mobile donation/petition forms

## Content Strategy

### Content Types by Effectiveness
1. **Personal Stories / Video Testimonials** (60-90 second videos) -- highest emotional impact
2. **Infographics / Data Visualization** -- shareable, compelling for the "case"
3. **Blog/Articles** (1,500-2,500 words) -- SEO and thought leadership
4. **Short-form Video** (15-60 sec) -- TikTok/Reels, quote cards, statistics
5. **User-Generated Content** -- supporters sharing their own stories

### Launch Content Plan
Develop **15-20 pieces** before launch:
- 3-5 explainer articles (legal path, economic case, cultural compatibility)
- 5-7 infographics (Iran vs US states comparisons, resource data, diaspora stats)
- 3-5 short videos (concept explainer, Iranian-American testimonials)
- 2-3 shareable social media assets per platform

## Social Media Strategy

### Platform Priority
1. **Instagram**: Visual storytelling, Reels, Stories. Strong with younger Iranian-Americans
2. **TikTok**: Highest organic reach. Short provocative clips can go viral
3. **X (Twitter)**: Political conversation hub. Essential for journalists and policymakers
4. **Facebook**: Community groups, event organizing, older demographics
5. **YouTube**: Long-form explainers, panel discussions, documentaries
6. **LinkedIn**: Professional credibility, Iranian-American professionals
7. **Telegram**: Critical for Iranian diaspora (widely used by Iranians)
8. **WhatsApp**: Community organizing

### Building Initial Following
- Seed content for 2-4 weeks before public launch
- Launch with a provocative, shareable piece designed to generate conversation
- Engage Iranian-American influencers before launch for coordinated amplification
- Tie content to breaking news about US-Iran relations
- Hyper-localize content for LA, DC, New York, Houston (high Iranian-American concentration)

## Legal Structure

### Recommended: Start Informal, Formalize as 501(c)(4)

**Phase 1 -- Informal Campaign**: Website + social media presence. No formal legal structure needed. Test messaging and build audience.

**Phase 2 -- 501(c)(4) Social Welfare Organization** (when traction develops):
- Can engage in political advocacy (must spend 50.1%+ on social welfare)
- Donors can remain anonymous
- No FEC registration required
- No limit on individual donations
- Requires IRS Form 1024 and annual Form 990

### First Amendment Protection
Advocating for Iran to become a US state is **fully protected political speech**. No "foreign policy exception" to the First Amendment.

### Key Legal Boundaries
- **Logan Act**: Does not apply to public advocacy (only unauthorized negotiation with foreign governments). Only 2 indictments in history, zero convictions.
- **FARA**: Does not apply if organized/funded by US persons advocating their own views. Only triggered by foreign government direction or funding.
- **Disclaimers**: If producing paid political ads, include "Paid for by [Organization Name]."

**Recommendation**: Consult a nonprofit/political law attorney before formalizing.

## Media & PR Strategy

### Framing for Different Audiences

| Audience | Frame |
|----------|-------|
| Conservative / national security | American strength and influence projection |
| Progressive / human rights | Solidarity with Iranian democratic aspirations |
| Iranian-American | Pride, belonging, creative advocacy for change |
| General / mainstream | Thought experiment raising real questions |
| Academic / policy | Intellectual exercise on sovereignty and self-determination |

### Op-Ed Targets (in order)
1. Iranian-American outlets: Kayhan Life, Iran International, IranWire
2. Major opinion pages: Washington Post, NYT, WSJ, The Atlantic
3. Policy publications: Foreign Affairs, Foreign Policy, Brookings blog
4. Regional papers: LA Times (Tehrangeles), Washington Post (DC policy)
5. Digital-native: Vox, The Intercept, Slate, Reason

### Press Kit Components
- One-page fact sheet
- Spokesperson bios
- High-res graphics/logos
- 2-3 key talking points
- Downloadable infographics

## Community Building

### Engagement Approaches
- Host **Nowruz events** tied to the campaign
- Community **town halls** in Los Angeles, DC, New York
- **Telegram channel** for community discussion
- **Podcast** featuring Iranian-American voices
- Partner with **Persian student associations** at major universities
- Partner with Persian cultural events and film festivals

### Petition Strategy
- Use **Change.org** or **Action Network** for petition infrastructure
- Set milestone goals: 1,000 / 10,000 / 100,000 signatures
- Each milestone = a press-worthy moment

## Technical Stack

### Recommended Architecture
- **Static Site Generator**: Astro or Hugo (both have excellent i18n support)
- **CMS**: CloudCannon (Git-based, works with Hugo/Astro)
- **Translation**: Rosey (open-source, works on any static site generator)
- **Hosting**: Cloudflare Pages or Netlify (free tier, global CDN, automatic HTTPS)
- **Email/Petitions**: Action Network (purpose-built for advocacy)
- **Newsletter**: EmailOctopus (nonprofit discount) or Mailchimp
- **Analytics**: Plausible or Fathom (privacy-friendly, no cookies)
- **Donations**: Anedot or ActBlue (if applicable)

### Farsi Typography
- **Vazirmatn** or **IranSans** from Google Fonts
- Increase font size by ~3pt relative to English equivalent
- Test bidirectional text handling for mixed-language content

---

*Sources: VoterVoice, Weglot (RTL design), Church Law Center (501c4), GoodParty, ACLU, DOJ FARA FAQ, Action Network, Change.org*
