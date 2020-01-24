import HomeReducer from "../views/HomeRedux";
import {routerReducer} from "react-router-redux/src";
import {combineReducers} from "redux";
export default combineReducers([HomeReducer,routerReducer]);