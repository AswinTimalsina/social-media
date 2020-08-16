import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = () => {
    
        return(
            <div className="project-list section">
                <Link to='/project/1'><ProjectSummary/></Link>
                <ProjectSummary/>
                <ProjectSummary/>
                <ProjectSummary/>
            </div>
        )
    
}

export default ProjectList;