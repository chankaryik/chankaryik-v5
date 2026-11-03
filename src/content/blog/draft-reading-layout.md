---
title: 'Draft: Placeholder Post for the reading layout'
description: A layout sample with headings, lists, a quote, a table and code. It is not written by Chan Kar Yik and never reaches the live site.
date: 2026-11-02
featured: true
draft: true
---

This Post is a placeholder. It exists so the blog layout can be checked in `astro dev` before any real Post is written, and it is marked `draft: true`, so a production build leaves it out. Replace it, or delete it, when the first real Post arrives.

Body text in a Post is set in Archivo at about 18 to 20 pixels, with a line height of 1.6. The column stops at about 66 characters, so the eye finds the start of the next line without hunting for it. Links look like [every other link on the site](/), and they fill with ink on hover. Emphasis is set in _Archivo italic_, and strong emphasis in **a heavier weight**.

## A heading opens a part of the Post

Headings inside a Post hang from a 2px rule, the same rule that opens the small labels on the home page. The text after a heading follows closely, and the space above it is larger, so the heading belongs to what comes next.

### A smaller heading

Smaller headings drop the rule and keep the weight. A paragraph after one reads like any other paragraph.

## Lists

An unordered list:

- Square markers, because every corner on the site is square.
- A second item that runs long enough to wrap onto another line, to show how the text lines up under the first line and not under the marker.
- A third item with `inline code` in it.

An ordered list:

1. Numbers are bold, in tabular figures.
2. The second step.
3. The third step, which also runs long enough to wrap onto a second line on a phone.

## A quote

> Placeholder quote. A quote is set larger than the body, so it reads as someone else's voice, without a box or a coloured bar.

## Code

Code is set in the reader's system monospace font. Keywords are bold and comments are italic; there is no colour.

```css
/* Every link fills with ink on hover */
a:hover {
  background: var(--ink);
  color: var(--paper);
  text-decoration: none;
}
```

```ts
import { getCollection } from 'astro:content'

// Newest first, drafts left out of production builds
export async function getPosts() {
  const entries = await getCollection('blog', ({ data }) => !data.draft)
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}
```

A block without a language has no label:

```
npm run build
```

## A table

A table wider than a phone scrolls sideways inside its own region:

| Check                   | Limit           | Checked by                | When                      |
| ----------------------- | --------------- | ------------------------- | ------------------------- |
| Client JavaScript       | 0 bytes         | Counting script tags      | Before every push to main |
| First load              | 100 KB at most  | Gzipped HTML plus fonts   | Before every push to main |
| Lighthouse, mobile      | 100 in all four | PageSpeed Insights        | On the preview deployment |
| Requests to other hosts | None            | The browser's request log | On the preview deployment |

---

A thematic break, the line above, is a 1px rule. The Post ends here, and More Posts follows.
