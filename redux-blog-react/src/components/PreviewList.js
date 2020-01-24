import React from "react";
import Preview from "./Preview";
class PreviewList extends React.Component{
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const {error,loading,acticleList}=this.props;
        if(loading){
            return (
                <div>loading</div>
            )
        }
        if(error){
            return (
                <div>error</div>
            )
        }
        return (
           <div>
               {
                   this.props.acticleList.map((article)=>{
                       return <Preview {...article} key={article.id}/>
                   })
               }
           </div>

        )
    }
}

export default  PreviewList;