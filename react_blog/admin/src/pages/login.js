import React,{useState} from 'react';
import {Button,Card, Input,Spin,message} from "antd";
import {UserOutlined,LockOutlined} from "@ant-design/icons";
import serviceUrl from "../config/apiUrl";
import {BrowserRouter as router, useHistory} from "react-router-dom"
import axios from "axios";
import "antd/dist/antd.css";
import "../static/css/login.css";
function Login(props) {
  let [username,setUsername]=useState();
  let [password,setPassword]=useState();
  let [isLoading,setIsLoading]=useState(false);
  let history=useHistory();
  const checkLogin=()=>{
      setIsLoading(true);
      axios.post(serviceUrl.login, {username,password },{withCredentials: true})
      .then(res => {
        let data=res.data;
        setIsLoading(false);
        if(data.msg==="success"){
          //
          message.success("登陆成功");
          history.push("/admin");
          
        }else{
          message.error("用户名或密码错误")
        }
      }).catch(()=>{
        setIsLoading(false);
        message.error("用户名或密码错误")
      })
  }
  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading} style={{textAlign:"center"}} >
        <Card title="Login"  >
          <Input type="text" name="username" size="large" placeholder="please enter username" 
          onChange={(e)=>setUsername(e.target.value)}
          prefix={<UserOutlined />}/>
          <br/> <br/> 
          <Input type="password" name="password" size="large" placeholder="please enter password" 
          onChange={(e)=>setPassword(e.target.value)}
          prefix={<LockOutlined /> }/>
          <br/> <br/> 
          <Button type="primary" size="large" style={{width:"100%"}}  onClick={checkLogin}>login in</Button>
        </Card>
      </Spin>
    </div>
  );
}

export default Login;