// import {
//     // legacy_createStore as 
//     createStore,
//     combineReducers,
//     applyMiddleware,
//     compose,
// } from "redux";

// import thunk from "redux-thunk";

// const reducer = combineReducers({});

// let initialState = {};

// const composeenhancers = window.AbortController.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middleware = [thunk];
// const store = createStore(
//     reducer,
//     initialState,
//     composeenhancers(applyMiddleware(...middleware
//     ))
// );

// export default store;

import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./Reducers/restaurantReducer";
import { menuReducer } from "./Reducers/menuReducers";
import { cartReducer } from "./Reducers/cartReducer";

const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer,
    cart: cartReducer,
});
let initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
