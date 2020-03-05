
import React from "react";
const context=React.createContext();
export class Test02 extends React.Component{
    constructor(){
        super();
    
    }
    render(){
        
        return (
            <context.Provider value="what">
               <Test01></Test01>
            </context.Provider>
        )
    }
 }
 export class Test01 extends React.Component{
     static contextType=context;
    constructor(){
        super();
        console.log("Test01",this.context);
    
    }
    render(){
        console.log("Test01",this.context);
        return "hello";
    }
 }


 

 