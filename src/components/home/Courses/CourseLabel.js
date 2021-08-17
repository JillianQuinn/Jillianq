import React from 'react';

import "./CourseLabel.css"

const CourseLabel = ( {label } ) => {
    return (
        <label className="course-label-minimal">{label}</label >    
    );
}

export default CourseLabel;