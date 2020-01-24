import React from "react";
import {TodoListItem} from "./TodoListItem";
import {Boss} from "./Boss";
import axsios from "axios";
import {CSSTransition,TransitionGroup} from "react-transition-group";
export default class TodoList extends React.Component{
    constructor(){
        super();
        this.state={
            inputValue:"",
            idols:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.addItem=this.addItem.bind(this);
        this.removeItem=this.removeItem.bind(this);
    }
    componentDidMount() {

        axsios.get("https://easy-mock.com/mock/5e1ac80564a3c20d7f366d4d/ReactDemos/getIdols")
            .then(response=>{
               this.setState(
                   {
                       idols:response.data.data.idols
                   }
               )
            })
            .catch(error=>{
                this.setState(
                    {
                        idols:["kris","lzh","lzs"]
                    }
                )
            })
    }

    handleChange(event){
        this.setState({
            inputValue:event.target.value
        })
    }
    addItem(event){
        //设置状态是异步调用，可以通过回调函数来获取跟新后的状态
        let idols=[...this.state.idols,this.state.inputValue];
        this.setState({
            idols,
            inputValue:""
        },()=>{console.log(this.state.idols.length)})
    }

    removeItem(index){
        let idols=[...this.state.idols];
        idols.splice(index,1);
        this.setState({
            idols
        })
    }
    render(){
        return (
            <div>
                <input type="text"
                       value={this.state.inputValue}
                       onChange={this.handleChange}
                       style={{margin:"10px",marginLeft:"40px"}}/>
                <button onClick={this.addItem}>添加</button>
                <ul style={{listStyle:"none"}}>
                    <TransitionGroup>
                        {this.state.idols.map((v,index)=>{
                            return  (
                                <CSSTransition
                                 classNames="boss-text"
                                 timeout={2000}
                                 key={index}
                                 appears={true}
                                 unmountOnExit
                                >
                                    <TodoListItem
                                        removeItem={this.removeItem}
                                        key={index+v}
                                        content={v}
                                        index={index}>
                                    </TodoListItem>
                                </CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </ul>
                <Boss/>
            </div>
        );
    }
}