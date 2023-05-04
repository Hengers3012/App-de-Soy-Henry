import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
