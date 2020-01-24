import React,{useContext} from "react";
import {ColorContext} from "./Color";

export function Buttons() {
    let {dispatch}=useContext(ColorContext);
    return (
            <div>
                <button onClick={()=>{dispatch({type:'change_color',color:"red"})}}>红色</button>
                <button onClick={()=>{dispatch({type:'change_color',color:"green"})}}>绿色</button>
            </div>
        );
}