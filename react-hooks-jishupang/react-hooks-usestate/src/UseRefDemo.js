import React,{useRef} from "react";
export function UseRefDemo() {
    let valueRef=useRef("kris");
    console.log(valueRef);
    return <input type="text"/>
}