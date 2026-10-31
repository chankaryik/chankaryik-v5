# Zero client-side JavaScript and no image files

The site sends visitors no JavaScript and shows no image files: every page is pre-built HTML and CSS, and any graphic on the page is inline SVG. Speed and nothing standing between the reader and the text are the point of the site, so this deliberately gives up analytics scripts, a theme toggle, client-side routing, and screenshots or photos of Projects. The only image files allowed are ones the page itself never displays: the social share image, `favicon.ico` and `apple-touch-icon.png`.

## Consequences

These are hard rules:

- 0 bytes of client-side JavaScript. Structured data in a `<script type="application/ld+json">` tag is allowed, because browsers never run it.
- First load transfers at most 100 KB in total (HTML, CSS and fonts).
- Lighthouse on mobile scores 100 in all four categories, with no layout shift.
- No requests to third-party hosts: no font CDNs, no analytics, no embeds. Fonts, Google Fonts included, are downloaded at build time and served from the site's own domain.

There is no traffic data, because every analytics product needs a script.
