import {useState} from "react";
export function StyleDemo(){
    let [color,setColor]=useState("red");
    return (
        <div>

        <style jsx>
            {`
                .test{
                     color:${color}
                  }
            `}
        </style>
        <div className="test">
            hello,world
        </div>
        <button onClick={()=>{setColor(color=="red"?"green":"red")}}>
            切换颜色
        </button>
        </div>

    )
}