import React,{useState,useEffect} from "react";

export default function Counter(){
    //不能添加条件，因为顺序不能变
    let [count,setCount]=useState(0,"count");
    let [name,setName]=useState("kris","name");
    
    return (
        <div>
            <span>{count}</span>
            <br/>
            <button onClick={()=>{setCount(++count)}}>+</button>

            <div>{name}</div>
        </div>
    );
}