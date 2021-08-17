import About from "./about/About";
import WorkContainer from "./work/WorkContainer";
import ExperienceContainer from './experience/ExperienceContainer'
import Contact from "./contact/Contact";
import CoursesContainer from './Courses/CoursesContainer'

const SECTIONS = [
    {
        name: "About",
        component: About
    },
    {
        name: "Projects",
        component: WorkContainer
    },
    {
        name: "Experience",
        component: ExperienceContainer
    },
    {
        name: "Courses",
        component: CoursesContainer
    },
    {
        name: "Contact",
        component: Contact
    }
]   

export default SECTIONS;