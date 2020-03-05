import React from "react";
import {HashRouter,Switch,Route,Link} from "react-router-dom";
export default class App extends React.Component{
   
    //
    render(){
        return (
           <div >
               {this.props.children}
           </div>
        )
    }
}