import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import searchReducer from "./search-reducer";
import favoritesReducer from "./favorites-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";

let ruducers = combineReducers({
    searchPage: searchReducer,
    favoritesPage: favoritesReducer,
    authInfo: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(ruducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;