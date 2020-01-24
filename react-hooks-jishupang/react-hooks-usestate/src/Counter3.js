import React,{useState,useEffect,useContext,createContext} from "react";

let context=createContext();

//useContext
 function Counter(){
   let obj=useContext(context);
   return <div>{obj.count}</div>;
}

function App() {
    return (
        <context.Provider value={{count:3}}>
            <Counter/>
        </context.Provider>
    );
}
export default App;i