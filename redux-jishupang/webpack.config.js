const path=require("path");
const htmlWebpackPlugin=require("html-webpack-plugin");
const htmlWebpackPluginInstance=new htmlWebpackPlugin({
    template:path.join(__dirname,"/src/index.html"),//文件路径
    filename:"index.html"//内存中文件名称
});
//loaders从右向左执行
module.exports={
    mode:"development",//"production" "development",
    plugins:[
        htmlWebpackPluginInstance
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader",
                exclude:"/node_modules/"
            },
            {
                test:/\.css|scss$/,                         
                use:["style-loader",{
                    loader:"css-loader",
                    options:{
                        modules:{
                            localIdentName:'[path]:[name]:[local]:[hash:5]'
                        }
                    }
                },"sass-loader"]
            }
        ]
    }

}