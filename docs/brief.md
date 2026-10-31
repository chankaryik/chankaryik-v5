# v5 brief

The agreed requirements for v5 of www.chankaryik.com, settled in the requirements interview on 2026-10-31. This is the brief for the impeccable design pass and for the build.

Capitalized terms (**Headline**, **Prospect**, **Project**, **Selected Project**, **Client**, **Agency**, **Freelance**, **Role**, **Resume**, **Post**) are defined in [GLOSSARY.md](../GLOSSARY.md). Hard-to-reverse decisions live in [ADR 0001](adr/0001-zero-client-javascript.md) (zero JavaScript, no image files) and [ADR 0002](adr/0002-astro-static-site.md) (Astro).

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
- **No emoji and no brand logos.** Any icon that survives is monochrome inline SVG.
- **Nothing moves.** No transitions, animations, smooth scrolling, scroll effects, loaders or skeletons. Hover and focus states are allowed but change instantly.
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

Two to four sentences in Chan Kar Yik's own voice. They replace v4's three generic bullets ("Passionate about building performant…").

### 3. Contact

- Email: chankaryik8@gmail.com
- LinkedIn: https://www.linkedin.com/in/chankaryik/
- GitHub: https://github.com/chankaryik
- Resume download (see [Resume](#resume))
- One neutral line inviting contact about roles, projects or anything web. The exact wording is drafted with the rest of the copy. There is no "available for hire" status.

### 4. Projects

Six **Selected Projects** shown in full: Client, Agency (shown as "via …") or "Freelance", stack, year, two short lines leading with the outcome, and a link when one exists.

| Project                                   | Client                            | Agency              | Year |
| ----------------------------------------- | --------------------------------- | ------------------- | ---- |
| MSIG Corporate Website                    | MSIG Malaysia                     | Bitlab Digital      | 2025 |
| Brunei Darussalam Islamic Finance Website | Brunei Darussalam Central Bank    | Bitlab Digital      | 2025 |
| Carput Zap                                | Carput Zap                        | Freelance           | 2023 |
| JanganKenaScam                            | ABM, AIBIM                        | Bitlab Digital      | 2023 |
| Leaderonomics Website                     | Leaderonomics                     | Freelance           | 2022 |
| Beats of Singapore                        | Spotify × Singapore Tourism Board | C27 × The Techy Hub | 2018 |

The other nine Projects each get one line: name, Client, year and link. Source text is in v4's `src/components/Projects.vue`.

### 5. Experience

Roles grouped by company, so the progression reads on one line. Seniority levels appear here as history.

| Company        | Roles                                                            | Dates               |
| -------------- | ---------------------------------------------------------------- | ------------------- |
| respond.io     | Frontend Developer                                               | Jun 2026 – now      |
| Bitlab Digital | Senior Frontend Developer → Frontend Lead                        | Nov 2022 – Jan 2026 |
| Freelance      | Fullstack Developer                                              | Mar 2021 – Jan 2024 |
| The Techy Hub  | Intern → Junior → Frontend Developer → Senior Frontend Developer | Mar 2018 – Mar 2021 |

### 6. Skills

- **Frontend:** Vue, Nuxt, React, Next.js, TypeScript, Tailwind CSS, Sass, Pinia, Figma
- **Backend & CMS:** Laravel, Inertia.js, PHP, C#/.NET, Umbraco, WordPress, Strapi, Stripe, CHIP
- **Cloud & CI/CD:** Azure, Vercel, DigitalOcean, GitHub Actions
- **AI tools:** Claude Code, Codex

### 7. Footer

Decided in impeccable.

## Resume

- **The file:** a PDF, `Chan-Kar-Yik-Resume.pdf`, generated on every build. A headless browser renders the home page with its print layout and saves the PDF, so it never drifts from the site.
- **The link:** a plain download link, with no JavaScript.
- **Layout:** A4, two pages at most, with everything on the home page. Links are printed as readable addresses, and anything that only makes sense on screen is hidden.
- **To verify while building:** whether this runs in Vercel's build or locally before pushing.

## Content and copy

All content lives in data files that Astro checks on every build:

- `src/content/projects/`: one Markdown file per Project
- `src/content/roles.yaml`
- `src/content/skills.yaml`
- `src/content/about.md`
- `src/content/blog/`: one Markdown file per Post, later

Claude drafts the copy and Chan Kar Yik edits it. The drafts are three tones of About, the Selected Project text tightened to two lines each, the one-liners for the other Projects, and the contact line. Drafts use only facts from v4 or from Chan Kar Yik.

## SEO

- Page title "Chan Kar Yik — Frontend Developer", plus a meta description.
- Canonical address on `www.chankaryik.com`.
- `sitemap.xml` and `robots.txt`.
- JSON-LD `Person` structured data: name, job title, LinkedIn and GitHub.
- One 1200×630 share image showing the name and Headline in the site's font and colours, made after the impeccable pass.
- `favicon.ico` and `apple-touch-icon.png`: initials in the site's font.
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
3. **Finishing:** the Resume PDF, SEO, icons and the share image.
4. **Going live.**

## Later

- **Automated checks:** a GitHub Actions workflow that fails the build on any JavaScript, an over-budget first load, extra image files, requests to other hosts, or a Lighthouse score below 100.
- **The blog:**
  - Posts at `/blog/` and `/blog/<post-name>/`, with no dates in addresses.
  - An RSS feed.
  - The italic font file.
  - A decision on per-Post share images.
