export const submitHandler = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        //asynchronous connection
        const firestore = getFirestore();
 

        firestore.collection('projects').add({
            ...project,
            authorFirstName: getState().firebase.profile.firstName,
            authorLastName: getState().firebase.profile.lastName,
            authorId: getState().firebase.auth.uid,
            createdAt: new Date()
        }).then(()=>dispatch({type: 'SUBMIT_PROJECT', project}))
        .catch(err=>{
            dispatch({type: 'SUBMIT_PROJECT_ERROR', err})
        })

        
    }
}