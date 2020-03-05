import React from "react";
import {Row,Col} from "antd";
import "./index.less";
import Utils from"../../utils/utils";
import Axios from"../../axios";
import {connect} from "react-redux";
 class Header extends React.Component{
    state={};
    componentWillMount(){
        setInterval(()=>{
            this.setState({
               sysDate:Utils.formatDate(new Date().getTime())
            })
        },1000);
        this.getWeatherAPIData();
    }
    getWeatherAPIData=()=>{
        let city="北京";
        let options={
            url:"http://api.map.baidu.com/telematics/v3/weather?location="+encodeURIComponent(city)+"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2",
        }
        Axios.jsonp(options)
        .then(res=>{
            let data=res[0].weather_data[0];
            this.setState({
                date:data.date,
                dayPictureUrl:data.dayPictureUrl
            });
        });
        
    }
    //
    render(){
        let menuType=this.props.menuType;
        return (
           <div className="header">
               <Row className="header-top">
                   {
                       menuType&&
                       <Col span={12} className="logo">
                           <img src="/assets/mouse.png" alt=""/>
                           <span>IMooc</span>
                       </Col>
                   }
                   <Col span={menuType?12:24}>
                      <span>hello，河畔</span>
                      <a href="#">退出</a>
                   </Col>
               </Row>
               {
                   this.props.menuType?"":
                   <Row className="breadcrump">
                       <Col span={4} className="breadcrump-title">
                           <span>{this.props.menuName}</span>
                       </Col>
                       <Col span={20} className="weather">
                           <span className="date">{this.state.sysDate}</span>
                           <span className="weather-img">
                          <img src={this.state.dayPictureUrl} />
                      </span>
                           <span className="weather-detail">{this.state.date}</span>
                       </Col>
                   </Row>
               }

           </div>
        )
    }
}
let mapStateToProps=(state,props)=>{
     return {...props,menuName:state.menuName};
}
export default connect(mapStateToProps)(Header);