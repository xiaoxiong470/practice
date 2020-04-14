'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    const { ctx } = this;
    //let result=await this.app.mysql.query("select * from myblog",'');
    ctx.body = "login";
  }

  async checkLogin() {
    const { ctx } = this;
    console.log("ctx.request",ctx.request.body);//{ username: 'xuxiaoya', password: '1234' }
    let userName=ctx.request.body.username;
    let pwd=ctx.request.body.password;
    let sql=`select * from user  
              where user_name='${userName}' and password=${pwd}`;
    let result=await this.app.mysql.query(sql);
    
    if(result.length>0){
      let time=Date.now();
      ctx.session={openId:time};
      ctx.body={msg:"success",openId:time};
    }else{
      ctx.body={msg:"fail"};
    }
  }

  async getTypeInfo(){
    let result=await this.app.mysql.select("type");
    this.ctx.body=result;
  }
  
}

module.exports = MainController;
