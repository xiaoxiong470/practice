import React from 'react';
import './App.css';
import {connect} from "./react-redux";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <span>{this.props.num}</span>
       <button onClick={this.props.add}>+1</button> 
       <button onClick={this.props.minus}>-1</button>
      </div>
    );
  }
  
}
function mapStateToProps(state,props){
  //console.log("mapStateToProps",props);
  return state;
}

function mapDispatchToProps(dispatch,props){
  //console.log("mapDispatchToProps",props);
  let obj={
    add:()=>{dispatch({type:"add"})},
    minus:()=>{dispatch({type:"minus"})}
  }
  return obj;
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
