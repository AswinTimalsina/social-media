import React from 'react';



const ProjectDetail = (props) => {
let number = props.match.params.id;
    return(
        <div className="container section">
        <div className="card z-depth-0 project-detail">
            <div className="card-content grey-text text-darken-3">
    <span className="card-title">Project Title - {number}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio quisquam excepturi alias magni laboriosam soluta repellat ad dolor dicta nesciunt porro eveniet, id non, officiis qui blanditiis debitis consequuntur?</p> 
            </div>
        </div>
        <hr/>
        <div className="card z-depth-0 lighten-4 grey-text">
            <div className="card-content">
            <div>Posted by: Aswin Timalsina</div>
            <div>8/16/2020</div>
            </div>
        </div>

                        </div>

    )
};

export default ProjectDetail;