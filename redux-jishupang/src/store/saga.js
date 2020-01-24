import {takeEvery,put} from "redux-saga/effects";
import {TODO_LIST_SAGA} from "./constants";
import {getTodoListAction} from "../store/actionCreators";
import axios from "axios";

export default function* whatever(){
   takeEvery(TODO_LIST_SAGA,getTodoListSaga);
}

function* getTodoListSaga(){
    let data=yield axios.get("data.json");
    console.log("saga",data);
    put(getTodoListAction(data));
      
}