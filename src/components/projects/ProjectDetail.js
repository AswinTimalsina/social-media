import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";

const ProjectDetail = (props) => {
  const { project } = props;

  if(project){
  return (
    <div className="container section">
      <div className="card z-depth-0 project-detail">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
      </div>
      <hr />
      <div className="card z-depth-0 lighten-4 grey-text">
        <div className="card-content">
          <div>
            Posted by: {project.authorFirstName} {project.authorLastName}
          </div>
  {/* <div>{project.createdAt ? <p>{project.createdAt}</p> : null}</div> */}
        </div>
      </div>
    </div>
  );
  }
  else{
    return <div className='container center'>Projects are loading...</div>
  }
};

const mapStateToProps = (state, ownProps) => {
  const project = state.firestore.data.projects;
  const id = ownProps.match.params.id;
  const pro1 = project ? project[id] : null;

  return {
    project: pro1,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetail);
