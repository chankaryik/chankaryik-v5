import { defineCollection } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'

// A calendar month written as YYYY-MM, e.g. 2018-03
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use YYYY-MM')

// Who Chan Kar Yik is and how to reach them. The body is the About paragraph.
const about = defineCollection({
    loader: glob({ pattern: 'about.md', base: './src/content' }),
    schema: z.object({
        name: z.string(),
        headline: z.string(),
        // The craft alone, for the page title and structured data
        jobTitle: z.string(),
        location: z.string(),
        description: z.string(),
        email: z.email(),
        linkedin: z.url(),
        github: z.url(),
        contactLine: z.string(),
    }),
})

// How Chan Kar Yik works with AI. The body is the opening statement.
const ai = defineCollection({
    loader: glob({ pattern: 'ai.md', base: './src/content' }),
    schema: z.object({
        heading: z.string(),
        points: z
            .array(
                z.object({
                    title: z.string(),
                    // One of the site's own line icons, see src/components/Icon.astro
                    icon: z.enum(['code', 'chat', 'loop', 'arrow-right']),
                    text: z.string(),
                }),
            )
            .min(1),
    }),
})

// The aside after Skills: a joke in three beats, read in order. The body is the serious answer.
const rust = defineCollection({
    loader: glob({ pattern: 'rust.md', base: './src/content' }),
    schema: z.object({
        heading: z.string(),
        setup: z.string(),
        confession: z.string(),
        punchline: z.string(),
    }),
})

const projects = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/projects' }),
    schema: z.object({
        name: z.string(),
        client: z.string(),
        // null means Freelance: built directly for the Client, with no Agency
        agency: z.string().nullable(),
        year: z.number().int(),
        stack: z.array(z.string()).min(1),
        url: z.url().optional(),
        selected: z.boolean().default(false),
        // Position among Projects from the same year, lowest first. Projects without one
        // follow, alphabetically.
        order: z.number().int().optional(),
    }),
})

const roles = defineCollection({
    loader: file('src/content/roles.yaml'),
    schema: z.object({
        title: z.string(),
        // null means Freelance
        company: z.string().nullable(),
        // The company's website, linked from its name
        url: z.url().optional(),
        start: month,
        // null means the Role is current
        end: month.nullable(),
    }),
})

const skills = defineCollection({
    loader: file('src/content/skills.yaml'),
    schema: z.object({
        name: z.string(),
        // Display position, lowest first. Astro does not keep the file's order.
        order: z.number().int(),
        items: z.array(z.string()).min(1),
    }),
})

// One Markdown file per Post; the file name is its address, /blog/<file-name>/
const blog = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        // The standfirst under the title, the meta description and the summary in lists and RSS
        description: z.string(),
        // Written YYYY-MM-DD
        date: z.coerce.date(),
        updated: z.coerce.date().optional(),
        // Shown in the Blog section on the home page
        featured: z.boolean().default(false),
        // Shown in `astro dev` only, never in a production build
        draft: z.boolean().default(false),
    }),
})

export const collections = { about, ai, blog, projects, roles, rust, skills }
