import React from "react";

import ExperienceLabel from "./ExperienceLabel";

import "./Experience.css";

const Experience = ({ experience, onClick }) => {
    const className = experience.highlight ? "highlight-card" : "normal-card";

    return (
        <div
            className={
                "experience-card clickable text-unselectable " + className
            }
        >
            <div className="experience-details-text padding">
                <div className="experience-details-title">
                    {experience.position}
                </div>
                <div className="experience-details-subtitle">
                    {experience.company} • {experience.date}
                </div>
                <div className="experience-details-subtitle">{}</div>

                <div className="experience-details-description">
                    <MultilineText text={experience.description} />
                </div>

                {experience.links && experience.links.length ? (
                    <div className="experience-details-main-links">
                        {experience.links.map((link) => (
                            <a
                                className="experience-details-link"
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i
                                    className={
                                        link.icon + " experience-details-icon"
                                    }
                                    aria-hidden="true"
                                />
                                <span>&ensp;{link.name}</span>
                            </a>
                        ))}
                    </div>
                ) : null}
                {experience.secondaryLinks &&
                experience.secondaryLinks.length ? (
                    <div className="experience-details-secondary-links">
                        {experience.secondaryLinks.map((link) => (
                            <a
                                className="experience-details-link"
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i
                                    className={
                                        link.icon + " experience-details-icon"
                                    }
                                    aria-hidden="true"
                                />
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>
                ) : null}
                <div className="experience-info-bar">
                    <div className="experience-info-labels">
                        {experience.labels.map((label) => (
                            <ExperienceLabel key={label} label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
const MultilineText = ({ text }) => {
    return (
        <div>
            {text.split("•").map((textLine, index) => (
                <span key={index}>
                    • {textLine}
                    <br />
                </span>
            ))}
        </div>
    );
};

export default Experience;
