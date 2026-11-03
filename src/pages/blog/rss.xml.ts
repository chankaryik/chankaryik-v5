import type { APIRoute } from 'astro'
import { blogDescription, getPosts } from '../../lib/blog'
import { getProfile } from '../../lib/content'

/** Escapes text for an XML element or attribute. */
function xml(text: string): string {
    return text
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
}

/** Wraps HTML in a CDATA section, splitting any `]]>` it contains. */
function cdata(html: string): string {
    return `<![CDATA[${html.replaceAll(']]>', ']]]]><![CDATA[>')}]]>`
}

/** An RSS 2.0 feed of every published Post, newest first, with the full text of each. */
export const GET: APIRoute = async ({ site }) => {
    const profile = await getProfile()
    const posts = await getPosts()
    const blog = new URL('/blog/', site)
    const self = new URL('/blog/rss.xml', site)

    const items = posts.map((post) => {
        const link = new URL(post.url, site).href
        // Feed readers show the text away from the site, so root-relative links get the domain
        const html = (post.entry.rendered?.html ?? '').replace(
            /(href|src)="\//g,
            `$1="${new URL('/', site).href}`,
        )
        return `        <item>
            <title>${xml(post.title)}</title>
            <link>${link}</link>
            <guid isPermaLink="true">${link}</guid>
            <pubDate>${post.date.toUTCString()}</pubDate>
            <description>${xml(post.description)}</description>
            <content:encoded>${cdata(html)}</content:encoded>
        </item>`
    })

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
        <title>${xml(`${profile.name} — Blog`)}</title>
        <link>${blog}</link>
        <description>${xml(blogDescription(profile))}</description>
        <language>en</language>
        <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items.join('\n')}
    </channel>
</rss>
`
    return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
