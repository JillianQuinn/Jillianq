export default {
    fetchSocials: () =>
        new Promise((resolve, reject) =>
            resolve([
                {
                    name: "email",
                    text: "jiquinn@calpoly.edu",
                    icon: "fas fa-envelope",
                    url: "mailto:jiquinn@calpoly.com",
                },
                // {
                //     name: "secondemail",
                //     text: "jillian@jillianq.com",
                //     icon: "fas fa-envelope",
                //     url: "mailto:jillian@jillianq.com",
                // },
                {
                    name: "github",
                    text: "",
                    icon: "fab fa-github",
                    url: "https://github.com/JillianQuinn",
                },
                {
                    name: "linkedin",
                    text: "",
                    icon: "fab fa-linkedin-in",
                    url: "https://www.linkedin.com/in/jillian-quinn/",
                },
            ])
        ),
};
