//进行自动清除相应的打包文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//在静态文件中自动添加生成相应的html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//webpack自带的一些配置样式，进行图标的样式替换
const { DefinePlugin } = require('webpack');

module.exports = {
    mode: 'production',
    //使用一些插件进行相应的webpack打包
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //设置文档头标题----
            title: 'html-webpack-plugin',
            //进行配置相应的静态文件的目录，进行自定义的html文件模板的打包，
            template: './public/index.html',
        }),
        //进行图标的路径的配置
        new DefinePlugin({
            BASE_URL: '"./"'
        })
    ]
}