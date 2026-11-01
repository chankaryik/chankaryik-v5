---
version: 1
slug: 'src-pages-index-astro'
primary_target: 'src/pages/index.astro'
related_targets: ['src/pages/404.astro']
---

## Scope

The home page (`/`) and the plain "page not found" page (`/404`). Visitor mode: Experience (a portfolio), read as a calling card. Requirements live in docs/brief.md.

## Audience and job

Recruiters first, then Prospects and peers, who have just heard the name. In about 30 seconds they learn who Chan Kar Yik is, what they have shipped and how to reach them. The user rejected print-era directions as outdated and asked for modern, striking black and white that is plain but enjoyable to read.

## Direction contract

THESIS: A modern museum-identity calling card: the name set as monumental wall lettering and every section hung from heavy ink rules on one fixed column grid. It refuses the developer-portfolio default of a hero over project cards and skill chips.

OWN-WORLD: Two colours only, off-black #1A1A1A on off-white #F2F2F2, no greys and no hue. One family, Archivo, 300 to 850: weight and size carry every level of hierarchy. 6px rules open major sections, 2px rules open labels, 1px rules divide rows. Monochrome 2px-stroke inline icons. Links are underlined (navigation excepted), hover fills them with solid ink instantly, and keyboard focus draws a 3px ink outline.

STORY: The visitor reads the name, Headline and city, then About and four ways to make contact within the first screens; the AI-first statement and points (added at the user's request), Projects, Experience and Skills follow as wall sections, their rows on one 2fr 5fr 5fr grid; the page closes on the email address.

FIRST VIEWPORT: The section nav sits on a 2px rule at the top. The name runs flush left at up to 13rem (14vw), weight 850, tracking -0.045em. Below it the Headline (weight 600) and the city (weight 300, pin icon). On desktop, About (7 of 12 columns) and Contact (5 columns) begin at the fold, each contact link led by an icon. Signature interaction: instant ink inversion on every link. Motion grammar: none, by the brief's hard rule.

FORM: The Gallery Identity, grounded candidate 3 of 7 in re-roll round 1, adapted by the user: monogram removed, two colours only, icons added, "via" shown as an icon. seed:c7e5a5228b77dee8

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Print layout for the Resume PDF is a later step; keep markup semantic.
