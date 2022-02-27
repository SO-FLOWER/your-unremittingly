const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
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
            }
        ]
    }
}