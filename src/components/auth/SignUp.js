import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUpAction} from '../store/actions/authActions';

class SignUp extends Component {
    state={
        email:'',
        password:'',
        firstName: '',
        lastName: ''
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        this.props.signUpAction(this.state);
    }

    

    render() {
        const {userLoggedIn, authError} = this.props;

        if(userLoggedIn){
            return <Redirect to='/' />
        }
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler} className='white'>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={(event)=>{this.setState({email: event.target.value})}}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={(event)=>{this.setState({password: event.target.value})}}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' onChange={(event)=>{this.setState({firstName: event.target.value})}}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' onChange={(event)=>{this.setState({lastName: event.target.value})}}/>
                    </div>
                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
        {authError ? <p style={{color: 'red'}}>{authError}</p> : null}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        userLoggedIn: !state.firebase.auth.isEmpty,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signUpAction: (creds)=> dispatch(signUpAction(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
