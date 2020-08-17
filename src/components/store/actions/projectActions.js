export const submitHandler = (project) => {
    return (dispatch, getState)=>{
        //asynchronous connection

        dispatch({type: 'SUBMIT_PROJECT', project})
    }
}