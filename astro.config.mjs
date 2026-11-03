// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config'
import { inkTheme, inkTransformer } from './src/lib/code-blocks'

// https://astro.build/config
export default defineConfig({
    site: 'https://www.chankaryik.com',
    // One Google Fonts family for all text, downloaded at build time and served from this
    // site: variable, Latin only. `optional` means a slow first visit keeps the fallback font
    // instead of swapping mid-read. The italic file is for emphasis in Posts and is never
    // preloaded, so pages without italics never fetch it.
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Archivo',
            cssVariable: '--font-archivo',
            weights: ['100 900'],
            styles: ['normal', 'italic'],
            subsets: ['latin'],
            formats: ['woff2'],
            display: 'optional',
            // The fallback faces live in src/styles/global.css
            fallbacks: [],
        },
    ],
    markdown: {
        shikiConfig: { theme: inkTheme, transformers: [inkTransformer] },
    },
    env: {
        schema: {
            // Builds draft Posts too, to check them in a production build. Never set it on Vercel.
            SHOW_DRAFTS: envField.boolean({ context: 'server', access: 'public', default: false }),
        },
    },
    build: {
        // Inline the stylesheet so the first load is the HTML and the font, nothing else
        inlineStylesheets: 'always',
    },
    // The dev toolbar is client-side JavaScript; keep local previews as close to the build as possible
    devToolbar: { enabled: false },
})
