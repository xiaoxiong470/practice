import React,{createContext,useReducer} from "react";
export let ColorContext=createContext({});

export function Color(props) {
    let  [state,dispatch]=useReducer((state,action)=>{
        switch (action.type) {
            case "change_color":
                return {color:action.color};
            default:
                return state;
        }
    },{color:"red"})
    return (
        <ColorContext.Provider value={{color:state.color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    );
}