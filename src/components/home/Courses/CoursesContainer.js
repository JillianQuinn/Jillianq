import React from "react";
import Courses from "./Courses";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./CoursesContainer.css";

const CoursesContainer = ({ courses }) => {
    return (
        <div className="course-wrapper">
            <div className="divider"></div>
            <h1>Courses</h1>
            {courses.map((quarter) => (
                <Courses quarter={quarter} />
            ))}
        </div>
    );
};
const mapStateToProps = (store) => ({
    courses: store.courses,
});

export default withRouter(connect(mapStateToProps)(CoursesContainer));
