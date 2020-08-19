import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {authSignOut} from '../store/actions/authActions';

const SignedInLinks = (props) => {
    return(
        <ul className='right'>
            <li><NavLink to='/newPost'>New Post</NavLink></li>
            <li><a onClick={props.authSignOut}>Sign Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>AT</NavLink></li>
        </ul>
    )
    
}

const mapDispatchToProps = dispatch => {
    return{
        authSignOut: () => dispatch(authSignOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);