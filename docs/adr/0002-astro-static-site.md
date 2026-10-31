# Astro static site, not Vue

Chan Kar Yik specializes in Vue and v4 was a Vue single-page app, yet v5 is built with Astro and deployed as plain static files. ADR 0001 forbids client-side JavaScript: Astro sends none by default and turns each Markdown file into its own page for the future blog, while the Vue-based options are built around sending Vue to the browser and would have to be fought to remove it.

## Considered Options

- **Nuxt (`nuxt generate`) with Nuxt Content**: keeps Vue, but ships the Vue runtime unless it is stripped out against the framework's grain.
- **Eleventy**: lean and Markdown-native, but its templates are untyped and it has no real component model.
- **Hand-written HTML with a custom build script**: full control, but we would own and maintain the generator.
