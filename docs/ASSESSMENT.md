# Website Assessment: RESONANCE AI4D Lab

**Site reviewed:** https://sites.google.com/aait.edu.et/resonance-lab/home
**Date:** 5 October 2026
**Scope:** All 9 pages, with a focus on the homepage.

## How I reviewed it

- Clicked through every page on desktop (1366 px) and on mobile (Chrome device emulation, about 500 px wide). Screenshots are in [`screenshots/before/`](screenshots/before/).
- Ran **Lighthouse 13** (mobile preset) against the live homepage. Full report: [`lighthouse/before-live-homepage-mobile.html`](lighthouse/before-live-homepage-mobile.html) (download it and open it in a browser).
- Read the page source to understand *why* the problems I saw happen, not just *that* they happen.

## Summary

The site already has good, substantive content: a clear mission, four well-defined research themes, real team members and a detailed call for applications. The main problem is **how that content is delivered**. Almost all of it is custom HTML pasted into Google Sites "Embed code" blocks. Each block runs in its own fixed-height iframe and loads its own copy of the Tailwind CSS development CDN. This one decision causes most of what I found: slow loading, clipped content and nested scrollbars on mobile, poor search visibility, and inconsistent structure. The homepage also doesn't tell a first-time visitor what the lab is, and some content is out of date.

### Lighthouse (mobile, live homepage)

| Category | Score | Key numbers |
|---|---|---|
| Performance | **27** / 100 | First Contentful Paint 4.2 s · **Largest Contentful Paint 26.4 s** · Total Blocking Time 7,060 ms · Speed Index 12.5 s |
| Accessibility | 94 / 100 | Images without `alt` text |
| Best Practices | 77 / 100 | Third-party cookies, console issues |
| SEO | 83 / 100 | No meta description, images without `alt` text |

> Lighthouse probably overstates the accessibility score. Most of the content sits inside cross-origin iframes, which automated checks can't fully inspect. The manual findings below cover what it misses.

## Findings

### 1. Content organization and clarity

- **The homepage doesn't say what the lab is.** A visitor sees "RESONANCE AI4D Lab", a row of buttons, three vision cards and four topic titles. The full name (*Responsible AI Solutions and Networks for Sustainable Development*), the mission, the motto and the Addis Ababa University context appear only on the About page. "@CTBE" is never explained.
- **The homepage cards are dead ends.** The focus-area cards are just titles: "Innovative Health Solutions" and the others have no description and no link, even though the Research page has a good one-sentence summary for each. The vision cards have a sentence each but no way to read more.
- **No route from the homepage to deeper content.** The homepage has no short previews of Research, Team, News or Publications to draw visitors in.
- **Out-of-date content is still live.** The homepage says *"Applications for our MSc and PhD research positions are now open"*, but the 2025/26 deadlines (28 July and 11 August 2025) have passed. News & Events still lists those dates under "Upcoming Events".
- **Placeholders are published.** Publications shows "Title goes here / Author name goes here" five times, with `#` links. The phone number on Contact is "+251 XXX XXX XXXX". Team photos are generic placeholder images.

### 2. Navigation

- **Two navigation systems on the same screen.** The homepage has the top menu (a hamburger menu on mobile) *and* a row of six large buttons linking to the same pages, plus a third link list at the bottom of each inner page. The duplication adds noise without helping visitors find anything.
- **Contact is hard to find.** It isn't among the homepage buttons and appears only in the menu or at the bottom of inner pages. For a lab that wants partners and applicants, contact details should be visible from the homepage.
- **The main call to action is buried.** "Apply Now" sits near the bottom of the homepage, below the vision and focus areas.
- **There is no real footer.** The bottom of the homepage ends with the partner logos and Google's own "Report abuse / Page details" links. There's no lab name, address, email or quick links, which is where visitors usually look for contact details and secondary navigation.
- **Partner logos are not links.** Visitors who want to learn more about AI4D, IDRC or UK International Development can't click through to them, which is a missed opportunity to show these relationships.
- **Every navigation reloads the whole page.** Each click re-downloads and re-renders the header, logo and menu (a Google Sites limitation), and each page then waits for its embed blocks to load again.

### 3. Visual design

- **The hero has no message.** It's a large framed title on a green background, with no tagline, mission or call to action.
- **Emoji are used as icons** (💡 🌱 🤝 🏥 🌾 ⚖️ ⚡). They render differently on every operating system, and they feel informal for an academic research lab.
- **Inconsistent styling between sections.** Each embed is styled on its own, so spacing, card styles and type sizes vary, and the grey embed backgrounds sit awkwardly on the white page.
- **The partner logos** are well chosen but laid out unevenly (the Canada wordmark sits on its own line under IDRC), and the label "Our Partners:" is small and unstyled.

### 4. Mobile responsiveness

- **Content is clipped inside fixed-height frames.** The embed blocks have fixed heights (360–540 px). On a phone the content is taller than its frame, so each section gets its **own inner scrollbar** and visitors must scroll inside a box inside the page to see it. For example, "Our Vision" shows only its first icon until you scroll inside it ([mobile 3](screenshots/before/Mobile_Version_3.jpg), [mobile 4](screenshots/before/Mobile_Version_4.jpg)).
- **The hero title breaks in the middle of a word**: "RESONAN / CE AI4D Lab" ([mobile 1](screenshots/before/Mobile_Version_1.jpg)).
- **The six navigation buttons take up the first screen** after the hero, pushing the actual content further down.

### 5. Accessibility

- **The partner logos have no alt text**, so screen-reader users hear nothing about who the partners are.
- **Emoji icons are read aloud** by screen readers ("light bulb", "seedling"…) because they aren't hidden from assistive technology.
- **The heading structure is broken.** Every embed is a separate document, so headings jump between levels (an `h3` section title with `h4`/`h5` items, and no consistent `h1`/`h2` outline on the page).
- **Nested scroll areas** are hard to use with a keyboard, screen magnification or touch.
- **Generic link text.** There are several identical "Apply Now" / "Contact Us" links with no context.

### 6. Performance

- **Every embed block loads the Tailwind Play CDN** (`cdn.tailwindcss.com`) and Google Fonts on its own: 3 times on the homepage, 5 on About, 6 on the Application page. The Play CDN builds CSS *in the browser at runtime* and is meant for development only, not production. This is the main reason text and sections appear late.
- **Lighthouse:** Performance 27/100; the main content takes **26.4 s** to appear on a simulated mobile connection, and the page is blocked for 7 s.

### 7. Search visibility (SEO)

- Content inside iframes is weakly associated with the page, so search engines largely see a title and some buttons.
- There is no meta description and no images have `alt` text.
- The site lives at a long `sites.google.com/aait.edu.et/...` address rather than a short, memorable domain.

## What works well

- **Strong, specific content:** the mission, the background, the four themes with concrete project examples, the SDG alignment, and a detailed call for applications.
- **A clear identity:** the AAU seal, the lab name and the motto *"Harnessing AI for Sustainable and Inclusive Development"*.
- **A simple site structure:** About, Research, Team, News & Events, Publications, Get Involved, Contact is a sensible set of pages.
- **Credible partners** are shown on the homepage: AI4D, IDRC (Canada) and UK International Development.

## Prioritized recommendations

I ranked each finding by **impact** (how many visitors it affects and how much it gets in their way) against **effort**, and by whether it can be fixed **without new information from the lab**. The prototype must not invent content, so anything that needs new facts (photos, publications, a phone number) is a recommendation for the lab, not part of the prototype.

### P1: Fix now (implemented in the homepage prototype)

| # | Recommendation | Fixes | Why it comes first |
|---|---|---|---|
| 1 | **Rebuild the content as native, semantic HTML** with one shared stylesheet, instead of iframe embeds that each load the Tailwind Play CDN | Performance, mobile clipping and nested scrollbars, heading structure, SEO | This one change is the root cause of most other problems. Everything else builds on it. |
| 2 | **Say who the lab is at the top of the page:** a hero with the full lab name, the mission in one sentence, the motto, the AAU/CTBE context and clear next steps | Clarity, first impression | A first-time visitor should understand the lab in five seconds. All of this content already exists on the About page. |
| 3 | **One consistent navigation:** a single header menu (an accessible hamburger on mobile) with Contact included and a highlighted "Get Involved" button; remove the duplicate button grid | Navigation, mobile | Removes noise and makes the most important actions visible on every screen. |
| 4 | **Homepage recap sections with "Learn more" links:** short previews of the vision, the four research themes (with their real descriptions) and ways to get involved, each linking to the full page | Content organization, dead-end cards | Turns the homepage into a guide to the rest of the site instead of a dead end. |
| 5 | **Honest, up-to-date application status:** show the 2025/26 call as closed, with its timeline, instead of "applications are now open" | Clarity, trust | Out-of-date calls to action damage credibility and waste applicants' time. |
| 6 | **A proper footer** with the lab's full name, address, email and quick links | Navigation, contact | This is where visitors expect to find contact details, and it helps them on every page. |
| 7 | **Named, linked partner logos** with alt text, each linking to the partner's official site | Accessibility, credibility | Easy to fix, and the partnerships are a strong signal of credibility. |
| 8 | **Accessibility basics:** SVG icons hidden from screen readers instead of emoji, AA colour contrast, visible keyboard focus, a skip link, a meta description | Accessibility, SEO, visual consistency | Low effort, high value, and expected of a university website. |

### P2: Next (the lab's content team, after the prototype)

- **Replace or hide placeholders:** "Title goes here" publications, the "+251 XXX XXX XXXX" phone number, placeholder team photos. It's better to hide a section than to publish a template.
- **Keep News & Events current:** move past dates to an archive and add new activities as they happen.
- **Add real photos** of the lab, the team and events (with consent), which would make the hero and news far stronger than any graphic.
- **Rebuild the inner pages** (About, Research, Team, …) using the same components as the new homepage.

### P3: Later (platform and process)

- **Move off Google Sites** to the Next.js codebase, so pages share one layout and navigation doesn't reload the header every time, and give it a short, memorable domain.
- **Add a simple CMS** (for example a headless CMS or Markdown files) so the Communications Officer can publish news and publications without code.
- **Add privacy-friendly analytics** to learn what visitors actually look for.
- **Consider an Amharic version** of the key pages.
- **Set a content review routine** (for example monthly) so deadlines and calls never go stale again.

### Considered, but not chosen

- **Expandable (accordion) cards on the homepage.** Hidden text is read less, and it makes the homepage longer and slower to scan. Short summaries with a "Learn more" link to the full page do the same job better.
- **A permanent "Apply now" button in the header.** It would raise the visibility of applications, but the 2025/26 call is closed, and promoting a closed call is worse than not promoting it. A "Get Involved" button covers students and partners and works whether or not a call is open. When a new call opens, the header button can switch to "Apply".
- **Stock photography in the hero.** Generic photos would suggest people, places or activities that aren't the lab's own, which conflicts with keeping the content factual. A typographic hero with a subtle graphic is honest and still visually strong.
