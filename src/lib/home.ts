import { getPosts, pickFeatured } from './blog'
import { getAiFirst, getExperience, getProfile, getProjects, getRust, getSkills } from './content'

/** Everything the home page shows, in section order. */
export async function getHome() {
    const projects = await getProjects()
    return {
        profile: await getProfile(),
        aiFirst: await getAiFirst(),
        selectedProjects: projects.filter((project) => project.selected),
        otherProjects: projects.filter((project) => !project.selected),
        experience: await getExperience(),
        skills: await getSkills(),
        featuredPosts: pickFeatured(await getPosts()),
        rust: await getRust(),
    }
}
