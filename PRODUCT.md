# Product

<!-- impeccable:product-schema 1 -->

The agreed requirements live in [docs/brief.md](docs/brief.md); this file is the design tool's record of them. Where the two differ, the brief wins.

## Platform

web

## Users

Recruiters, Prospects and peers who have just heard Chan Kar Yik's name. When the three conflict, the first screen serves recruiters best: who Chan Kar Yik is, what they do now, and their Experience.

## Product Purpose

A calling card. In about 30 seconds a visitor learns who Chan Kar Yik is, what they have shipped, and how to reach them. English only. Success is a visitor who leaves knowing the name, the Headline and one way to get in touch.

## Positioning

The site is its own proof: a frontend developer's portfolio that sends no JavaScript, loads in under 100 KB and scores 100 on Lighthouse. The About paragraph says so in Chan Kar Yik's own words.

## Operating Context

Opened from a link in a message, a LinkedIn profile or a Resume, on a phone or a desktop, often between other tasks. Read once, quickly. The same page is printed to A4 as the Resume PDF in a later step.

## Capabilities and Constraints

- One page (`/`) with sections in a fixed order: Name and Headline, About, Contact, AI-first, Projects, Experience, Skills, the Rust aside, footer. Plus a plain "page not found" page.
- Hard rules from [ADR 0001](docs/adr/0001-zero-client-javascript.md): 0 bytes of client-side JavaScript, no image files on the page, at most 100 KB first load, Lighthouse mobile 100 in all four categories, no layout shift, no third-party requests.
- Light theme only: off-black on off-white, never `#000` or `#fff`, black, white and greys only. No hue anywhere, including links, focus and selection.
- Nothing moves: no transitions, animations, smooth scrolling or scroll effects. Hover and focus change instantly.
- One self-hosted Google Fonts family, one variable woff2, Latin only, upright only, preloaded, `font-display: optional`.
- No emoji. Brand logos appear only beside skills and the LinkedIn and GitHub links. Every icon, logo or not, is monochrome inline SVG.
- Latest two versions of Chrome, Edge, Safari and Firefox, from a 360px phone to a wide desktop.
- Terms come from [GLOSSARY.md](GLOSSARY.md): Headline, Project, Selected Project, Client, Agency, Freelance, Role, Resume.

## Brand Commitments

- Name: Chan Kar Yik. Headline: "Frontend Developer, est. 2018". It never names an employer, a seniority level or Vue.
- Voice: plain, first person, short sentences (see `src/content/about.md`).
- The copy in `src/content/` is final and approved.

## Evidence on Hand

- 15 Projects in `src/content/projects/`, seven of them Selected, with Client, Agency or Freelance, stack, year and two outcome lines.
- Roles in `src/content/roles.yaml`, skills in `src/content/skills.yaml`, profile and About in `src/content/about.md`, the AI-first section in `src/content/ai.md`, the Rust aside in `src/content/rust.md`.
- No screenshots, photos, testimonials or metrics, and none may be invented or shown.

## Product Principles

1. Thirty seconds is the budget: name, Headline and a way to reach Chan Kar Yik come first.
2. The page is the proof of craft; its speed and restraint are part of the message.
3. Striking through type and layout, not through effects: it must not look like a template, a terminal, an unfinished page or a design stunt.
4. Text is the only material, and it must read comfortably for a long time.

## Accessibility & Inclusion

Lighthouse accessibility 100 on mobile. Focus stays clearly visible in greyscale. Contrast holds for long reading without pure black on pure white.
