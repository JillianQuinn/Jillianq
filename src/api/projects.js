export default {
    fetchProjects: () =>
        new Promise((resolve, reject) =>
            resolve([
                {
                    id: "Paso Robles Youth Arts Volunteer Management Web App",
                    name: "Paso Robles Youth Arts Volunteer Management Web App",
                    subtitle: "Technical Lead and Full Stack Developer",
                    description:
                        "As Tech Lead, I lead weekly stand-ups, created and distributed sprint responsibilities, performed code reviews, ensured CI/CD workflow, wrote project documentation, and communicated with the nonprofit, PM, designer, and developers. <br/><br/> This MERN web app serves as a volunteer sign-up system to make it easier for volunteers to register, as well as see their impact. Admins can create and edit events, manage volunteer data, view volunteer profiles, export CSV reports, and more. This app is developed with the MERN stack (ReactJS, ExpressJS, Node.js, MongoDB, JavaScript, HTML/CSS) and deployed with AWS Amplify, and uses an S3 bucket to store images. <br/><br/>",
                    links: [
                        {
                            url: "https://youtharts-volunteer.h4i-cp.org/",
                            name: "Live Website",
                            icon: "fab fa-react",
                        },
                    ],
                    secondaryLinks: [
                        {
                            url: "https://youtharts-volunteer.h4i-cp.org/",
                            name: "Live Website",
                            icon: "fab fa-react",
                        },
                        {
                            url: "https://github.com/hack4impact-calpoly/youthArts",
                            name: "Github Repo",
                            icon: "fab fa-github",
                        },
                        {
                            url: "https://youtu.be/dGJTT230F7o",
                            name: "Project Demo",
                            icon: "fab fa-youtube",
                        },
                    ],
                    imageDescription: [
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/landingpagefull.png?alt=media&token=e3f50c27-2ac5-4143-9d9e-65ee3237bb6d",
                            caption:
                                "Landing page to learn more about Paso Robles Youth Arts, register or log in, and see upcoming volunteer opportunities",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/fulldashboard.png?alt=media&token=71999b02-b857-44cd-991c-cf1e53b569ff",
                            caption:
                                "Dashboard page to see the user's total impact on the organization, current and previous shift registration, and shift cancellation",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/reportsselected.png?alt=media&token=0980ea6e-dc6a-49a7-818b-41bf4543aeae",
                            caption:
                                "Reports page for the nonprofit's admin to export information about the current and previous volunteer events, the volunteers that registered, and the items they donated.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/directory.png?alt=media&token=5ab56d5a-4d1a-4ede-bebf-53f32778b740",
                            caption:
                                "Directory page for the nonprofit's admin to search and find volunteers.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/profile3.png?alt=media&token=c8aacea5-4887-4ef4-88c8-564f983c9828",
                            caption:
                                "Profile page connected to the directory page for the nonprofit's admin to contact the volunteers, see what they signed up for, and leave notes to remember who they are.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/cartfull.png?alt=media&token=8ac8241d-fbc6-44ad-9986-7ea86e588579",
                            caption:
                                "Cart to allow the volunteer to bulk register for volunteer opportunities and select times for their shift.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/opportunitydetailfull2.png?alt=media&token=4e0efc2a-a060-418c-83c4-be520f860f5a",
                            caption:
                                "Detailed page of a volunteer opportunity so that a volunteer can register for a shift or donate. The nonprofit admin can only see the table of registered volunteers to check them in and out when the event starts.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/editopportunityfull.png?alt=media&token=24283b4d-d304-434a-8474-ee0b9eb853f1",
                            caption:
                                "A form for the admin to create or edit volunteer event",
                        },
                    ],
                    demoVideo: "https://www.youtube.com/embed/dGJTT230F7o",
                    labels: [
                        "MERN",
                        "ReactJS",
                        "ExpressJS",
                        "Node.js",
                        "MongoDB",
                        "JavaScript",
                        "HTML/CSS",
                    ],
                    imgSmall:
                        "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/paso.png?alt=media&token=41126690-4ec2-40bc-a5b2-c1b726350b54",
                    img: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/paso.png?alt=media&token=41126690-4ec2-40bc-a5b2-c1b726350b54",
                    highlight: true,
                },
                {
                    id: "Shopical",
                    name: "Shopical",
                    subtitle: "2nd Place in the 2020 IBM Intern Hackathon",
                    description:
                        "Won 2nd Place in the 2020 IBM Intern Hackathon out of 900 interns and 126 teams. <br/><br/>The Shopical mobile app provides a way for consumers to check the sustainability of ingredients in beauty and food products in real-time. <br/> Users can take a photo of the ingredients list of a product and instantly receive color-coded information about the environmentally harmful chemicals present to empower individuals to make purchases that are better for the environment. It works by sending the photo in base64 encoding format to the Node.js backend server deployed on IBM Cloud. The text is extracted with an OCR API, and parsed. The ingredients are then queried with SQL statements against my IBM DB2 database instance with harmful ingredients.<br/><br/>",
                    links: [
                        {
                            url: "https://github.com/JillianQuinn/Shopical",
                            name: "Github Repo",
                            icon: "fab fa-github",
                        },
                    ],
                    secondaryLinks: [
                        {
                            url: "https://github.com/JillianQuinn/Shopical",
                            name: "Github Repo",
                            icon: "fab fa-github",
                        },
                        {
                            url: "https://docs.google.com/presentation/d/1CW5WOTQiPHPXGwLONWaUFSEp0OAMON2r1Bjp6r1b-pk/edit?usp=sharing",
                            name: "Presentation Slides",
                            icon: "fab fa-google-drive",
                        },
                        {
                            url: "https://drive.google.com/file/d/1nXOIFMAw-VRlAHSY67xHw09qbzU29sMD/view?usp=sharing",
                            name: "Demo Video",
                            icon: "fab fa-youtube",
                        },
                    ],
                    demoVideo: "https://www.youtube.com/embed/D0KDXQS8xEs",
                    imageDescription: [
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/IngredientList.gif?alt=media&token=930f8f34-e058-47b4-81d1-27156cbc92f2",
                            caption:
                                "Environmental activists and researchers identified hundreds of chemicals and compounds that as harmful to our environment. The Shopical mobile app provides a way for consumers to check the sustainability of ingredients in beauty and food products in real-time. Users can scan the ingredients list of a product and instantly receive information about the environmentally harmful chemicals present. We hope that this will empower individuals to make purchases that are better for the environment.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/homescreen.png?alt=media&token=9d8665e2-1bb0-4e6f-b950-c346b4205a17",
                            caption:
                                "When the user is at a store aisle and finds a product that they want to know more about, they can take out their phone and open the app. From the homescreen, they will click 'Go to Camera; and it will navigate to the camera screen where they can take a photo of the product's ingredient list.",
                        },

                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/fetching%20ingredients.png?alt=media&token=b47233c3-8392-4408-a1f0-8e323569fc96",
                            caption:
                                "Loading screen after the user scans the ingredient list of the product.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/sunscreen.png?alt=media&token=6db0890a-8526-4f19-beb6-c19f4be07e47",
                            caption:
                                "The user then can then see the color-coded list of matching ingredients in descending order of harmfulness to the environment. The red ingredients are the most toxic and the green are fairly safe for the environment. The user can click on each ingredient to view a short description of its' effect on the environment.",
                        },

                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/TechnicalArchitecture.png?alt=media&token=61972b0b-d961-4f5c-a2d7-d929b46e3b25",
                            caption: "Technical architecture map",
                        },
                    ],
                    labels: [
                        "React Native",
                        "IBM DB2",
                        "SQL",
                        "Node.js",
                        "HTML/CSS",
                    ],
                    imgSmall:
                        "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/shopical.png?alt=media&token=fbc959bc-b518-407d-9f73-6876ff23a6d1",
                    img: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/shopical.png?alt=media&token=fbc959bc-b518-407d-9f73-6876ff23a6d1",
                    highlight: true,
                },
                {
                    id: "Cal Poly Cat Program Mobile",
                    name: "Cal Poly Cat Program Mobile",
                    subtitle: "Developed as a part of Hack4imapact Cal Poly",
                    description:
                        "As a Full Stack Mobile Developer, I self-taught myself Swift and SwiftUI and worked with another student to create this app for the Cal Poly Cat Program to assist with administrative tasks. It allows volunteers to add new cat profiles, view current cats, and schedule events such as foster or adoption appointments. Previously, the organization stored this information on paper lists and excel spreadsheets, but now they have an easier time staying organized. The app currently stores information for over 230 cats. ",
                    links: [
                        {
                            url: "https://github.com/hack4impact-calpoly/SLO_cat_shelter_mobile",
                            name: "Github",
                            icon: "fab fa-github",
                        },
                    ],
                    imageDescription: [
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/cpcp.png?alt=media&token=d85d16dc-e158-4ff8-b95a-90f7da6cb22f",
                            caption:
                                "Built with SwitUI, Cal Poly Cat Program's application assists with administrative tasks.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/cpcpapp.png?alt=media&token=d79247e0-6ec5-404e-87c0-d6679c36e8a4",
                            caption:
                                "Volunteers can add new cat profiles, view current cats, and schedule events such as foster or adoption appointments.",
                        },
                    ],
                    secondaryLinks: [
                        {
                            url: "https://github.com/hack4impact-calpoly/SLO_cat_shelter_mobile",
                            name: "Github",
                            icon: "fab fa-github",
                        },
                        {
                            url: "https://apps.apple.com/us/app/cal-poly-cat-program/id1534260106#?platform=iphone",
                            name: "App Store",
                            icon: "fab fa-app-store",
                        },
                    ],
                    labels: ["Swift", "Xcode", "SwiftUI"],
                    imgSmall:
                        "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/cpcp.png?alt=media&token=d85d16dc-e158-4ff8-b95a-90f7da6cb22f",
                    img: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/cpcp.png?alt=media&token=d85d16dc-e158-4ff8-b95a-90f7da6cb22f",
                    highlight: true,
                },
                {
                    id: "Kash",
                    name: "Kash",
                    subtitle:
                        "First Web Dev Experience: Django Web App for Software Engineering Course",
                    description:
                        "Built for CSC 307 on a team of three students, we developed a web app in 7 weeks, mimicing the product lifecycle with sprints and rotated as acting Product Manager. <br/><br/> Kash is a budgeting web application that allows users to keep track of their spending, set budgeting goals, and challenge their friends to hit savings goals first. There are three user types consisting of a budgeter/moneymaker, a dependent/friend of the budgeter/moneymaker, and an anonymous user. The primary goal is to enable users to keep track of their own budgets and the secondary goal is to introduce a social aspect. This social aspect encompasses the ability to create public budgets and to challenge friends. The tech stack is a Django web app written in python with a Postgres backend. There also is a Teller.io integration to pull recent credit card transactions.<br/><br/>",
                    imageDescription: [
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/kash.png?alt=media&token=a2289768-eb1e-4d6b-98b8-053ed1a5807f",
                            caption:
                                "This spending overview breaks down all of the users' recent purchases by category so that they can visually see where they are spending the most money and can try to save money. The user will be able to see a visual breakdown of their spending and can then decide how to improve their budget in the next month. The more purchases in each category, the more of the pie chart the transaction will take up.",
                        },

                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/browsebudgets.png?alt=media&token=e18be213-ae54-4f3b-a93a-2504b7f5d999",
                            caption:
                                "An anonymous or registered user may be interested in getting started or re-evaluating their own budgeting goals. They can use this feature to find and narrow budgets that match their preferences - e.g. by income. ",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/budgetdetail.png?alt=media&token=f14bce47-4f99-49d0-8edb-2702bb68d644",
                            caption:
                                "View the budget in detail. Registered users can copy and import the budget or share with a friend. An anonymous user will be prompted to create an account in order to perform such actions.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/importbudges.png?alt=media&token=53e199f7-93a1-44b1-b254-401515f65328",
                            caption:
                                "This goal creator allows a moneymaker user to set budgeting goals for themself and their dependents. Users will be able to see their spendings in regard to their goals and to see whether they are on track with their goals, or did not reach them. They will be able to create new goals, to modify existing goals, and to delete existing goals.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/createaccount.png?alt=media&token=e0c49cf0-09bc-424b-b0ae-22496408c4fa",
                            caption:
                                "Create a user account with basic typechecking",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/kashuserflow.jpeg?alt=media&token=e5d26e2f-37d3-47c5-9afc-6b99974bdbd0",
                            caption:
                                "Kash task flow diagram from the end user perspective.",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/kashuml.png?alt=media&token=3ed49afe-b6b9-45b1-8d9a-e97d9aabcea4",
                            caption:
                                "Kash UML of data structures from a developer perspective",
                        },
                    ],
                    labels: ["Django", "Python", "HTML/CSS", "Postgres"],
                    imgSmall:
                        "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/kash.png?alt=media&token=a2289768-eb1e-4d6b-98b8-053ed1a5807f",
                    img: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/kash.png?alt=media&token=a2289768-eb1e-4d6b-98b8-053ed1a5807f",
                    highlight: true,
                },
                {
                    id: "HeuristicEvaluation",
                    name: "Heuristic Evaluation: Google Dark Theme",
                    subtitle:
                        "CSC 486: Human Computer Interaction",
                    description:
                        "Google is a powerful tool that allows people to request information, as it scrapes the web for answers and related resources, effectively organizing and collecting everything to make knowledge more accessible. In September of 2021, Google officially released functionality to support dark themes. The UX trend, dark mode, is the ability to invert the colors in a user interface, making the lightly colored background black and the black colored components white. It has existed since the first computer screens were made with cathode ray tubes. Illuminating the entire screen took significant energy, so it only lit the lightly colored text on the naturally black background. However, with a shift to LCD technology, where the screen is backlit, user interfaces began using light backgrounds with dark text. The recent advancement of using OLED screens in some monitors and phones that light up each pixel individually is encouraging the UX trend, dark mode, to return.  <br/><br/> This evaluation considers a few of Jakob Nielson’s Usability Heuristics from his studies on usability engineering. <br/>It was conducted on a 13” MacBook Pro on Firefox and Google Chrome.<br/><br/> ",
                    imageDescription: [
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/GoogleHomescreen.png?alt=media&token=31d16805-c438-4f90-b9fc-869872cc3652",
                            caption:
                                "Simple and natural dialogue <br/><br/> User interfaces should be as simple as possible and emphasize the most relevant features for the user. <br/><br/> In the case of Google’s search engine, the home screen centers the search box on the page, drawing the users’ attention to the most important function of the page, the search box where the user should input their request. Therefore, it effectively does not distract the user with unnecessary information and actions.<br/><br/> Additionally, the “Google” logo is simplified to only the color white instead of the classic, colorful logo to provide a crisper experience for the user to read high contrast white on black text. Reading colorful text with a black background could cause the user unnecessary eye strain and may not be accessible for people with colorblindness. <br/><br/>",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/colorschemegoogle.png?alt=media&token=9db0e667-5bec-486c-9938-a9cc217dc0e1",
                            caption:
                                "Simple and natural dialogue <br/><br/> With respect to color, it is better to limit to a few consistent colors and only use it to highlight rather than to provide valuable information. <br/><br/> On the page where the user can see the search results, the color scheme is still simple. It consists of a dark grey background, blue unvisited links, purple links that the user has visited, and light grey for the link descriptions. These four colors are simple and pleasing to the eye, and most importantly, do not distract the user. <br/><br/>",
                        },

                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/darklightsettings.png?alt=media&token=50912cdf-1943-451b-9dc9-de47360a3fd8",
                            caption:
                                "Speak the users’ language<br/><br/> User interfaces should use terminology that the user understands and metaphors that map the functionality to something that the user understands in the real world. Google does this by using the terminology “Dark theme: On” and a moon icon to represent the dark grey and black theme, and “Dark theme: Off” and a sun icon, similar to the brightness icon, to represent the light color theme and backgrounds. This is intuitive to the user because the dark theme uses primarily dark colors. Additionally, it mimics users’ expectations based on the world around them because a user associates the moon with nighttime and, therefore, darkness; when their surroundings turn dark at night, they expect their technology to match that, as well. This terminology and metaphor help the user remember the meaning of the setting and make the change feel less drastic.<br/><br/>",
                        },
                        {
                            url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/autocomplete.png?alt=media&token=21f1273a-50e7-41c2-9a4f-5c9774b7afa1",
                            caption:
                                "Minimize user memory load <br/><br/> Interfaces should remember information and the users’ preferences to limit what the user needs to recall and input. To do this, Google automatically stores the users’ preference to use Dark Mode, Light Mode, or Auto based on their previous selection. Therefore, the user does not need to re-input their preference every time they use Google. It also considers what the user picked on their devices’ system preferences. <br/><br/>  Another way that Google Search effectively minimizes user memory load is by using auto-complete in the search bar to help suggest what the user should search. To continue the dark theme, these items are displayed in white text in the same font style as the users’ current input, helping the user clearly see the relation in the search suggestions and better assist them in formulating their search query.<br/><br/>  ",
                        },
                        
                    ],
                    labels: [],
                    imgSmall:
                        "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/GoogleHomescreen.png?alt=media&token=31d16805-c438-4f90-b9fc-869872cc3652",
                    img: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/GoogleHomescreen.png?alt=media&token=31d16805-c438-4f90-b9fc-869872cc3652",
                    highlight: true,
                    conclusion: "Though Googe only recently added dark mode, it has the potential to influence a variety of other interfaces to incorporate it as well. Additionally, as people use screens more in their daily life, they are in support of methods to reduce eye strain, increase battery life, and promote focus, which are all helpful features of dark mode. By utilizing dark themes, Google is effectively creating a better user experience for its users. <br/><br/> ",
                },
            ])
        ),
};
// {
//     id: "Health App",
//     name: "Health App for Baby Boomer Generation",
//     subtitle: "User Research and Figma UI/UX",
//     description:
//         "This prototype was for my User Interface and Experience course, and we focused on the health of the Baby Boomer generation. This user group reports that they do not have access to or understand resources that explain what daily decisions and factors contribute to their long-term health. I collaborated with two students to develop a prototype that provides quick and easy feedback to help baby boomers monitor and improve their overall health. The features are customized to fit each person's health goals, which will ensure that the product provides maximum functionality. While designing our prototype, we were mindful of the user’s experience. Not only is it important to have features that fulfill the user’s needs, but the user also needs to be comfortable while using the product. The app records daily calorie intake and burn, heart rate, blood sugar, daily steps, food groups consumed (carbohydrates, fats, fruits, vegetables, sugar, etc). With this information, they can make improvements on their consumption, receive and send alerts to themselves, family, or doctor at specified times, remind the user to log daily health routine needs, view past data to track progression in health and set goals, and see foods logged in red that contribute to health concerns. <br/><br/> Summary<br/> Baby Boomers have a difficult time managing their health. Boomers report that they do not have access to or understand resources that explain what daily decisions and factors contribute to their long-term health. Our goal is to develop a prototype that provides quick and easy feedback to help baby boomers monitor and improve their overall health. There will be features that users can customize to fit their own health goals, which will ensure that the product provides maximum functionality. While designing our prototype, we were mindful of the user’s experience. Not only is it important to have features that fulfill the user’s needs, but the user also needs to be comfortable while using the product. This idea guided our prototype iterations to enhance the user experience while maintaining maximum functionality. <br/><br/>Background <br/> The baby boomer generation includes people born between 1946 and 1964. People in this age group are at or near the age of retirement, and as they spend less time at work, they need ways to keep busy and maintain their health. Usually, their children or grandchildren are concerned about their health and want to know with confidence that they are making the best daily decisions for their well-being.<br/> Studies done by the United Health Foundation have found that compared to the generation prior, baby boomers have a 55% higher prevalence of diabetes, 25% higher presence of obesity, and 9% lower instances of very good or excellent health statuses. Therefore, it is important that baby boomers are aware of what contributes to these health concerns. <br/> Furthermore, most baby boomers are not familiar with new technologies and have a difficult time adopting these new advancements. For them, calling is easier than texting, using paper is more familiar than the internet, and technology is not simple. With these things in mind, our goal is to create a product that enables and empowers the baby boomer generation to more easily and effectively manage their health. <br/><br/>Our Vision<br/> The new design of a biometric tracker and mobile app will help Baby Boomers achieve their goal of staying healthy. They then can live fulfilled lives and avoid future health complications. <br/><br/>Design<br/> How might we make personal health information easy for users to access and understand?<br/> The user will use this solution throughout the day: during and after any form of exercise, while choosing the next meal or snack, after eating, and when deciding if it is necessary to exercise at that moment. This app will integrate smoothly into their daily life, such that the user will open the app multiple times a day to view all health metrics at a glance. The user will be constantly aware of how their daily decisions influence their overall health, but not so often or too long to make the user frustrated, distracted, or impatient with the product. They will have the ability to check or not check their statistics and alerts as often as they want.<br/> <br/>How might we make baby boomers more aware of common health concerns that could affect them and their generation?<br/> Each user will have their own device and connected health app to store and access individual health data, and it will make personalized recommendations based on their daily activity. In order for the device and app to be most accurate and effective, the user should wear their biometric device at all times, track their daily caloric intake, log their health concerns, and view the daily activity tracked by the device on the mobile app daily. This will allow the app to make relevant and tailored recommendations for its user.<br/> <br/>The end product will be a live, comprehensive summary of the user’s health, including:  <br/>• Daily calorie intake and burn that they can compare with previous days <br/>• Heart Rate <br/>• Blood sugar <br/>• A breakdown of their main food groups (carbohydrates, fats, fruits, vegetables, sugar, etc) and how they can make improvements <br/>• Steps in a day<br/><br/>The product will also have additional features to: <br/>• Send alerts to the user at specified times<br/>• Send alerts to an emergency contact, family members, and or doctors if there are any pressing health concerns and a way for the doctor to respond and make suggestions <br/>• Remind and allow the user to log daily health routine needs (medication, vitamins, water, stretching, etc)<br/>• Display past data using their account to track progression in health and set goals<br/>• Highlight foods logged in red that contribute to health concerns<br/><br/>The device and app will sync automatically and be easy to understand. Many baby boomers do not have extensive experience or confidence with technology, so the app will have clear instructions, large text, and many visual indications to display if they are being healthy or how they should make changes to their routine.<br/><br/>",
//     // links: [
//     //     {
//     //         url: "https://youtharts-volunteer.h4i-cp.org/",
//     //         name: "Live Website",
//     //         icon: "fab fa-react",
//     //     },
//     // ],
//     secondaryLinks: [
//         {
//             url: "https://www.figma.com/file/r46yccAHDMKE43gqZDaVo8/484-Prototype?node-id=0%3A1",
//             name: "Figma",
//             icon: "fab fa fa-object-group",
//         },
//         {
//             url: "https://docs.google.com/document/d/15jQfg4rmxLS4YOQNrgIVgtNCbHCIdXALHxHZCHuInwk/edit?usp=sharing",
//             name: "Final Paper",
//             icon: "fab fa-google-drive",
//         },
//     ],
//     imageDescription: [
//         {
//             url: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/Screen%20Shot%202021-08-01%20at%2011.46.22%20AM.png?alt=media&token=250e788a-4e29-46c6-bfd3-970589239f4c",
//             caption: "The Figma prototype",
//         },
//     ],
//     labels: ["Figma", "UI/UX", "User Research"],
//     imgSmall:
//         "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/Screen%20Shot%202021-08-01%20at%2011.46.22%20AM.png?alt=media&token=250e788a-4e29-46c6-bfd3-970589239f4c",
//     img: "https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/Screen%20Shot%202021-08-01%20at%2011.46.22%20AM.png?alt=media&token=250e788a-4e29-46c6-bfd3-970589239f4c",
//     highlight: true,
// },
