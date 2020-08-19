export const authAction = (creds) => {
    return(dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(creds.email, creds.password).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch(err=>{dispatch({type: 'LOGIN_ERROR', err})})
    }
}


export const authSignOut = () => {
    return(dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>dispatch({type: 'SIGNOUT_SUCCESS'}));
    }
}

export const signUpAction = (creds) => {
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            creds.email,
            creds.password
        ).then((res)=> {return firestore.collection('users').doc(res.user.uid).set({
            firstName: creds.firstName,
            lastName: creds.lastName,
            initials: (creds.firstName[0] + creds.lastName[0]).toUpperCase()
        })}).then(()=>dispatch({type: 'SIGNUP_SUCCESS'})).catch(err=>{dispatch({type: 'SIGNUP_ERROR', err})})
    }
}