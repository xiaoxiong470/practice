import React from "react";
import style from "../style/base.scss";
import bootstrapCss from "bootstrap/dist/css/bootstrap.css";
console.log(style);
export default  class Info extends React.Component{
    constructor(props){
        super(props);
        
        this.state={};
    }

    render(){
        return (
            <div>
                <h1 className={bootstrapCss.h2}> idols</h1>
                <input id="qwe"  ref="name" />
                <button  onClick={()=>{ console.log("submit",this.refs.name.value);}}> submit</button>
            </div>
        )
    }
}