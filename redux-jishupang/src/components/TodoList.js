import React, { Component } from 'react';
import {Button,Input,List} from 'antd';
import Item from "./Item";
import "../../node_modules/antd/dist/antd.css";


function TodoList(props){
   //console.log("props",props);
   return (
      <div>
         <div>
            <Input 
            value={props.inputValue}
            style={{width:"300px",margin:"10px"}}
            onChange={props.handleChange}/>

            <Button type="primary" onClick={()=>props.addItem(props.inputValue)}>增加</Button>
         </div>
         <div style={{width:"300px",margin:"10px"}}>
            <List
               bordered
               dataSource={props.list}
               renderItem={(item,index)=>(<Item key={index} value={item} removeItem={props.removeItem}>{item}</Item>)}
            />
         </div>
         
      </div>
   );
}

 
export default TodoList;