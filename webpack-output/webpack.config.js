//webpack.config.js
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
let path=require("path");
module.exports = {
    entry:{
        app:"./src/index.js",
        print:"./src/print.js"
    },
    output:{
        filename:"[name][hash:5].bundle.js",
        path:path.resolve(__dirname,"./dist")
    },
    mode:"development",//显示具体是哪个文件报错
    devtool:"inline-source-map",//可以深挖
    devServer:{
        contentBase:"./dist"//webpack-dev-server打包后的文件放到内存中，源码修改自动编译刷新浏览器
    },
    plugins:[
        new CleanWebpackPlugin({}),//清楚output配置的目录下文件，重新生成
        new HtmlWebpackPlugin({
            title:"kris",
            template:"./src/index.html",
            hash:true,//引入的文件名含有hash值
            cache:true//Emit the file only if it was changed//？
        })
    ]
    
    
}
