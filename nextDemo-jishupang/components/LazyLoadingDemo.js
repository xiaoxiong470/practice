import {useState} from "react";
import dynamic from "next/dynamic";
import "./test.css";
const Demo =dynamic(import("./Demo"))
export function LazyLoadingDemo(){
    let [time,setTime]=useState(Date.now());
    async function changeTime(){
        let moment=await import('moment')
        setTime(moment.default(Date.now()).format());
    }
    return (
        <div>
        <div className="kris">{time}</div>
        <button onClick={changeTime}>
        格式化时间
        </button>
        {/* 组件懒加载 */}
        <Demo/>

    </div>

)
}