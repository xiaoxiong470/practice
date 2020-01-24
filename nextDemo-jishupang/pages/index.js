//http://localhost:3000路径可以访问到，必须加export default
import Link from "next/Link";
import Router from "next/router";
import {StyleDemo} from "../components/StyleDemo";
import {LazyLoadingDemo} from "../components/LazyLoadingDemo";
import {HeadDemo} from "../components/HeadDemo";

function showMsg(...args){
    console.log("routeChangeStart",args);
}
Router.events.on("routeChangeStart",showMsg);
Router.events.on("routeChangeComplete",(...args)=>{
    console.log("routeChangeComplete",args);
})
Router.events.on("hashChangeComplete",(...args)=>{
    console.log("hashChangeComplete",args);
})
Router.events.on("hashChangeStart",(...args)=>{
    console.log("hashChangeStart",args);
})
Router.events.on("beforeHistoryChange",(...args)=>{
    console.log("beforeHistoryChange",args);
})
Router.events.on("routeChangeError",(...args)=>{
    console.log("routeChangeError",args);
})
//1.点击kris,输出
// routeChangeStart beforeHistoryChange routeChangeComplete
//2、点击首页，输出
// routeChangeStart  routeChangeStart beforeHistoryChange beforeHistoryChange routeChangeComplete routeChangeComplete
//标签式导航
export default function Hello() {
    return (
        <div>
            {/* 就是浏览器中的头部 */}
            <HeadDemo/>
            {/* Link不支持并列兄弟 */}
           <Link href="/idols/kris?age=30"><a id="kris">kris</a></Link>
           <br/>
           <Link href={{pathname:"/idols/lzh",query:{age:29}}}><a>lzh</a></Link>
           <br/>


            {/* 定位到元素 */}
           <Link href="#kris"><a>qwe</a></Link>
            <br/>

           {/* 编程式传参 */}
           <button onClick={()=>{Router.push("/idols/lzs?age=31")}}>lzs</button>
            {/* 编程式传参 */}
           <button onClick={()=>{Router.push({pathname:"/idols/lzs",query:{age:31}})}}>lzs</button>
            {/* 测试样式 */}
            <StyleDemo/>
            {/* 测试懒加载 */}
            <LazyLoadingDemo/>
        </div>
    )
}