import {createStore,applyMiddleware} from "redux";
import RootReducer from "./reducers";
import FetchMiddleware from "../middleware/FetchMiddleware";
//,applyMiddleware(FetchMiddleware())
export default createStore(RootReducer);