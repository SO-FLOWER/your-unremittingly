//进行自动清除相应的打包文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//在静态文件中自动添加生成相应的html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//webpack自带的一些配置样式，进行图标的样式替换
const { DefinePlugin } = require('webpack');
//webpack 合并
const { merge } = require('webpack-merge');


//应用目录下进行寻找--
const resolveApp = require('./paths');
//导入其他配置
const prod = require('./webpack.prod');
const dev = require('./webpack.dev');

//定义对象，保存base配置信息
const commonConfig = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolveApp('./dist'),
        assetModuleFilename: 'img/[name].[hash:4][ext]'
    },
    resolve: {
        extensions: ['.js', 'json', '.ts', '.jsx', '/vue'],
        alias: {
            '@': resolveApp('./src')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            esModule: false
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader']
            },
            // {
            //     test: /\.(png|svg|gif|jpe?g)$/,
            //     // type: 'asset/resource' //默认打包的样式，都是只打包为静态图片
            //     type: 'asset/inline' //打包为data base 64 线上能正常访问的数据
            // },
            {
                test: /\.(png|svg|gif|jpe?g)$/,
                type: 'asset',
                generator: {
                    filename: "img/[name].[hash:4][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024
                    }
                }
            },
            {
                test: /\.(ttf|woff?2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:3][ext]'
                }
            }
        ]
    },
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

module.exports = (env) => {
    const isProduction = env.production;
    const config = isProduction ? prod : dev;
    const mergeConfig = merge(commonConfig, config);
    return mergeConfig;
}