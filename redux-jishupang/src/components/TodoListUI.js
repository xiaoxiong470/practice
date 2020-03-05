import React, { Component } from 'react';
import {store} from "../store";
import {getChangeValueAction,addItemAction,removeItemAction,asyncTodoList,todoListSaga} from "../store/actionCreators";
import TodoList from "./TodoList";
import {connect} from "react-redux";

class TodoListUI extends Component {
    // constructor(){
    //    super();
    //    //store.dispatch(todoListAction);
    //    this.state={};
    //    //console.log(this.state);
    //    this.handleChange=this.handleChange.bind(this);
    //    this.storeChange=this.storeChange.bind(this);
    //    this.addItem=this.addItem.bind(this);
    //    this.removeItem=this.removeItem.bind(this);
    //    store.subscribe(this.storeChange);
    // }
  
    componentDidMount(){
        //踩了一个坑，直接执行了asyncTodoList()
        //let action=asyncTodoList();
        //store.dispatch(action);
        //store.dispatch(todoListSaga());
    }
//    handleChange(event){
//      store.dispatch(getChangeValueAction(event.target.value));
//    }
 
//    storeChange(){
//       this.setState(store.getState());
//    }
 
//    addItem(){
//       store.dispatch(addItemAction());
//    }
//    removeItem(index){
//        store.dispatch(removeItemAction(index));
//    }
    render() { 
        //console.log("ui",this.state.inputValue);
       return <TodoList 
       list={this.props.idols} 
       inputValue={this.props.inputValue}
       addItem={this.props.addItem} 
       removeItem={this.props.removeItem} 
       handleChange={this.props.handleChange}  />;
    }
 }

 function mapStateToProp(state,prop){
    return state;
 }
 function mapDispatchToProp(dispatch,prop){
    return {
        addItem:(v)=>{dispatch(addItemAction(v))},
        removeItem:(index)=>{dispatch(removeItemAction(index))},
        handleChange:(event)=>{dispatch(getChangeValueAction(event.target.value))}

    }
}
 export default connect(mapStateToProp,mapDispatchToProp)(TodoListUI);