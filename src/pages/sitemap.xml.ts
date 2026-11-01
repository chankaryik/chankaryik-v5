import type { APIRoute } from 'astro'

/** Lists the home page, the only page search engines should index, on the configured `site`. */
export const GET: APIRoute = ({ site }) => {
    const home = new URL('/', site)
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${home}</loc>
    </url>
</urlset>
`
    return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}
