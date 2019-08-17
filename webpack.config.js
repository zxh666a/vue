const path = require('path');
const webpack = require('webpack');
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
    mode: "development",
    entry: './src/main.js',//入口，表示要使用webpack打包哪个文件
    output: {//输出文件相关的配置
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'//这是指定输出的文件名称
    },
    devServer:{
        open:true,
        port:3000,
        contentBase:"src",
        hot:true,
        host: '192.168.0.106',
    },
    plugins: [ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
          template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
          filename: 'index.html',// 指定生成的页面的名称
        }),
        new VueLoaderPlugin() // 使用vue-loader 需要vueloaderplugin
      ],
      module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        rules: [ // 所有第三方模块的 匹配规则
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader'] },
          { test: /\.(png|jpg|jpeg)$/, use: 'url-loader' },
          { test: /\.(ttf|eot|woff|woff2|svg)$/, use: 'url-loader' },
          {test:/\.vue$/,use:'vue-loader'},
          {
            test: /\.js$/,
             exclude: /node_modules/, 
             loader: "babel-loader"
        }  
         ]
      },
      resolve:{
        alias:{// 设置被导入时候的路径
          "vue$":"vue/dist/vue.js"
        }
      }
}