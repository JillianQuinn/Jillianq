import React from "react";

import CourseLabel from "./CourseLabel";

import "./Courses.css";

const Courses = ({ quarter }) => {
    const className = quarter.highlight ? "highlight-card" : "normal-card";
    return (
        <div className={"course-card text-unselectable " + className}>
            <div className="course-details-text">
                <div className="course-header">
                    <div className="course-details-title">
                        {quarter.quarter}{" "}
                    </div>
                    {quarter.GPA ? (
                        <div className="course-details-subtitle">
                            {quarter.GPA.toFixed(2)}{" "}
                        </div>
                    ) : null}
                </div>
                {quarter.courses ? (
                    <div className="course-details">
                        {quarter.courses.map((course) => (
                            <div className="course-content">
                                <p className="course-name">{course.name}</p>
                                <div className="course-details">
                                    {course.url ? (
                                        <a
                                            className="course-details-link"
                                            href={course.url.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                className={
                                                    course.url.icon +
                                                    " course-details-icon"
                                                }
                                                aria-hidden="true"
                                            />
                                            <i class="fas fa-file"></i>
                                            <span>&ensp;{course.url.name}</span>
                                        </a>
                                    ) : null}
                                    {course.labels.length ? (
                                        <div className="course-info-bar">
                                            <div className="course-info-labels">
                                                {course.labels.map((label) => (
                                                    <CourseLabel
                                                        key={label}
                                                        label={label}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Courses;
