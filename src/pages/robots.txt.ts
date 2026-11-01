import type { APIRoute } from 'astro'

/** Lets every crawler in and points it to the sitemap, on the configured `site`. */
export const GET: APIRoute = ({ site }) => {
    const sitemap = new URL('/sitemap.xml', site)
    const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`
    return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
