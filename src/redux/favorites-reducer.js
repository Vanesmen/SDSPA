import {setFavoriteListLS} from "../localStorage/localStorage";
import {getFavoriteListLS} from "../localStorage/localStorage";

const SET_NEW_REQUEST = "SET_NEW_REQUEST";
const EDIT_REQUEST = "EDIT_REQUEST";
const DELETE_REQUEST = "DELETE_REQUEST";
const SET_FAVORITES_LIST = "SET_FAVORITES_LIST";

let initialState = {
    requestItems: [
    ]
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_REQUEST:
            let newItemId;
            state.requestItems.length === 0 ? newItemId = 1 : newItemId = (state.requestItems[state.requestItems.length - 1].id + 1);

            setFavoriteListLS([...state.requestItems, {id: newItemId, ...action.newRequest, }]);

            return {
                ...state,
                requestItems: [...state.requestItems, {id: newItemId, ...action.newRequest, }]
            }
        case EDIT_REQUEST:
            let newState = {...state, requestItems: [...state.requestItems]};
            let index = newState.requestItems.findIndex(el => el.id === action.editedRequest.id);
            if (index >= 0) {
                newState.requestItems.splice(index, 1, action.editedRequest);

                setFavoriteListLS([...newState.requestItems]);
                
                return newState
            } else {
                return state
            }
        case SET_FAVORITES_LIST:
            return {
                ...state,
                requestItems: getFavoriteListLS(),
            }
            
        default:
            return state;
    }
}

export const setNewRequest = (newRequest) => ({ type: SET_NEW_REQUEST, newRequest});
export const deleteRequest = (name) => ({ type: DELETE_REQUEST, name });
export const editRequest = (editedRequest) => ({ type: EDIT_REQUEST, editedRequest });
export const setFavoriteList = () => ({ type: SET_FAVORITES_LIST });



export default favoritesReducer;