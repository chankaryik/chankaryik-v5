---
version: 1
slug: 'src-pages-blog-slug-astro'
primary_target: 'src/pages/blog/[slug].astro'
related_targets: ['src/pages/blog/index.astro']
---

## Scope

The blog: the list of Posts (`/blog/`) and each Post (`/blog/<post-name>/`). Visitor mode: Read. The home page's Blog section belongs to the home surface brief. Requirements live in docs/brief.md.

## Audience and job

Peers, recruiters and Prospects who followed a link to one Post, often from LinkedIn on a phone, plus the occasional reader who comes back through RSS. They came to read one piece: the page must read comfortably for ten minutes, show whose site this is, and offer a way into the portfolio and the other Posts. Chan Kar Yik asked for the blog to follow the site's current look.

## Direction contract

THESIS: The Gallery Identity carried into reading: the Post title stands free under the nav, with no rule above it, and the text below is one calm column on the site's 2fr 5fr 5fr grid. It refuses the blog default of a centred column under a hero image with cards of related Posts.

OWN-WORLD: The incumbent world unchanged: ink #1A1A1A on paper #F2F2F2, Archivo 300 to 850, rules of 6px, 2px and 1px, instant ink inversion on links. Additions: Archivo italic for emphasis inside Posts, and a system monospace for code, whose syntax is marked by weight and slant, never colour.

STORY: The reader sees the title, the standfirst and the date, reads the Post, and ends on More Posts and the email sign-off. The list page is the Posts as rows, newest first.

FIRST VIEWPORT: The sticky nav with the Smiley and the name. The title at up to 6rem, weight 850, with no rule above it. The standfirst at lede size. From 56rem, date and reading time sit in the first column and the text starts in the second, about 66 characters wide. Signature interaction: the ink inversion. Motion grammar: none, by the brief's hard rule.

FORM: Extension of the home page's Gallery Identity, inherited from the home surface brief (src-pages-index-astro.md, seed:c7e5a5228b77dee8). Chan Kar Yik asked to follow the current design, so this surface had no roll of its own.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- No real Posts yet: three placeholder Posts marked `draft: true` show only in `astro dev`.
