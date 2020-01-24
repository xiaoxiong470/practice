import React from "react";
import ReactDom from "react-dom";
import TodoListUI from "./components/TodoListUI";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDom.render((
    <Provider store={store}>
       <TodoListUI/>
    </Provider>
    
),document.getElementById("root")); 