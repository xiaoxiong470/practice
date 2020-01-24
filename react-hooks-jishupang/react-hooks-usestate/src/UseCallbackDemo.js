import React, {useRef, useState, useEffect, useCallback} from "react";
//自定义hooks函数偏向于功能
export function UseCallbackDemo(){
    let width=document.documentElement.clientWidth;
    console.log("width",width);
    let [size,setSize]=useState({
        height:document.documentElement.clientHeight,
        width:width
    })

    let c=useCallback(()=>{
        console.log("document.documentElement.clientWidth",document.documentElement.clientWidth);
        setSize({
            height:document.documentElement.clientHeight,
            width:document.documentElement.clientWidth
        })
    },[size]);
    useEffect(()=>{
        window.addEventListener("resize",c);
        return ()=>{
            window.removeEventListener("resize",c);
        }
    },[])
    return size;
}

export function Demo() {
    let size=UseCallbackDemo();
    return (<div>{size.height}*{size.width}</div>)
}