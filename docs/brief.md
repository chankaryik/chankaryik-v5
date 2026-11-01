# v5 brief

The agreed requirements for v5 of www.chankaryik.com, settled in the requirements interview on 2026-10-31. This is the brief for the impeccable design pass and for the build.

Capitalized terms (**Headline**, **Prospect**, **Project**, **Selected Project**, **Client**, **Agency**, **Freelance**, **Role**, **Resume**, **Post**, **Smiley**) are defined in [GLOSSARY.md](../GLOSSARY.md). Hard-to-reverse decisions live in [ADR 0001](adr/0001-zero-client-javascript.md) (zero JavaScript, no image files) and [ADR 0002](adr/0002-astro-static-site.md) (Astro).

v4 (`../chankaryik-v4`, a Vue single-page app) is the source for all existing content.

## Purpose

A calling card. Anyone who has just heard Chan Kar Yik's name (a recruiter, a Prospect, a peer) learns in about 30 seconds who Chan Kar Yik is, what they have shipped, and how to reach them. English only.

## Identity

- Name: Chan Kar Yik
- Headline: **Frontend Developer, est. 2018**. It never names the employer, a seniority level, or Vue. A start year never goes stale; "8 years" would until the next deploy.
- Based in Kuala Lumpur, Malaysia (carried over from v4).

## Look and feel

Simple, with an eye-catching style, on phones and desktop. Impeccable decides the exact colours, the font family, the type scale, the layout, whether there is a menu, and the footer, within these limits:

- **Light theme only.** Off-black text on an off-white background, never pure `#000` or `#fff`. The black must be comfortable to read for a long time.
- **Black, white and a few greys.** No colour anywhere, including links, focus outlines and text selection.
- **No emoji.** Brand logos appear only beside skills (see [Skills](#7-skills)) and the LinkedIn and GitHub links in Contact and the footer. Every icon, logo or not, is monochrome inline SVG.
- **Nothing moves.** No transitions, animations, smooth scrolling, scroll effects, loaders or skeletons. Hover and focus states are allowed but change instantly.
- **The section nav stays at the top of the screen,** as one row at every width. On phones the links scroll sideways when they don't fit. Staying put is a fixed position, not motion, so it is allowed.
- **The Smiley is the site's logo.** The face from the favicon starts the nav and links back to the top, and stays put while the links scroll. It is inline SVG, not an image file or an emoji. Chan Kar Yik adopted it as the logo on 2026-11-01.
- **One Google Fonts family for all text,** self-hosted: one variable file, Latin characters only, upright only. It is preloaded and uses `font-display: optional`, so on a slow first visit the page shows a system font and never swaps font while someone is reading. An italic file is added only when the blog arrives.

## Hard rules

From [ADR 0001](adr/0001-zero-client-javascript.md):

- 0 bytes of client-side JavaScript. A `<script type="application/ld+json">` tag is allowed, because browsers never run it.
- First load transfers at most 100 KB (HTML, CSS and fonts).
- Lighthouse on mobile scores 100 in all four categories, with no layout shift.
- No requests to other hosts.
- No image files on the page. The only image files are the share image, `favicon.ico` and `apple-touch-icon.png`.

They are checked by hand on the Vercel preview before going live. Automating them is on the backlog.

## Pages

- `/`: the whole site, with sections in the order below.
- A plain "page not found" page.
- No page per Project.
- Later: the blog (see [Later](#later)).

## Home page, in order

### 1. Name and Headline

### 2. About

Two to four sentences in Chan Kar Yik's own voice, including that they work AI-first. They replace v4's three generic bullets ("Passionate about building performant…").

### 3. Contact

- Email: chankaryik8@gmail.com
- LinkedIn: https://www.linkedin.com/in/chankaryik/
- GitHub: https://github.com/chankaryik
- One neutral line inviting contact about roles, projects or anything web. The exact wording is drafted with the rest of the copy. There is no "available for hire" status.

### 4. AI-first

How Chan Kar Yik works with AI: a short opening statement, then four short points, each with a line icon:

- **In my daily work:** Claude Code and Codex, and the fact that this site was built with Claude Code.
- **In what I ship:** the respond.io web app where businesses build AI Agents that qualify leads, route chats and book appointments, then hand off to a person.
- **Automation first:** anything that repeats gets automated.
- **Ready for AI work:** AI features, LLM integrations and AI-assisted workflows are the work Chan Kar Yik wants next.

This section says what work Chan Kar Yik wants; the contact line stays neutral.

### 5. Projects

Seven **Selected Projects** shown in full: Client, Agency (marked with an arrow icon, read aloud as "via …") or "Freelance", stack, year, two short lines leading with the outcome, and a link when one exists.

| Project                                   | Client                            | Agency              | Year |
| ----------------------------------------- | --------------------------------- | ------------------- | ---- |
| MSIG Corporate Website                    | MSIG Malaysia                     | Bitlab Digital      | 2025 |
| Baiduri Tools                             | Baiduri Bank                      | Bitlab Digital      | 2025 |
| Brunei Darussalam Islamic Finance Website | Brunei Darussalam Central Bank    | Bitlab Digital      | 2025 |
| Carput Zap                                | Carput Zap                        | Freelance           | 2023 |
| JanganKenaScam                            | ABM and AIBIM                     | Bitlab Digital      | 2023 |
| Leaderonomics Website                     | Leaderonomics                     | Freelance           | 2022 |
| Beats of Singapore                        | Spotify × Singapore Tourism Board | C27 × The Techy Hub | 2018 |

For MSIG, Baiduri Tools and Brunei, the first line says what the site does and the second says Chan Kar Yik's part, in plain words: led frontend and backend development on MSIG, managed a team of three frontend developers and one backend developer on Baiduri Tools, and oversaw the developers who built the Brunei site (Chan Kar Yik did not build it themselves). JanganKenaScam has one line, about the site.

The other eight Projects each get one line: name, Client, year and link. Source text is in v4's `src/components/Projects.vue`.

### 6. Experience

Roles grouped by company, so the progression reads on one line. Seniority levels appear here as history. Each company name links to its website; Freelance has none.

| Company        | Roles                                                            | Dates               |
| -------------- | ---------------------------------------------------------------- | ------------------- |
| respond.io     | Frontend Developer                                               | Jun 2026 – now      |
| Bitlab Digital | Senior Frontend Developer → Frontend Lead                        | Nov 2022 – Jan 2026 |
| Freelance      | Fullstack Developer                                              | Mar 2021 – now      |
| The Techy Hub  | Intern → Junior → Frontend Developer → Senior Frontend Developer | Mar 2018 – Mar 2021 |

### 7. Skills

- **Frontend:** Vue, Nuxt, React, Next.js, TypeScript, Tailwind CSS, Sass, Pinia, Figma
- **Backend & CMS:** Laravel, Inertia.js, PHP, C#/.NET, Umbraco, WordPress, Strapi, Stripe
- **Cloud & CI/CD:** Azure, Vercel, DigitalOcean, GitHub Actions
- **AI tools:** Claude Code, Codex

Each skill shows its brand logo beside its name, in black and white. Logos come from the free Simple Icons set at build time. Two that Simple Icons does not carry are copied in by hand: Azure from Microsoft's official Azure icon set, and Codex as the OpenAI mark, supplied by Chan Kar Yik.

### 8. Rewrite it in Rust?

A light aside, not in the nav. It jokes about everything being rewritten in Rust, admits Chan Kar Yik doesn't write Rust, and teases that with an AI agent they could anyway. Then the serious answer: seven years of writing every line by hand, AI agents since 2025, and that experience is what lets the agents help Chan Kar Yik make better decisions and ship better work. It teases; it is not sarcasm. It says "since 2025", not "for a year", so it never goes stale.

### 9. Footer

Decided in impeccable: the email address set large, then the LinkedIn and GitHub links again, then the copyright and a back-to-top link.

## Content and copy

All content lives in data files that Astro checks on every build:

- `src/content/projects/`: one Markdown file per Project
- `src/content/roles.yaml`
- `src/content/skills.yaml`
- `src/content/about.md`
- `src/content/ai.md`: the AI-first section
- `src/content/rust.md`: the Rust aside
- `src/content/blog/`: one Markdown file per Post, later

The copy was drafted by Claude from facts in v4 and approved by Chan Kar Yik on 2026-10-31. It includes the About paragraph, the contact line, and the Selected Project text, which is tightened to two lines each. Projects from the same year are ordered by their optional `order` field, then alphabetically, so MSIG leads 2025.

During the design pass on 2026-11-01, Chan Kar Yik approved three changes: the About paragraph now says they work AI-first and cites the Leaderonomics PageSpeed result in place of the article migration; the AI-first section was added; and skills gained their logos.

Later the same day Chan Kar Yik corrected their part in MSIG and Brunei (they led frontend and backend; on Brunei they directed the team and did not build it), made Baiduri Tools a Selected Project, asked for the Rust aside, and asked for LinkedIn and GitHub in the footer. The About paragraph now says "led development" for MSIG and Brunei's central bank, in place of "led the frontend".

## SEO

- Page title "Chan Kar Yik — Frontend Developer", plus a meta description.
- Canonical address on `www.chankaryik.com`. The 404 page has no canonical address and is marked `noindex`, so it stays out of search results.
- Open Graph title, description, address, type and site name, so link previews read well.
- `sitemap.xml` lists only `/`, and `robots.txt` points to it. Both are built from `site` in `astro.config.mjs`, so the domain is set in one place.
- JSON-LD `Person` structured data: name, job title, the site's address, LinkedIn and GitHub. It comes from `src/content/about.md`, and it is the page's only script tag.
- One 1200×630 share image, `share.png`: the Smiley, 450px across and centred both ways on paper, so it stays large in link previews and survives a square crop. Linked from the page head with `og:image` and a large Twitter card.
- `favicon.ico` (16, 32 and 48px) and `apple-touch-icon.png` (180px): the Smiley, in the site's two colours. It is a paper circle in an ink ring, with two dot eyes and a short U-shaped grin in ink. It is drawn on a 16px grid so every line lands on whole or half pixels, and the larger sizes scale the same drawing. The ring keeps the circle visible on a light tab bar, and the paper face stands out on a dark one. The touch icon sits on paper because iOS shows transparency as black. It replaced v4's photo, then a half-ink circle, on 2026-11-01.
- v4's Facebook app ID tag is dropped.

## Tech

- Astro, static output, deployed on Vercel.
- npm, TypeScript strict, Node 24.
- Prettier with v4's settings: no semicolons, single quotes, print width 100, tab width 4.
- Browsers: the latest two versions of Chrome, Edge, Safari and Firefox, on desktop and mobile.

## Going live

1. Create the public GitHub repo `chankaryik/chankaryik-v5` and a new Vercel project for it.
2. Check the hard rules by hand on the preview URL.
3. Move `chankaryik.com` and `www.chankaryik.com` from the `chankaryik-v4` Vercel project. `www` stays canonical, and the bare domain redirects to it.

## Order of work

1. **Setup:** git, Astro, v4 content moved into data files, and copy drafts for review.
2. **Design:** impeccable sets the look and builds the page with the real copy.
3. **Finishing:** SEO, icons and the share image.
4. **Going live.**

Steps 1 to 3 were done by 2026-11-01. Going live is next.

## Later

- **Automated checks:** a GitHub Actions workflow that fails the build on any JavaScript, an over-budget first load, extra image files, requests to other hosts, or a Lighthouse score below 100.
- **The Resume PDF:** moved to the backlog on 2026-11-01, since it isn't important yet. Until it ships, Contact has no Resume link.
  - The file: `Chan-Kar-Yik-Resume.pdf`, generated on every build. A headless browser renders the home page with its print layout and saves the PDF, so it never drifts from the site.
  - The link: a plain download link in Contact, with no JavaScript.
  - Layout: A4, two pages at most, with everything on the home page. Links are printed as readable addresses, and anything that only makes sense on screen, like the sticky nav, is hidden.
  - To decide: whether it runs in Vercel's build or locally before pushing.
- **The blog:**
  - Posts at `/blog/` and `/blog/<post-name>/`, with no dates in addresses.
  - An RSS feed.
  - The italic font file.
  - A decision on per-Post share images.
