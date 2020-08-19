const initState = {
    authError: null
};

const authReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
             (console.log('Login Success!'));
            return {
                ...state,
                authError: null
            }

        case 'LOGIN_ERROR':
            (console.log('Error occured :('));
            return {
                ...state,
                authError: action.err.message  //cant use authError: action.err no idea ???
                
            }

        case 'SIGNOUT_SUCCESS':
            console.log('Signed Out!!!');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('Signup Successful!!');
            return {...state, authError: null}

        case 'SIGNUP_ERROR':
            console.log('Signup Error!!!');
            return {...state, authError: action.err.message}

        default:
            return state;

    }
    
}

export default authReducer;
