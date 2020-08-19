const initState = {
    projects: [
        {id: '1', title: 'React Revision', content:'complete the youtube playlist of thenetninja'},
        {id: '2', title: 'Ticketing Bug Fix', content:'Need to fix the asynchronous bug on the ticketing app. As it has been causing lot of problems.'},
        {id: '3', title: 'SQL completion', content:'Need to know the overview of the database management system.'},
        {id: '4', title: 'Android Development', content:'Need to know the real world use of Java which is my primary language.'},
    ]
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