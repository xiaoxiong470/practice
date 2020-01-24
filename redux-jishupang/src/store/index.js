import {createStore,applyMiddleware,compose} from "redux";
import reducers from "./reducers";
import mySaga from "./saga";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

//redux
//console.log(createSagaMiddleware);
let saga=createSagaMiddleware();
export const store=createStore(reducers,applyMiddleware(saga));
saga.run(mySaga);
//store.subscribe(()=>(console.log("store",store.getState())));