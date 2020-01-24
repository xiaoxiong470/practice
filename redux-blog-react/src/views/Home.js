import React from "react";
import PreviewList from "../components/PreviewList";
import * as ListAction from "./HomeRedux";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
class Home extends React.Component{
    render() {
        return (
            <div>
                <h1>Home</h1>
                <PreviewList {...this.props.list} {...this.props.listActions}/>
            </div>
        );
    }
}
function mapStateToProps(state,props) {
    return {
        list:state.home.list
    }
}

function mapDispatchToProps(dispatch,props) {
    return {
         listActions:bindActionCreators(dispatch,ListAction.loadArticles)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);