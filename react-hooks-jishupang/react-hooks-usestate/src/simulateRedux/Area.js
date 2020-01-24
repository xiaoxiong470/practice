import React,{useContext} from "react";
import {ColorContext} from "./Color";

export function Area() {
    let obj=useContext(ColorContext);
    console.log(obj);
    return (<div style={{color:obj.color}}>hello,world</div>);
}