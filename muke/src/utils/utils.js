export default {
    formatDate(time){
       if(!time){
          return "";
       }
       let d=new Date(time);
       return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    },
    pagination(data,callback){
        let page={
            onChange:(current)=>{
                callback(current);
            },
            current:data.page,
            size:data.page_size,
            total:data.total_count,
            showTotal:()=>{
                return "共"+data.total_count+"条";
            }
        }
        return page;
    }
}