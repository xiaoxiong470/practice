import React from "react";
import {Redirect} from "react-router-dom";
import {Index} from "./Index";

//标签重定向
/*export function List(){
    return (
        <div>
            {/!*或者to="/"*!/}
            <Redirect to={{pathname:"/",state:{id:69}}}/>
            <div>List</div>
        </div>

    );
}*/
//js代码重定向

export class List extends React.Component{
    constructor(){
        super();
        //console.log(this.props);//undefined
    }
    render(){
       this.props.history.push("/",{id:12});
       return (
           <div>
               <div>List</div>
           </div>

       );
   }
}
