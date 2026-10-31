// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    site: 'https://www.chankaryik.com',
    // One Google Fonts family for all text, downloaded at build time and served from this
    // site: variable, upright, Latin only. `optional` means a slow first visit keeps the
    // fallback font instead of swapping mid-read.
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Archivo',
            cssVariable: '--font-archivo',
            weights: ['100 900'],
            styles: ['normal'],
            subsets: ['latin'],
            formats: ['woff2'],
            display: 'optional',
            // The fallback faces live in src/styles/global.css
            fallbacks: [],
        },
    ],
    build: {
        // Inline the stylesheet so the first load is the HTML and the font, nothing else
        inlineStylesheets: 'always',
    },
    // The dev toolbar is client-side JavaScript; keep local previews as close to the build as possible
    devToolbar: { enabled: false },
})
