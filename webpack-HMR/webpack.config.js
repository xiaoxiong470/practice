//webpack.config.js
//webpack热更新默认是使用websocket更新代码而不是刷新，但是当某些代码或者包不支持热更新的时候他会直接刷新页面
//hot 是支持热更新就更新，不支持的话就直接刷新页面。这是支持热更新的，不会刷新页面，直接更新需要更新的地方
//hotOnly 是支持热更新就更新，不支持就不更新。
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const webpack=require("webpack");
const path=require("path");
module.exports = {
    entry:{
        app:"./src/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"./dist")
    },
    module:{
       rules:[
           {
               test:/\.css$/,
               use:["style-loader","css-loader"]
           }
       ]
    },
    mode:"development",//显示具体是哪个文件报错
    devtool:"inline-source-map",//可以深挖
    devServer:{
        headers:{
            "Access-Control-Allow-Origin":"*",
        },
        contentBase:"./dist",//webpack-dev-server打包后的文件放到内存中，源码修改自动打包刷新浏览器,[WDS] Live Reloading enabled.
        //hot:true,//模块热替换,刷新浏览器，dom执行的才是最新代码
        //[HMR] Waiting for update signal from WDS...
        //[WDS] Hot Module Replacement enabled.
        //[WDS] Live Reloading enabled.
        //hotOnly:true//模块热替换,无需刷新浏览器，dom执行的就是最新代码,推荐使用
        
    },
    plugins:[
        new CleanWebpackPlugin({}),//清楚output配置的目录下文件，重新生成
        new HtmlWebpackPlugin({
            title:"kris",
            template:"./src/index.html",
            hash:true,//引入的文件名含有hash值
            cache:true//Emit the file only if it was changed//？
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
    
    
}
