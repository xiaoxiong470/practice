import React from "react";
import propTypes from "prop-types";
export class TodoListItem extends React.Component{
    constructor(){
        super();
        this.state={};
        //只读
        //this.props={};
    }

    /*componentDidMount() {
        console.log("componentDidMount");
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate");
        return false;
    }
    componentWillUpdate(prevProps, prevState, snapshot) {
        console.log("componentWillUpdate");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }
    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps");
    }*/

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.content==this.props.content){
            return false;
        }else{
            return true;
        }

    }
    render(){
        console.log("render");
        {/*ctrl+/出现此注释，把标签解析为HTML，注意，之前在li的children要去掉*/}
        return (<div style={{border:"1px solid skyblue",margin:"5px",width:"300px"}}>
            <li onClick={()=>{this.props.removeItem(this.props.index)}} dangerouslySetInnerHTML={{__html:this.props.content}}></li>
        </div>);
    }
}
//属性值类型的校验
TodoListItem.propTypes={
    index:propTypes.number.isRequired,
    content:propTypes.string,
    removeItem:propTypes.func
}