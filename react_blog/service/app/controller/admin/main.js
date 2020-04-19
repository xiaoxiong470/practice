'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    const { ctx } = this;
    //let result=await this.app.mysql.query("select * from myblog",'');
    ctx.body = "login";
  }
  //登录
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

  //获取文章列表
  async getArticleById() {
    const { ctx } = this;
    console.log("body",ctx.request.body);
    let id=ctx.request.body.id;
    
    let sql=`select a.*,t.type_name,FROM_UNIXTIME(a.add_time,'%Y-%m-%d') as add_time from article a
              left join type t on a.type_id=t.id 
              where a.id=${id}`;
    //get自带select* from 
    let result=await this.app.mysql.query(sql);
    ctx.body = result;
  }
  //获取文章列表
  async getArticleList() {
    const { ctx } = this;
    let sql=`select a.*,t.type_name,FROM_UNIXTIME(a.add_time,'%Y-%m-%d') as add_time from article a
              left join type t on a.type_id=t.id `;
    let result=await this.app.mysql.query(sql);
    ctx.body = result;
  }
  //获取文章类型
  async getTypeInfo(){
    let result=await this.app.mysql.select("type");
    this.ctx.body=result;
  }
  //保存文章
  async saveArticle(){
    let params=this.ctx.request.body;
    let result=await this.app.mysql.insert("article",params);
    if(result){
       this.ctx.body={
         articleId:result.insertId,
         msg:"success"
       }
    }else{
      this.ctx.body={
        msg:"error"
      }
    }
  }
  //更新文章
  async updateArticle(){
    let params=this.ctx.request.body;
    //console.log(this.app.mysql,this.app.mysql.update);
    //this.app.mysql.query()执行更新语句也可以
    //mysql.update的参数params需要包含id，根据主键查询
    let result=await this.app.mysql.update("article",params);
    console.log("updateArticle",result);
    if(result.affectedRows==1){
       this.ctx.body={
         msg:"success"
       }
    }else{
      this.ctx.body={
        msg:"error"
      }
    }
  }

  //删除文章
  async deleteArticle(){
    let params=this.ctx.request.body;
    let result=await this.app.mysql.delete("article",params);
    console.log("updateArticle",result);
    if(result.affectedRows==1){
       this.ctx.body={
         msg:"success"
       }
    }else{
      this.ctx.body={
        msg:"error"
      }
    }
  }
  
}

module.exports = MainController;
