# RESONANCE AI4D Lab: Homepage Prototype

An improved homepage prototype for the [RESONANCE AI4D Lab](https://sites.google.com/aait.edu.et/resonance-lab/home) at Addis Ababa University, built for the Web Developer technical exercise.

**Yakob Dereje** · October 2026

| | |
|---|---|
| **Assessment and prioritized recommendations** | [`docs/ASSESSMENT.md`](docs/ASSESSMENT.md) |
| **Before / after screenshots** | [`docs/screenshots/`](docs/screenshots/) |
| **Lighthouse reports** (download and open in a browser) | [before](docs/lighthouse/before-live-homepage-mobile.html) · [after](docs/lighthouse/after-prototype-homepage-mobile.html) |

## Results at a glance

Lighthouse, mobile preset, homepage. Before = the live Google Sites homepage; after = this prototype (production build, run locally).

| | Before | After |
|---|---|---|
| Performance | 27 | 71–84 (range over 5 runs) |
| Largest Contentful Paint | 26.4 s | ~3.0–3.7 s |
| Accessibility | 94 | **100** (light and dark theme) |
| Best Practices | 77 | **100** |
| SEO | 83 | **100** |
| axe-core violations | not run | **0** (light and dark theme) |

The performance score varies by about ±5 points between identical runs on my laptop, so I report the range rather than the best run. The saved "after" report is a 71 run.

## Run it locally

Requires **Node.js 20.9 or newer**.

```bash
npm install
npm run dev        # development server at http://localhost:3000
```

Other scripts:

```bash
npm run build && npm run start   # production build (use this for Lighthouse)
npm run lint                     # ESLint
npm run format                   # Prettier (with Tailwind class sorting)
```

No environment variables or external services are needed. Deployment was not required, so the prototype runs locally.

## What I changed, and why

The full reasoning is in [`docs/ASSESSMENT.md`](docs/ASSESSMENT.md). In short, most of the current site's problems come from one root cause: the content is custom HTML pasted into Google Sites "Embed code" blocks, each in its own fixed-height iframe that loads its own copy of the Tailwind development CDN. That causes the slow loading, the clipped content and nested scrollbars on mobile, and the weak search visibility.

The prototype implements all eight **P1** recommendations:

| # | Recommendation | Where |
|---|---|---|
| 1 | Native, semantic HTML with one shared stylesheet instead of iframe embeds | whole page |
| 2 | Say who the lab is at the top: full name, mission, motto, AAU/CTBE context, clear next steps | `Hero` |
| 3 | One consistent navigation, with Contact and a highlighted "Get Involved" button; accessible mobile menu | `SiteHeader`, `MobileMenu` |
| 4 | Homepage previews with "Learn more" links instead of dead-end cards | `VisionSection`, `ResearchSection` |
| 5 | Honest application status: the 2025/26 call is shown as **Closed** | `GetInvolvedSection` |
| 6 | A proper footer with full name, address, email and quick links | `SiteFooter` |
| 7 | Named, linked partner logos with alt text | `PartnersSection` |
| 8 | Accessibility basics: SVG icons instead of emoji, AA contrast, visible focus, skip link, meta description | throughout |

**Beyond the priorities** (added because time allowed, and kept deliberately small): subtle motion, an animated mobile menu, and a dark theme. They are not fixes for problems in the assessment, so they come after the P1 work, not instead of it.

## Design decisions

- **Preserve the lab's identity.** The deep green continues the current site's colour; the gold comes from the AAU seal; Playfair Display (headings) and Inter (body) are the fonts the current site already uses. A visitor should recognise the lab, just better presented.
- **Nothing invented.** Every piece of text is copied word for word from the current site, and each block in [`src/content/site.ts`](src/content/site.ts) names the page it came from. I checked this with a script that compares every string against the text extracted from the live pages: all match, except "CTBE" (from the site title) and the IDRC and UK International Development names (read from their logos).
- **No stock photography.** Generic photos would suggest people, places or activities that are not the lab's own. The hero uses a typographic layout and decorative concentric rings, a visual nod to "resonance".
- **An honest call status, computed from the date.** The old homepage still says "applications are now open" for a call that closed in August 2025. The prototype works out the status from the real deadline, so it can never claim a call is open after it has closed. Adding a future call to the content file (with its deadline) automatically shows the timeline and an "Apply now" link.
- **Summaries, not accordions.** Each section shows a short, real summary and links to the full page. Hidden accordion text gets read less and makes the homepage slower to scan.
- **"Get Involved" in the header, not "Apply now".** It serves students and partners and stays correct whether or not a call is open.
- **Motion with a purpose, and optional.** The hero rings pulse outward like sound waves; cards fade in on scroll and lift on hover. Visitors who ask their OS to reduce motion get a completely still page (WCAG 2.3.3), and the hero text is never animated in, so it doesn't delay the main content.
- **Dark theme** that follows the system setting by default, remembers the visitor's choice, and is set before the first paint so there is no white flash. Partner logos sit on light tiles because the logo files have white backgrounds.

## Technical decisions

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.** The page is statically prerendered, so it is fast and can be hosted anywhere. The shared layout also fixes the full-page reloads of the current site once more pages are moved over.
- **Content separate from components.** All text lives in one typed file, [`src/content/site.ts`](src/content/site.ts), so the Communications Officer (or a future CMS) can update facts without touching the layout.
- **Server components by default.** Only the mobile menu and the theme toggle run JavaScript in the browser.
- **CSS for decorative motion, Framer Motion only where CSS falls short.** The ripples, scroll reveal and hover effects are plain CSS, with no JavaScript cost. The scroll reveal uses CSS scroll-driven animations (`animation-timeline: view()`) as a progressive enhancement. I used Framer Motion (`motion`) only for the mobile menu, because CSS can't animate an element out as it is removed (`AnimatePresence` can). It is loaded through `LazyMotion` to keep its bundle small. Even so, it measurably raised Total Blocking Time (from about 410 ms to about 600 ms in my runs), which is why I didn't use it for the rest of the page.
- **Semantic colour tokens** (`surface`, `heading`, `muted`, `tint`, …) in [`globals.css`](src/app/globals.css). Components use the tokens, so the dark theme is a single set of overrides.
- **Accessibility built in:** one `h1` and a clean heading outline; header/nav/main/footer landmarks; a skip link; visible focus rings that meet 3:1 contrast on both light and dark surfaces; descriptive link text for screen readers ("Learn more about Innovative Health Solutions"); a mobile menu with `aria-expanded`, a label and Esc to close.
- **Optimised assets:** `next/font` self-hosts the fonts (no layout shift), and `next/image` resizes and compresses the logos (the AAU seal file is 1.1 MB, but it is served at icon size).

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, theme script, header/footer, skip link
    page.tsx          # the homepage: composes the sections
    globals.css       # design tokens, dark theme, motion
    icon.png          # favicon (AAU seal)
  components/
    SiteHeader.tsx    # logo, desktop nav, theme toggle
    MobileMenu.tsx    # accessible animated menu (Framer Motion)
    ThemeToggle.tsx
    SiteFooter.tsx
    home/             # Hero, Vision, Research, GetInvolved, Partners, Contact
  content/site.ts     # ALL homepage text, with the source page of each fact
  lib/theme.ts        # pre-paint theme script
docs/                 # assessment, screenshots, Lighthouse reports
public/               # AAU seal and partner logos (from the current site)
```

## How I tested it

- **Lighthouse** (mobile) and **axe-core** on the production build, in light and dark theme.
- **Responsive** checks at 320, 390 and 1366 px (this found and fixed a truncated header name at 320 px).
- **Heading outline and landmarks**, checked from the rendered HTML.
- **Fact check:** a script comparing every content string with the text extracted from the live site.
- **Keyboard:** skip link, focus visibility, and opening/closing the mobile menu with Enter and Esc.
- `npm run lint`, `tsc --noEmit` and `npm run build` pass with no errors.

## Known limitations

- **Homepage only.** Navigation and "Learn more" links go to the existing Google Sites pages. The inner pages would need the same rebuild.
- **The call status is computed at build time.** The page is static, so after a deadline passes it needs a rebuild (or a scheduled revalidation) to switch to "Closed".
- **Partner links** go to each organisation's official website; I couldn't confirm which specific programme pages the lab would prefer. "UK International Development" links to the FCDO, the UK government department behind that brand.
- **The IDRC logo looks smaller** than the others because the image file has a lot of empty space and small text. A properly cropped logo file from the lab would fix this; I didn't alter the partner's logo myself.
- **Scroll reveal doesn't animate in Firefox** (no support for scroll-driven animations yet). Content still appears normally.
- **Performance is about 71–84, not 100.** What remains is mostly the Next.js/React runtime plus Framer Motion. A static export or removing Framer Motion would raise it.
- **No real photography, team section, news or publications** on the homepage. A typical lab homepage has these, but the current site has no up-to-date content for them (publications are placeholders, events are from 2025, team photos are placeholders), and the brief forbids inventing content.
- `npm audit` reports 14 warnings, all in **development-only** tooling (the Lighthouse and axe CLIs and ESLint's config); `npm audit --omit=dev` finds **0** in the website's runtime dependencies. The suggested `--force` fixes would downgrade those tools, so I left them.

## Next steps

1. **Lab Leadership preview** on the homepage, using the real names and roles from the Team page, once the lab provides real photos.
2. **SDG alignment strip** (SDG 2, 3, 7 and 16, as described on the About page).
3. Rebuild the **inner pages** with the same components, then move the site off Google Sites to a short domain.
4. A simple **CMS** so the Communications Officer can publish news and publications without code.
5. An **Open Graph image** for social sharing, and privacy-friendly analytics.

## Time spent

About **3 hours 50 minutes** of active work, excluding breaks (including a laptop battery outage).

| Phase | Time |
|---|---|
| Setup, first look at the site, planning | ~40 min |
| Assessment (with Lighthouse and source inspection) | ~17 min |
| Prioritization | ~8 min |
| Foundation: content model, tokens, header, footer | ~19 min |
| Homepage sections | ~21 min |
| Quality pass: Lighthouse, axe, responsive, fact check | ~25 min |
| Extras: motion, Framer Motion menu, dark theme, polish | ~83 min |
| README and final review | ~15 min |

## AI and development-tool disclosure

**Tools used**

- **Claude Code** (Anthropic, model Claude Opus 5.5) in VS Code: an AI coding assistant that can read files, run commands and edit code in the project, with my approval.
- Lighthouse, axe-core CLI, Chrome DevTools (device emulation), ESLint, Prettier, TypeScript.

**How I used AI**

- **Research:** Claude Code downloaded the live site's HTML and extracted the text inside the embed blocks, which is how we found that the content sits in iframes and loads the Tailwind CDN in each one.
- **Assessment:** I reviewed the site and wrote down my own 11 observations first (for example the duplicate navigation, the missing footer, the hidden contact and apply buttons, the slow loading, the poor mobile experience and the non-clickable partner logos). Claude Code then added findings and evidence (Lighthouse scores, the iframe and CDN cause) and drafted `docs/ASSESSMENT.md` from both. I reviewed it and asked it to confirm all my points were included; two were missing, and we added them.
- **Planning and code:** Claude Code proposed the phase plan, wrote most of the code to my direction, and ran the checks (lint, build, Lighthouse, axe, screenshots). I made the product decisions: the stack, which features to add, the section order and spacing, and what to drop. I made every commit myself after reviewing the change.
- **README:** drafted by Claude Code in my voice from our working log; I reviewed it before submitting.

**How I checked the AI's output**

- I reviewed every section in the browser (desktop and mobile) before committing it, and asked for changes where something looked wrong. For example, I asked for more space below the partners section and for its heading to match the other sections.
- We fact-checked all content against the live site with a script (see *How I tested it*).
- I tested the page myself in the browser: keyboard navigation (skip link, focus rings, opening and closing the mobile menu with Enter and Esc), each partner link, the theme toggle, and the mobile menu in device emulation.
- Claude Code also caught some of its own mistakes under the "don't invent" rule, which I kept: it replaced a research intro sentence it had written with the real sentence from the Research page, renamed "Example projects" to "Research directions" (the site doesn't say these are active projects), and changed paraphrased timeline labels to the exact wording.

**Suggestions I rejected or changed**

- It suggested plain HTML/CSS/JavaScript with no build step; I chose **Next.js and Tailwind CSS**.
- It recommended skipping dark mode as out of scope; I decided to add it, framed as an enhancement after the P1 work.
- It recommended CSS-only motion; I wanted Framer Motion. We compromised: Framer Motion only for the mobile menu's exit animation, where CSS falls short.

**AI suggestions I accepted after discussion**

- Reframing my point that the icons "look AI-generated" into concrete issues (emoji read aloud by screen readers, inconsistent rendering), which is more useful and more respectful of the existing work.
- Using summaries with "Learn more" links instead of expandable cards, using "Get Involved" instead of "Apply now" in the header (the call is closed), and not using stock photos.
- Skipping a homepage team section to stay within the time guideline; it is listed under *Next steps*.
