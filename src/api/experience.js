export default {
    fetchExperience: () =>
        new Promise((resolve, reject) =>
            resolve([
                {
                    id: "IBM2",
                    position: "Software Developer Intern",
                    company: "IBM",
                    date: "June 2021 – Sept 2021",
                    description:
                        "Created user interface components for IBM Data Privacy with ReactJS and Redux and wrote tests with Jest",
                    links: [],
                    secondaryLinks: [],
                    labels: ["ReactJS", "Redux", "Jest"],
                    highlight: true,
                },
                {
                    id: "IBM1",
                    position: "Back and Front End Developer Intern",
                    company: "IBM",
                    date: "June 2020 – Sept 2020",
                    description:
                        "Refactored a python ML solution to integrate RabbitMQ and support retraining multiple tenant models on IBM Cloud without overloading CPU •Won 2nd place in the Intern Hackathon for a React Native app, Shopical, that parses product ingredients with OCR and queries them against my IBM DB2 instance for environmentally harmful chemicals •Created React components for the IBM Test Data Management web app",
                    links: [
                        {
                            url: "https://github.com/JillianQuinn/Shopical",
                            name: "Shopical Github",
                            icon: "fab fa-github",
                        },
                    ],
                    secondaryLinks: [],
                    labels: ["ReactJS", "Jest", "python"],
                    highlight: true,
                },
                {
                    id: "idTech",
                    position: "Coding Instructor",
                    company: "iD Tech",
                    date: "Summer 2019",
                    description:
                        "Prepared lesson plans to teach students to code with Scratch and Lego Mindstorms •Supervised students to maintain a safe and positive environment",
                    links: [],
                    secondaryLinks: [],
                    labels: [],
                    highlight: true,
                },
            ])
        ),
};
