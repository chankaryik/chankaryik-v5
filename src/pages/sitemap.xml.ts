import type { APIRoute } from 'astro'
import { getPosts, isoDay } from '../lib/blog'

/**
 * Lists the pages search engines should index, on the configured `site`: the home page, and
 * once there are Posts, the blog page and every Post.
 */
export const GET: APIRoute = async ({ site }) => {
    const posts = (await getPosts()).map((post) => ({
        loc: new URL(post.url, site),
        lastmod: post.updated ?? post.date,
    }))
    const latest = posts.reduce<Date | undefined>(
        (newest, { lastmod }) => (newest && newest > lastmod ? newest : lastmod),
        undefined,
    )
    const pages = [
        { loc: new URL('/', site), lastmod: undefined },
        ...(latest ? [{ loc: new URL('/blog/', site), lastmod: latest }] : []),
        ...posts,
    ]
    const urls = pages.map(
        ({ loc, lastmod }) => `    <url>
        <loc>${loc}</loc>${lastmod ? `\n        <lastmod>${isoDay(lastmod)}</lastmod>` : ''}
    </url>`,
    )
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`
    return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}
