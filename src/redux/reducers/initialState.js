import { List } from "immutable"

export default {
    projects: new List(),
    courses: new List(),
    experience: new List(),
    socials: new List(),

    isFetchingProjects: false,
    isFetchingExperience: false,
    isFetchingCourses: false,
    isFetchingSocials: false,
}