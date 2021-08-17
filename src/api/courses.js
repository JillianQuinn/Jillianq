export default {
    fetchCourses: () =>
        new Promise((resolve, reject) =>
            resolve([
                {
                    quarter: "Fall 2021",
                    courses: [
                        {
                            name: "CSC 491: Senior Project I",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "CSC-486: Human-Computer Interaction",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "BUS-310: Intro to Entrepreneurship",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "MU-120: Music Appreciation",
                            labels: [],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 0,
                },
                {
                    quarter: "Spring 2021",
                    courses: [
                        {
                            name: "CPE 453: Introduction to Operating Systems",
                            labels: [
                                "OS",
                                "Process",
                                "Memory Systems",
                                "File Systems",
                                "Security",
                            ],
                            url: null,
                            description: "",
                        },
                        {
                            name: "CSC 445: Theory of Computation",
                            labels: [
                                "Proofs",
                                "Complexity",
                                "Decidability",
                                "Computability",
                                "Turing Machines",
                            ],
                            url: null,
                            description: "",
                        },
                        {
                            name: "BUS 311: Managing Technology in the International Legal Environment",
                            labels: ["Copyrights", "Patents", "Trademarks"],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 4.0,
                },
                {
                    quarter: "Winter 2021",
                    courses: [
                        {
                            name: "CSC 430: Programming Languages",
                            labels: [
                                "Racket",
                                "Parsing",
                                "Desugaring",
                                "Interpreters",
                                "Type Check",
                                "Haskell",
                            ],
                            url: null,
                            description: "",
                        },
                        {
                            name: "CSC 365: Introduction to Database Systems",
                            labels: [
                                "SQL",
                                "MySQL",
                                "Relational Database Management Systems",
                                "JDBC",
                            ],
                            url: null,
                            description: "",
                        },
                        {
                            name: "CSC 484: User-Centered Interface Design and Development",
                            labels: [
                                "Figma",
                                "User Interviews",
                                "User Personas",
                                "User Stories",
                                "Wireframe",
                                "Prototype",
                                "User Feedback",
                            ],
                            url: null,
                            description: "",
                        },
                        {
                            name: "CPE 321: Introduction to Computer Security",
                            labels: [
                                "Python",
                                "Key Exchange",
                                "Encryption",
                                "Hashing",
                                "Web & Software Security",
                                "Social Engineering",
                                "Xcode",
                            ],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 4.0,
                },
                {
                    quarter: "Fall 2020",
                    courses: [
                        {
                            name: "CPE 349: Design and Analysis of Algorithms",
                            labels: [
                                "Algorithms",
                                "NP/P Complete",
                                "Iterative",
                                "Divide and Conquer",
                                "Greedy",
                                "Dynamic Programming",
                            ],
                            url: null,
                            description: "",
                        },
                        {
                            name: "Phil 323: Ethics, Science, and Technology",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "Phil 231: Philosophical Classics: Ethics and Political Philosophy",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "HIST 201: US History to 1865",
                            labels: [],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 3.5,
                },
                {
                    quarter: "Spring 2020",
                    courses: [
                        {
                            name: "CPE 315: Computer Architecture (C++/Assembly)",
                            labels: ["Raspberry PI", "ARM", "C++", "Assembly"],
                            url: null,
                            description: "",
                        },
                        {
                            name: "CSC 307: Introduction to Software Engineering (Django/Postgres)",
                            labels: [
                                "Django",
                                "Postgres",
                                "Software Development",
                                "Software Testing",
                            ],
                            url: null,
                            description: "",
                        },
                        {
                            name: "STAT 312: Statistical Methods for Engineers",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "BOT 121: General Botany",
                            labels: [],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 4.0,
                },
                {
                    quarter: "Winter 2020",
                    courses: [
                        {
                            name: "CPE 357: Systems Programming (C Language)",
                            labels: ["C", "UNIX OS"],
                            url: {
                                name: "Github",
                                url: "https://github.com/JillianQuinn/SystemsProgramming",
                                icon: "fab fa-github",
                            },

                            description: "",
                        },
                        {
                            name: "CSC 348: Discrete Structures",
                            labels: ["Algorithms", "Proofs", "Graphs"],
                            url: null,
                            description: "",
                        },
                        {
                            name: "MATH 244: Linear Analysis",
                            labels: ["Swift", "Xcode"],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 4.0,
                },
                {
                    quarter: "Fall 2019",
                    courses: [
                        {
                            name: "CSC 203: Object-Oriented Programming and Design (Java)",
                            labels: [
                                "Java",
                                "OOP",
                                "Refactor",
                                "JUnit",
                                "IntelliJ",
                                "UML",
                            ],
                            url: {
                                name: "Github",
                                url: "https://github.com/JillianQuinn/SpaceGame",
                                icon: "fab fa-github",
                            },
                            description: "",
                        },
                        {
                            name: "CPE 225: Introduction to Computer Organization",
                            labels: ["Assembly", "RISC-V", "C"],
                            url: null,
                            description: "",
                        },
                        {
                            name: "MATH 241: Calculus 4",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "PHYS 133: General Physics 3",
                            labels: [],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 3.325,
                },
                {
                    quarter: "Spring 2019",
                    courses: [
                        {
                            name: "CSC 202: Data Structures (Python)",
                            labels: ["Python", "Data Structures", "PyCharm"],
                            url: {
                                name: "Github",
                                url: "https://github.com/JillianQuinn/Spring-2019-Data-Structures",
                                icon: "fab fa-github",
                            },
                            description: null,
                        },
                        {
                            name: "Math 143: Calculus 3",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "PHYS 132: General Physics 2",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "BMED 213: Bioengineering Fundamentals",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "BIO 213: Life Science for Engineers",
                            labels: [],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 3.725,
                },
                {
                    quarter: "Winter 2019",
                    courses: [
                        {
                            name: "CPE 101: Fundamentals of Computer Science",
                            labels: ["Python", "unittest"],
                            url: {
                                name: "Github",
                                url: "https://github.com/JillianQuinn/Winter-2019-Projects",
                                icon: "fab fa-github",
                            },
                            description: "",
                        },
                        {
                            name: "ENGL 149: Technical Writing for Engineers",
                            labels: [],
                            url: {
                                name: "iFixit",
                                url: "https://www.ifixit.com/Device/Lenovo_Yoga_920-13IKB",
                                icon: "fas fa-file",
                            },
                            description: "",
                        },
                        {
                            name: "Math 142: Calculus 2",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "COMS 101: Public Speaking",
                            labels: [],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 3.925,
                },
                {
                    quarter: "Fall 2018",
                    courses: [
                        {
                            name: "CPE 123: Introduction to Computing",
                            labels: [
                                "JavaScript",
                                "p5.js",
                                "Computational Art",
                            ],
                            url: {
                                name: "Github",
                                url: "https://github.com/JillianQuinn/Fall-2018-Computational-Art-Projects",
                                icon: "fab fa-github",
                            },
                            description:
                                "Wrote programs that used mathematics to define shapes, curves, color, and animations to make 2D art. Additionally, learned simple art concepts such as color and composition.",
                        },
                        {
                            name: "Math 141: Calculus 1",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "ECON 222: Macroeconomics",
                            labels: [],
                            url: null,
                            description: "",
                        },
                        {
                            name: "FSN 250: Food and Nutrition: Customs and Culture",
                            labels: [],
                            url: null,
                            description: "",
                        },
                    ],
                    GPA: 4.0,
                },
            ])
        ),
};
