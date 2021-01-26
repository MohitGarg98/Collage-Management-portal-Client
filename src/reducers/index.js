let initialState = {
    assignments: [],
    submitedAssignment: []
};

export default function items(state= initialState, action) {
    if(action.type === "ADD_ASSIGNMENT"){
        return{            
            ...state, assignments: [...state.assignments, action.assignment]
        }
    }

    if(action.type === "SUBMIT_ASSIGNMENT"){
        return{            
            ...state, submitedAssignment: [...state.submitedAssignment, action.assignment]
        }
    }

    return state;
}