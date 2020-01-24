import React, {useRef, useState,useEffect} from "react";
//改变元素属性
/*export function UseRefDemo() {
    let valueRef=useRef(null);
    //console.log(valueRef);//现在还没关联上
    // valueRef.current="kris";
    return (
        <div>
            <input ref={valueRef} type="text"/>
            <button onClick={()=>{valueRef.current.value="kris"}}>kris</button>
        </div>
    )
}*/
//保存属性值,不常用
export function UseRefDemo() {
    let [name,setName]=useState("kris");
    let valueRef=useRef(name);
    useEffect(()=>{
        console.log(valueRef.current)
    })
    //console.log(valueRef);//现在还没关联上
    // valueRef.current="kris";
    return (
        <div>
            <input value={name} ref={valueRef} type="text" onChange={(e)=>{setName(e.currentTarget.value)}}/>

            <br/>
            {<span>{valueRef.current.value}</span>}
        </div>
    )
}