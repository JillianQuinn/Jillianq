import React from 'react';
import Experience from "./Experience"
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import "./ExperienceContainer.css"

const ExperienceContainer = ( { experience } ) => { 

    return (   
        <div className="experience-wrapper">
            <div className="divider"></div>
            <h1>Experience</h1>
            {
                experience.map( exp => 
                    <Experience key={exp.name} experience={exp} />
                ) 
            }
        </div>  
    );
}
const mapStateToProps = store => ({
    experience: store.experience
})

export default withRouter(connect(mapStateToProps)(ExperienceContainer));