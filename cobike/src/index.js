import React from 'react';
import ReactDOM from 'react-dom';
import "./test.less";
import Admin from "./admin";
import IRouter from "./router";
import store from "../src/redux/store";
import {Provider} from "react-redux";
ReactDOM.render((
    <Provider store={store}>
        <IRouter />
    </Provider>
), document.getElementById('root'));

