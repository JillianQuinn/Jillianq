import React from "react";

import profilePic from "../../../assets/images/profile.png";

import "../../_common/common.css";
import "./about.css";

import ReactGA from "react-ga";

const About = () => {
    const onLinkClick = () => {
        ReactGA.event({
            category: "User",
            action: "Click on CV",
        });
    };

    return (
        <div className="home-section container-about">
            <div className="about-text">
                <span className="about-text-main">
                    {" "}
                    <span className="about-name">JILLIAN QUINN</span>
                </span>
                <br />
                <span className="about-text-subtitle">
                    Seeking software development <br /> employment for 2022
                </span>
                <br />
                <br />
                <span className="about-text-university">
                    Current Education: Cal Poly, San Luis Obispo
                </span>
                <br />
                Computer Science Undergrad • Class of 2022
                <br />
                GPA: 3.83
                <br />
                <br />
                Skills: Python, Java, JavaScript, C++, C, Swift, HTML, CSS, SQL,
                Racket, RISC-V Assembly, MERN (MongoDB, Express, ReactJS,
                Node.js), Jest, React Native, AWS Amplify & S3, Django, Git,
                JUnit, Unix Command Line, Postgres, Visual Studio Code, Xcode,
                Postman, Figma, Adobe Photoshop, Illustrator, InDesign
                <br />
                <br />
                For more information, see my{" "}
                <a
                    onClick={onLinkClick}
                    href="https://firebasestorage.googleapis.com/v0/b/jillianq-6f1da.appspot.com/o/JillianQuinn.pdf?alt=media&token=1394a68c-fdc4-449d-b322-915cfd8de9cc"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="about-cv">Resume</span>
                </a>
                <br />
                Look below for my recent projects, experience, and courses.
            </div>
            <div class="blockborder"></div>
            <img
                className="profile-picture-about"
                alt="profilepic"
                src={profilePic}
            />
        </div>
    );
};

export default About;
