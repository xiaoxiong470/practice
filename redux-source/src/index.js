import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "./react-redux";
import createStore from "./store";
import reducer from "./reducer";


function dispatchAndLog01(store) {
    return (dispatch)=>{
        return (action)=>{
            console.log('dispatching01', action)
            dispatch(action)
            console.log('next state01', store.getState())
        }
    }
  }
function dispatchAndLog02(store) {
    return (dispatch)=>{
        return (action)=>{
            console.log('dispatching02', action)
            dispatch(action)
            console.log('next state02', store.getState())
        }
    }
}

function applyMiddle(middlewares){
    return (createStore)=>{
        return (reducer)=>{
            let store=createStore(reducer);
            let dispatch=store.dispatch;
            let copy=middlewares.slice();
            let chain=copy.map(middleware=>middleware({...store}))
            dispatch=chain.reduceRight((v,fun)=>{
                let result=fun(v);
                return result;
            },dispatch);
            return {...store,dispatch}
        }
    }
  
  //
}
let store=createStore(reducer,applyMiddle([dispatchAndLog01,dispatchAndLog02]));
let component=(<Provider store={store}><App name="kris"/> </Provider>)
ReactDOM.render(component, document.getElementById('root'));

