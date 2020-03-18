import React from "react";
import {HashRouter,BrowserRouter,Switch,Route,Link,Redirect} from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Login from "./pages/login";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import NoMatch from "./pages/nomatch";
import Loadings from "./pages/ui/loadings";
import Notification from "./pages/ui/notification";
import Messages from "./pages/ui/messages";
import Tab from "./pages/ui/tab";
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousels";
import LoginForm from "./pages/form/login";
import RegisterForm from "./pages/form/register";
import BasicTable from "./pages/table/basic";
import HighTable from "./pages/table/high";
import City from "./pages/city";
import Order from "./pages/order";
import Common from "./common";
import OrderDetail from "./pages/order/detail";
import User from "./pages/user";
import BikeMap from "./pages/map";
import BarDemo from "./pages/charts/bar/bar";
import PieDemo from "./pages/charts/pie";
import LineDemo from "./pages/charts/line";
import RichDemo from "./pages/rich";
import Permission from "./pages/permission";
import Home from "./pages/home";
export default class IRouter extends React.Component{
    
    render(){
        return (
           <BrowserRouter >
              <App>
                  <Switch>
                      <Route path="/" render={()=>(
                          <Admin>
                              <Route path="/home" component={Home}/>
                              <Route path="/ui/buttons" component={Buttons}/>
                              <Route path="/ui/modals" component={Modals}/>
                              <Route path="/ui/loadings" component={Loadings}/>
                              <Route path="/ui/notification" component={Notification}/>
                              <Route path="/ui/messages" component={Messages}/>
                              <Route path="/ui/tab" component={Tab}/>
                              <Route path="/ui/gallery" component={Gallery}/>
                              <Route path="/ui/carousels" component={Carousels}/>
                              <Route path="/form/login" component={LoginForm}/>
                              <Route path="/form/register" component={RegisterForm}/>
                              <Route path="/table/basic" component={BasicTable}/>
                              <Route path="/table/high" component={HighTable}/>
                              <Route path="/city" component={City}/>
                              <Route path="/order" component={Order}/>
                              <Route path="/user" component={User}/>
                              <Route path="/bikeMap" component={BikeMap}/>
                              <Route path="/charts/bar" component={BarDemo}/>
                              <Route path="/charts/pie" component={PieDemo}/>
                              <Route path="/charts/line" component={LineDemo}/>
                              <Route path="/rich" component={RichDemo}/>
                              <Route path="/permission" component={Permission}/>
                              {/*<Redirect to="/home"/>*/}
                          </Admin>
                      )}/>

                      <Route path="/common" render={()=>(
                          <Common>
                              <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                          </Common>
                      )}/>
                      <Route  component={NoMatch}/>
                  </Switch>
              </App>
           </BrowserRouter>
        )
    }
}