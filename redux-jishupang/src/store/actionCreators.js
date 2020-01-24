import {TODO_LIST,CHANGE_VALUE,ADD_ITEM,REMOVE_ITEM,TODO_LIST_SAGA} from "./constants";
import {store} from "../store";
import axios from "axios";

export function todoListAction(){
    return {
        type:TODO_LIST,
        idols:store.getState().idols
    }
}

export function getChangeValueAction(v){
    //console.log("action",v);
    return {
        type:CHANGE_VALUE,
        inputValue:v
    }
}

export function addItemAction(){
    //console.log("action",v);
    return {
        type:ADD_ITEM
    }
}

export function removeItemAction(index){
    //console.log("action",v);
    return {
        type:REMOVE_ITEM,
        index:index
    }
}

export function getTodoListAction(data){
    console.log("action",data);
    return {
        type:TODO_LIST,
        data
    }
}

//redux-thunk
export function asyncTodoList(){
    return (dispatch)=>{
        //post不可以，get可以
        axios.get("data.json")
        .then(response=>{
            console.log("response",response);
            if(response.status==200){
                let data=response.data;
                dispatch(getTodoListAction(data));
            }
        })
    }
   
}

//redux-saga
export function todoListSaga(){

    return {
        type:TODO_LIST_SAGA
        }
   
}