---
name: Chan Kar Yik
description: A two-colour gallery-identity calling card for a frontend developer.
colors:
  ink: '#1A1A1A'
  paper: '#F2F2F2'
typography:
  display:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(3.5rem, 14vw, 13rem)'
    fontWeight: 850
    lineHeight: 0.88
    letterSpacing: '-0.045em'
  headline:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(2.75rem, 8.5vw, 7.5rem)'
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: '-0.045em'
  statement:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.625rem, 3.2vw + 0.5rem, 3.5rem)'
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: '-0.03em'
  title:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.75rem, 3.4vw, 3rem)'
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: '-0.03em'
  page-title:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(3rem, 11vw, 9.5rem)'
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: '-0.045em'
  sign-off:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.75rem, 6.2vw, 6rem)'
    fontWeight: 800
    lineHeight: 1
    letterSpacing: '-0.04em'
  role-title:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)'
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: '-0.025em'
  point-title:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.375rem, 2.2vw, 2rem)'
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: '-0.025em'
  lede:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.25rem, 1.6vw + 0.6rem, 1.875rem)'
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: '-0.012em'
  link-list:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.25rem, 1.4vw + 0.7rem, 1.75rem)'
    fontWeight: 650
    lineHeight: 1.5
    letterSpacing: '-0.015em'
  list-item:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.375rem, 0.5vw + 1.2rem, 1.5rem)'
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: '-0.01em'
  year:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)'
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 'normal'
  subhead:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.375rem, 3.2vw, 2.75rem)'
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: '-0.02em'
  body:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: 'clamp(1.0625rem, 0.35vw + 1rem, 1.1875rem)'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 'normal'
  label:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: '1rem'
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 'normal'
  small:
    fontFamily: "Archivo, 'Archivo Fallback', Arial, sans-serif"
    fontSize: '0.9375rem'
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 'normal'
rounded:
  none: '0'
spacing:
  margin: 'clamp(1rem, 4.5vw, 4rem)'
  gap: 'clamp(1rem, 2.5vw, 2rem)'
components:
  link:
    textColor: '{colors.ink}'
  link-hover:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.paper}'
  wall-heading:
    textColor: '{colors.ink}'
    typography: '{typography.headline}'
    padding: '0.5rem 0 0'
  label:
    textColor: '{colors.ink}'
    typography: '{typography.label}'
    padding: '0.75rem 0 0'
  nav:
    textColor: '{colors.ink}'
    typography: '{typography.small}'
    padding: '0 0 0.75rem'
  row:
    textColor: '{colors.ink}'
    padding: 'clamp(1.25rem, 2.5vw, 2rem) 0'
---

# Design System: Chan Kar Yik

## Overview

**Creative North Star: "The Gallery Wall"**

The page is set like a modern museum identity: the name as monumental wall lettering, and every section hung from a heavy ink rule on one fixed column grid. There is one colour of ink on one colour of paper, one type family, and nothing moves. Hierarchy is carried entirely by weight, size and rule thickness, never by colour, tint, shadow or container.

Density is generous at the top (display type, long vertical gaps between sections) and tight inside sections (rows divided by hairline rules, tabular years in a narrow first column). The page reads top to bottom as a single column of walls; there are no cards, chips, panels or images.

**Key Characteristics:**

- Two colours: off-black ink on off-white paper, no greys, no hue.
- One variable family, Archivo, used from weight 300 to 850.
- A three-weight rule system (6px, 2px, 1px) is the only structure.
- Rows share one 2fr 5fr 5fr grid from 56rem.
- Links invert to solid ink on hover, instantly.
- Zero motion, zero client JavaScript, no image files.

## Colors

A strict two-ink system: every pixel is either ink or paper.

### Primary

- **Gallery Ink** (#1A1A1A): all text, all rules, all icons and logos (via currentColor), the hover fill of links, the focus outline, the selection background and the scrollbar thumb. Never pure black.

### Neutral

- **Wall Paper** (#F2F2F2): the page background, the text colour inside a hovered link, the selection text and the scrollbar track. Never pure white.

### Named Rules

**The Two Inks Rule.** Only Gallery Ink and Wall Paper exist. No greys, no opacity tints, no hue, no third colour for states. Emphasis comes from weight or size, never from a lighter or coloured ink.

**The Inversion Rule.** The only colour change on the page is a swap: ink becomes the background and paper becomes the text (link hover, text selection).

## Typography

**Display Font:** Archivo (with a metric-matched Arial fallback)
**Body Font:** Archivo (with a metric-matched Arial fallback)

**Character:** A single grotesque that runs from light to near-black. Weight 850 at tight negative tracking reads as carved wall lettering; weight 300 reads as quiet metadata.

Archivo is self-hosted through Astro's fonts API: one variable woff2, axis 100 to 900, upright only, Latin subset, `font-display: optional`. The fallback is two local Arial faces split at weight 550 (Regular for 100-549, Bold for 550-900) with Astro's computed metric overrides, so headings keep their weight and the layout does not shift.

### Hierarchy

- **Display** (850, clamp 3.5rem to 13rem at 14vw, line-height 0.88, -0.045em): the name in the masthead only. The 404 heading uses the same treatment at a smaller clamp (3rem to 9.5rem).
- **Headline** (850, clamp 2.75rem to 7.5rem, line-height 0.95, -0.045em): wall headings that open each major section.
- **Statement** (700, clamp 1.625rem to 3.5rem, line-height 1.08, -0.03em, max 26ch): a near-display paragraph directly under a wall heading. The Rust aside sets its three beats at this size, with the confession at 300 and the punchline at 850 and 1.5 times larger.
- **Subhead** (600 for the Headline line, 300 for the city; clamp 1.375rem to 2.75rem, line-height 1.15, -0.02em): the masthead lines under the name.
- **Title** (750, clamp 1.75rem to 3rem for project names, 1.5rem to 2.25rem for companies, 1.375rem to 2rem for AI-first points and the Rust sign-off; line-height about 1.05, -0.025em to -0.03em): row titles.
- **Lead** (400, clamp 1.25rem to 1.875rem, line-height 1.35, max 34ch): the About paragraph.
- **Link list** (650, clamp 1.25rem to 1.75rem, -0.015em): Contact links, the footer's LinkedIn and GitHub links, and the 404 return link.
- **Body** (400, clamp 1.0625rem to 1.1875rem, line-height 1.5, max 60ch): descriptions and point text.
- **Label** (700, 1rem): small section labels sitting on a 2px rule.
- **Small** (600, 0.9375rem): nav, stack lines, footer row.
- **Meta** (300): client names in More Projects, agency lines, date ranges, the city.
- **Sign-off** (800, clamp 1.75rem to 6rem, line-height 1, -0.04em): the closing email address.

### Named Rules

**The Weight Carries It Rule.** Every level of hierarchy is size plus weight inside one family. Bold dates and years (700) mark time; light (300) marks secondary metadata. No second family, and no italics (only the upright axis is shipped).

**The Tight Tracking Rule.** The larger the type, the tighter the tracking: -0.045em at display and headline, -0.03em at titles, -0.01em to -0.02em at lead sizes, normal at body.

**The Tabular Time Rule.** Years and date ranges use tabular numerals so they align down a column.

## Layout

Single column with fluid side margins of clamp(1rem, 4.5vw, 4rem) and a column gap of clamp(1rem, 2.5vw, 2rem). No max-width container: the walls run edge to margin at every width.

From 56rem every content row (AI-first points, Projects, More Projects, Experience, the Rust answer) uses the same three-column grid, 2fr 5fr 5fr: time or icon in the first column, title in the second, body in the third (the Rust answer has no marker and spans the second and third). Below 56rem rows stack, and More Projects rows put the name first with the year pushed right. The intro (About, Contact) splits 7fr 5fr from 56rem. Skills run one column, two from 40rem, four from 64rem. The nav is one sticky row at every width; where it does not fit, it scrolls sideways.

Vertical rhythm is set by clamps: sections sit clamp(5rem, 12vw, 10rem) apart, the footer clamp(6rem, 14vw, 12rem) below the last section; rows pad clamp(1.25rem, 2.5vw, 2rem) to clamp(1.5rem, 3vw, 2.5rem) top and bottom; More Projects rows pad 0.7rem.

### Named Rules

**The One Grid Rule.** Any new list of rows sits on the 2fr 5fr 5fr grid from 56rem, with its time or marker in the first column.

## Elevation & Depth

Completely flat. No shadows, no layering, no background panels. Structure and grouping are conveyed by rules and whitespace alone.

### Named Rules

**The Rules Not Boxes Rule.** Group content by hanging it from a horizontal rule, never by enclosing it in a border, card or tint.

## Shapes

Square corners everywhere; nothing is rounded. The only drawn forms are horizontal ink rules in three weights, each with one job:

- **Wall rule** (6px): opens every major section and the footer, and tops the 404 heading.
- **Label rule** (2px): opens small labels (About, Contact, More Projects, skill group names) and underlines the nav.
- **Row rule** (1px): divides rows inside a section (top border on rows, bottom border on More Projects entries).

Icons are line drawings on a 20px grid with a 2px stroke, round joins, no fill, drawn in currentColor.

### Named Rules

**The Three Rules Rule.** 6px opens a section, 2px opens a label, 1px divides rows. Do not introduce a fourth thickness or use a rule for decoration.

## Components

### Links

Plainly underlined text that turns into a solid ink block on hover.

- **Default:** inherits ink; underline 0.09em thick, offset 0.2em (the sign-off uses 0.06em and 0.12em at its size).
- **Hover:** ink background, paper text, underline removed. Instant, no transition.
- **Focus:** 3px solid ink outline at 3px offset (`:focus-visible`).
- **With icon:** inline-flex, icon at 0.75em to 0.8em (Contact and footer links: 1em on phones), gap 0.3em to 0.45em; the icon inverts with the text.
- **Exception:** nav links and the 404 home link drop the underline because their position on the 2px nav rule marks them as links.

### Navigation

- Six in-page section links in one row, weight 600 at 0.9375rem, gap 1.25rem, 0.75rem above and below, on a 2px rule that keeps to the margins.
- Sticky at the top of the screen at every width (about 49px tall). Its paper background runs edge to edge so the page passes out of sight beneath it. Section links land 5rem below the top (`scroll-padding-top`) so headings clear the bar.
- Where the six links do not fit (most phones, below about 416px), the row scrolls sideways out to the screen edges with no scrollbar; the word cut off at the edge shows there is more.
- Each link's tap area is the full bar height plus half of each gap; the hover fill stays on the word.
- Hover follows the link inversion. Being sticky is a fixed position, not motion: nothing animates.

### Wall heading (signature)

The section opener: a 6px ink rule, 0.5rem gap, then the headline in weight 850. Everything in the section hangs below it.

### Label

A small heading (700, 1rem) with a 2px rule above and 0.75rem padding. Used for sub-sections and groups, never as a decorative kicker above a heading.

### Row

A grid row with a 1px rule on top: marker or year (tabular, 700, or light dates with "now" in 700), title (750; in Experience the company name is an underlined link to its website, Freelance excepted), body (400, max 60ch). Inline metadata lines (agency, stack) lead with a 1em icon aligned to the first text line.

### Rust aside

The last section, after Skills, and left out of the nav: a coda, not somewhere to jump to. A joke in three beats set as Statement type, where weight does the timing (setup 700, confession 300, punchline 850 and larger), 0.5em apart. Then the serious answer as a row: body text, closed by a sign-off line at Title size.

### Footer

A 6px wall rule, the email address at Sign-off size, then LinkedIn and GitHub with their logos as a Link list, and a Small row with the copyright and "Back to top".

### Icons

Inline SVG, 20px viewBox, 2px stroke (1.5 for the large location pin), `aria-hidden`, sized in em to the text beside them; the adjacent text always carries the meaning.

### Brand logos

Filled brand marks (`src/components/BrandLogo.astro`) beside skills and the LinkedIn and GitHub links in Contact and the footer, a user-approved exception to the brief's no-brand-logos rule. They come from Simple Icons, or are copied in by hand when Simple Icons has none (Azure, Codex, LinkedIn), always drawn in currentColor so they invert with a hovered link. Beside skills they are 1em on phones and 0.85em from 40rem; in Contact and the footer they match the line icons: 1em on phones, 0.8em from 40rem. Skills without a published mark keep an empty slot of the same size so names align.

## Do's and Don'ts

### Do:

- **Do** use only Gallery Ink (#1A1A1A) and Wall Paper (#F2F2F2), including for states, selection and the scrollbar.
- **Do** carry hierarchy with Archivo weight (300 to 850) and size alone.
- **Do** open sections with a 6px rule, labels with a 2px rule, and divide rows with a 1px rule.
- **Do** put row lists on the 2fr 5fr 5fr grid from 56rem.
- **Do** underline links and invert them to ink on hover, instantly; focus with a 3px ink outline at 3px offset.
- **Do** draw icons inline on the 20px grid with a 2px stroke in currentColor, next to text that carries the meaning.

### Don't:

- **Don't** use #000, #fff, greys, opacity tints or any hue.
- **Don't** add transitions, animations or scroll effects; every state change is instant.
- **Don't** use shadows, rounded corners, cards, chips or tinted panels.
- **Don't** add a second font family or italics; one self-hosted upright Archivo is the whole type system.
- **Don't** use image files or icon fonts; icons and logos are inline SVG.
- **Don't** add client-side JavaScript for any visual behaviour.
