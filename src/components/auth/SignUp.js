import React, { Component } from 'react'

class SignUp extends Component {
    state={
        email:'',
        password:'',
        firstName: '',
        lastName: ''
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log('email: '+ this.state.email + ' password: '+ this.state.password + ' first name: ' + this.state.firstName + ' last name: '+ this.state.lastName);
    }

    render() {
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
                </form>
            </div>
        )
    }
}

export default SignUp;
