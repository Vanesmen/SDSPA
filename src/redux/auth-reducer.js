import {setUserLS} from "../localStorage/localStorage"

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

let initialState = {
    isAuth: false,
    login: null,
    token: null
}

function random32bit() {
    let u = new Uint32Array(1);
    window.crypto.getRandomValues(u);
    let str = u[0].toString(16).toUpperCase();
    return '00000000'.slice(str.length) + str;
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            let token = random32bit();
            setUserLS(action.user, token)
            return {...state, isAuth: true, login: action.user, token: token}
        case LOG_OUT:
            return {...state, isAuth: false, login: null, token: null}
        default:
            return state;
    }
}

export const setUser = (user) => ({ type: SET_USER, user});
export const logOut = () => ({ type: LOG_OUT });


export default authReducer