const path = require('path');
//进行自动清除相应的打包文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'img/[name].[hash:4][ext]'
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
    plugins: [
        new CleanWebpackPlugin()
    ]
}
// {
    //     test: /\.css$/, //一般是一个正则表达式，用于匹配我们需要处理的文件类型
    //     use: [
    //         'style-loader',
    //         'css-loader',
    //         {
    //             loader: 'postcss-loader',
    //             options: {
    //                 postcssOptions: {
    //                     plugins: [
    //                         require('postcss-preset-env')
    //                     ]
    //                 }
    //             }
    //         }
    //     ]
    //     //loader的执行顺序，要么从下往上，要么从右往左
    //     //'css-loader'让webpack能识别css语法，不能将样式导入
    // },