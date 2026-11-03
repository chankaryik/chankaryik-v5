import { getCollection } from 'astro:content'
import { SHOW_DRAFTS } from 'astro:env/server'

const dateFormat = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
})

/** Formats a Post date for display, e.g. "2 Nov 2026". */
export function formatDate(date: Date): string {
    return dateFormat.format(date)
}

/** A date as YYYY-MM-DD, for `<time datetime>` and the sitemap. */
export function isoDay(date: Date): string {
    return date.toISOString().slice(0, 10)
}

// An unhurried reading pace, in words per minute
const WORDS_PER_MINUTE = 220

/**
 * Every Post the build should publish, newest first: drafts only in `astro dev`, or with
 * SHOW_DRAFTS set. Fails the build if a Post shows an image file (ADR 0001).
 */
export async function getPosts() {
    const showDrafts = import.meta.env.DEV || SHOW_DRAFTS
    const entries = await getCollection('blog', ({ data }) => showDrafts || !data.draft)
    entries.sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id),
    )
    return entries.map((entry) => {
        if (/<img\b/i.test(entry.rendered?.html ?? '')) {
            throw new Error(`${entry.filePath}: Posts show no image files (ADR 0001)`)
        }
        const words = (entry.body ?? '').split(/\s+/).filter(Boolean).length
        return {
            ...entry.data,
            id: entry.id,
            entry,
            url: `/blog/${entry.id}/`,
            minutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
        }
    })
}

export type Post = Awaited<ReturnType<typeof getPosts>>[number]

/**
 * A Post's HTML for its page. Each table sits in a region that scrolls sideways and takes
 * keyboard focus, so a wide table never widens the page on a phone.
 */
export function postHtml(post: Post): string {
    return (post.entry.rendered?.html ?? '')
        .replace(
            /<table\b/g,
            '<div class="table" role="region" aria-label="Table" tabindex="0"><table',
        )
        .replace(/<\/table>/g, '</table></div>')
}

/** One line about the blog, for its meta description and the RSS feed. */
export function blogDescription(profile: { name: string; jobTitle: string; location: string }) {
    return `Posts by ${profile.name}, a ${profile.jobTitle} based in ${profile.location}.`
}

/** The Posts for the home page: up to three flagged as featured, or the newest if none are. */
export function pickFeatured(posts: Post[]): Post[] {
    const featured = posts.filter((post) => post.featured)
    return (featured.length ? featured : posts).slice(0, featured.length ? 3 : 1)
}
