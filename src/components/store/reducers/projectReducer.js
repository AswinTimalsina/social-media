const initState = {
    projects: null
};

const projectReducer = (state=initState, action) => {
    switch(action.type) {
        case 'SUBMIT_PROJECT':
            console.log('action created', action.project);
            break;

        case 'SUBMIT_PROJECT_ERROR':
            console.log('Error: ', action.err)
            break;
            
        default:
            return state;
    }
    return state;
}

export default projectReducer;