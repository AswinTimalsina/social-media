import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <ul className='right'>
            <li><NavLink to='/newPost'>New Post</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>AT</NavLink></li>
        </ul>
    )
    
}

export default SignedInLinks;