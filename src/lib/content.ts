import { getCollection, getEntry, render } from 'astro:content'

const monthFormat = new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
})

/** Formats a YYYY-MM month for display, e.g. "Jun 2026". */
export function formatMonth(month: string): string {
    return monthFormat.format(new Date(`${month}-01T00:00:00Z`))
}

/** Name, Headline, contact details and the About paragraph. */
export async function getProfile() {
    const entry = await getEntry('about', 'about')
    if (!entry) throw new Error('src/content/about.md is missing')
    const { Content } = await render(entry)
    return { ...entry.data, About: Content }
}

/** Every Project, newest first, with its rendered description. */
export async function getProjects() {
    const entries = await getCollection('projects')
    entries.sort((a, b) => b.data.year - a.data.year || a.data.name.localeCompare(b.data.name))
    return Promise.all(
        entries.map(async (entry) => ({
            ...entry.data,
            Description: (await render(entry)).Content,
        })),
    )
}

/**
 * Roles grouped by company, newest first. Consecutive Roles at the same company
 * become one line of progression, with titles listed oldest first.
 */
export async function getExperience() {
    const roles = (await getCollection('roles'))
        .map((entry) => entry.data)
        .sort((a, b) => b.start.localeCompare(a.start))

    const groups: { company: string | null; roles: typeof roles }[] = []
    for (const role of roles) {
        const group = groups.at(-1)
        if (group && group.company === role.company) group.roles.unshift(role)
        else groups.push({ company: role.company, roles: [role] })
    }

    return groups.map(({ company, roles }) => ({
        company,
        titles: roles.map((role) => role.title),
        start: roles[0]!.start,
        end: roles.at(-1)!.end,
    }))
}

/** Skill groups in display order. */
export async function getSkills() {
    return (await getCollection('skills'))
        .map((entry) => entry.data)
        .sort((a, b) => a.order - b.order)
}
