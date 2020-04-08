'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    //let result=await this.app.mysql.query("select * from myblog",'');
    ctx.body = "result";
  }

  async getArticleList() {
    const { ctx } = this;
    let sql=`select a.*,t.type_name,FROM_UNIXTIME(a.add_time,'%Y-%m-%d %H:%m:%s') as add_time from article a
              left join type t on a.type_id=t.id `;
    let result=await this.app.mysql.query(sql);
    ctx.body = result;
  }

  async getArticleById() {
    const { ctx } = this;
    //http://127.0.0.1:7001/default/articledetail/1，ctx.params.id有值
    //http://127.0.0.1:7001/default/articledetail?id=1,ctx.params.id无值
    //console.log(ctx);
    let sql=`select a.*,t.type_name,FROM_UNIXTIME(a.add_time,'%Y-%m-%d %H:%m:%s') as add_time from article a
              left join type t on a.type_id=t.id 
              where a.id=${ctx.params.id}`;
    let result=await this.app.mysql.query(sql);
    ctx.body = result;
  }

  async getArticleListByType() {
    const { ctx } = this;
    //http://127.0.0.1:7001/default/articledetail/1，ctx.params.id有值
    //http://127.0.0.1:7001/default/articledetail?id=1,ctx.params.id无值
    //console.log(ctx);
    let sql=`select a.*,t.type_name,FROM_UNIXTIME(a.add_time,'%Y-%m-%d %H:%m:%s') as add_time from article a
              left join type t on a.type_id=t.id 
              where t.en_name='${ctx.params.type}'`;
    let result=await this.app.mysql.query(sql);
    ctx.body = result;
  }

  async getTypeInfo(){
    let result=await this.app.mysql.select("type");
    this.ctx.body=result;
  }
}

module.exports = HomeController;
