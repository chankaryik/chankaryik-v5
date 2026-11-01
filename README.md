# chankaryik-v5

Personal website of Chan Kar Yik, served at [www.chankaryik.com](https://www.chankaryik.com). A static Astro site that sends visitors no JavaScript.

- [docs/brief.md](docs/brief.md): what the site is and every agreed requirement
- [GLOSSARY.md](GLOSSARY.md): the words used for the site's content
- [docs/adr/](docs/adr/): hard-to-reverse decisions and why

## Editing content

All content lives in `src/content/`:

- `projects/`: one Markdown file per Project. `selected: true` shows it in full on the home page; `agency: null` means Freelance; the optional `order` sets the position among Projects from the same year.
- `roles.yaml`: work history. `company: null` means Freelance; `end: null` means current; `url` links the company name to its website (give it on every Role at that company).
- `skills.yaml`: skill groups. `order` sets the display position. A skill shows its logo when Simple Icons has one, or when its SVG path is copied into `src/components/BrandLogo.astro`; map new names there.
- `about.md`: name, Headline, contact details, and the About paragraph
- `ai.md`: the AI-first section. The body is the opening statement; each point picks one of the site's line icons.
- `rust.md`: the aside after Skills. `setup`, `confession` and `punchline` are the joke's three beats; the body is the serious answer, and its bold last line is the sign-off.

The build checks every field, so a missing or misspelled field fails the build instead of going live.

## Commands

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check, then build to dist/
npm run preview  # serve dist/ locally
npm run format   # Prettier
```
