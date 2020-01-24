import React,{useState,useEffect,useReducer} from "react";


//useReducer
export default function Counter(){
    let [state,dispatch]=useReducer((state,action)=>{
        switch (action.type) {
            case "add":
                return {count:state.count+1};
            case "menus":
                return {count:state.count-1};
            default:
                return state;

        }
    },{count:0})

    return (
        <div>
            <span>{state.count}</span>
            <br/>
            <button onClick={()=>{dispatch({type:"add"})}}>+</button>
            <button onClick={()=>{dispatch({type:"menus"})}}>-</button>
        </div>
    );
}