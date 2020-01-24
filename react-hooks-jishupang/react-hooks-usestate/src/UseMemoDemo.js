import React, {useState,useMemo} from "react";
export function UseMemoDemo() {
    let [name,setName]=useState("kris");
    let [age,setAge]=useState(29);

    return(
        <div>
            <button onClick={()=>{setName(Date.now()+"kris")}}>姓名</button>
            <button onClick={()=>{setAge(++age)}}>年龄</button>
            <Info name={name} age={age}></Info>
        </div>
    )
}
function Info(props){
    function test(){
        return Date.now()+props.name
    }
    //let name=test();
    let name =useMemo(()=>(test()),[props.name]);

    return (
        <div>
            <div>{name}</div>
            <div>{props.age}</div>
        </div>
    )
}