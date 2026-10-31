import { getAiFirst, getExperience, getProfile, getProjects, getSkills } from './content'

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
    }
}

/** The Resume PDF, generated in a later step. */
export const resumeHref = '/Chan-Kar-Yik-Resume.pdf'
