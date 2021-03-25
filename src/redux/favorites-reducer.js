const SET_NEW_REQUEST = "SET_NEW_REQUEST";
const EDIT_REQUEST = "EDIT_REQUEST";
const DELETE_REQUEST = "DELETE_REQUEST";

let initialState = {
    requestItems: [
        {   
            id: 1,
            maxResults: 18,
            name: "Дота моя жизнь2",
            requestText: "дота2 бла бла",
            sortMethod: "relevance",
        },
    ]
    
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_REQUEST:
            let newItemId;
            state.requestItems.length === 0 ? newItemId = 1 : newItemId = (state.requestItems[state.requestItems.length - 1].id + 1);
            return {
                ...state,
                requestItems: [...state.requestItems, {id: newItemId, ...action.newRequest, }]
            }
        case EDIT_REQUEST:
            let newState1 = {...state, requestItems: [...state.requestItems]};
            let index1 = newState1.requestItems.findIndex(el => el.id === action.editedRequest.id);
            if (index1 >= 0) {
                newState1.requestItems.splice(index1, 1, action.editedRequest);
                return newState1
            } else {
                return state
            }
        case DELETE_REQUEST:
            let newState = {...state, requestItems: [...state.requestItems]};
            let index = newState.requestItems.findIndex(el => el.name === action.name);
            if (index > 0) {
                newState.requestItems.splice(index,1);
                return newState
            } else {
                return state
            }
            
        default:
            return state;
    }
}

export const setNewRequest = (newRequest) => ({ type: SET_NEW_REQUEST, newRequest});
export const deleteRequest = (name) => ({ type: DELETE_REQUEST, name });
export const editRequest = (editedRequest) => ({ type: EDIT_REQUEST, editedRequest });


export default favoritesReducer;