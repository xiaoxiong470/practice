export default function FetchMiddleware(){
    return ({dispatch,geState})=>next=>action=>{
        if(!action.url||!action.types||!Array.isArray(action.types)){
             next(action);
        }
        //解构
        const [LOADING,SUCCESS,ERROR] =action.types;
        //应该是next而不是dispatch
        next({
            type:LOADING,
            loading:true
        });

        setTimeout(()=>{
            fetch(action.url)
            .then(response=>{
                if(response.ok){
                    return response.clone().json();
                }
            }).then(v=>{
                //console.log(v);
                next({
                    type:SUCCESS,
                    payload:v,
                    loading:false
                })
            }).catch(error=>{
                next({
                    type:ERROR,
                    payload:error,
                    loading:false
                })
            })
        },3000);

    }
}