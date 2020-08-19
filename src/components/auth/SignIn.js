import React, { Component } from 'react'
import {connect} from 'react-redux';
import {authAction} from '../store/actions/authActions';

class SignIn extends Component {
    state={
        email:'',
        password:''
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        this.props.authAction(this.state);
    }

    render() {
        const {authError} = this.props;
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler} className='white'>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={(event)=>{this.setState({email: event.target.value})}}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={(event)=>{this.setState({password: event.target.value})}}/>
                    </div>

                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-depth-0">Login</button>

        {/* {this.props.authError ? <p >{this.props.authError}</p> : null} */}
                    {authError ? <p style={{color: 'red'}}>{authError}</p> : null}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state);
    return{
        authError: state.auth.authError
}
}

const mapDispatchToProps = dispatch => {
    return{
        authAction : (creds) => dispatch(authAction(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
