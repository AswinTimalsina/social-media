import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';


const Navbar = (props) => {
    const {userLoggedIn} = props;
    console.log('Navbar.js' + userLoggedIn)
    return(
        <nav className="nav-wrapper purple darken-2">
            <div className="container">
                <Link to='/' className='brand-logo left' style={{fontFamily: 'Red Rose' }}>Come Unity </Link>
                
                {userLoggedIn ? <SignedInLinks/> : <SignedOutLinks/>}
                 
            </div>
        </nav>
        
    )
}

const mapStateToProps = state => {
return{
    userLoggedIn: !state.firebase.auth.isEmpty
}
}

export default connect(mapStateToProps)(Navbar);