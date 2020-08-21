import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component{
    render(){
        const {projects, userLoggedIn} = this.props;

        if(!userLoggedIn){
            return <Redirect to='/login' />
        }

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"><ProjectList projects={projects}/></div>
                    <div className="col s12 m5 offset-m1"><Notifications/></div>
                </div>
            </div>
        )
}
}

const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects,
        userLoggedIn: !state.firebase.auth.isEmpty
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects'}])
)(Dashboard);