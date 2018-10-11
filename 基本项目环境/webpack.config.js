var webpack = require('webpack'),
	path = require('path'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	postcssPxToViewport = require('postcss-px-to-viewport');


module.exports = {
	// 模式
	mode: 'development', // 开发模式
	devtool: 'inline-source-map', // 源代码映射方式
	context: __dirname, // webpack 项目所在路径
	// 入口文件
	entry: {
		app: './src/index'
	},
	// 出口文件
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',
	},
	// 模块
	module:{
		rules:[
			{
			  test:/\.css$/,
			  //注意：这里还需要更改一下
			  use:ExtractTextPlugin.extract({
				publicPath: '../',
				fallback: "style-loader",
				use: "css-loader",
			  })
			},
			            //解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
// sass文件的处理
	{
	    test: /\.scss$/,
	    use: ExtractTextPlugin.extract({
	        fallback: 'style-loader',
	        use: ['css-loader', 'sass-loader','postcss-loader',
	{
		loader: require.resolve('postcss-loader'),
		options: {
			ident: 'postcss',
			plugins: () => [
				postcssPxToViewport({ 
					viewportWidth: 640, 
					viewportHeight: 1136, 
					unitPrecision: 3, 
					viewportUnit: 'vw', 
					selectorBlackList: ['.ignore', '.hairlines'], 
					minPixelValue: 1, 
					mediaQuery: false 
				  })
			],
		}
	}]
	    })
	} ,
			{ test: /.(jpg|png|gif|svg)$/,
				loader: 'url-loader',
                options: {
                    limit: 100,
                    name: 'src/assets/images/[name].[hash:7].[ext]',
                    // publicPath:"/"
                }
		 	},
			{ test: /\.html$/,loader: 'html-withimg-loader'},
			
		  ]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), //热加载插件
		new HtmlWebpackPlugin({
            filename:'index.html', //生产的html文件名
            template:'./index.html'  
		}),
		//有多少个活动页面，就写多少个HtmlWebpackPlugin
		new HtmlWebpackPlugin({
            filename:'pages/20181011/20181011.html', //生产的html文件名
            template:'./src/pages/20181011/20181011.html'  
		}),
		//这里会按照output的路径打包到css文件夹下面对应的css的名字
		new ExtractTextPlugin('css/styles.css'),
	],
	resolve: {
		 alias: { // 模块别名
			'old-module': 'new-module',
		}
	},
	// 开发服务器
	devServer: {
		https: false, // 是否开启 https
		host: 'localhost', // 服务器域名
		port: 8080, // 服务器端口
		contentBase: path.resolve(__dirname, ''), // 服务器根目录
		stats: "errors-only",     //只打印错误
		index: './index.html', // 服务器默认主页
		open: true, // 开启服务器后自动启动浏览器
		openPage: './index.html', // 自动启动浏览器后打开的页面
		overlay: { // 编译错误或警告时直接在浏览器上出现覆盖
			errors: true,
			warnings: true
		},
		compress: true, // 是否将所有文件进行压缩
		hot: true, // 是否开启模块热替换（需要 HotModuleReplacementPlugin 插件，参见plugins）
		inline: true,//实时刷新
		lazy: true, // 是否开启惰加载
		filename: './dist/bundle.js' // 开启惰加载后受影响的文件
	}
}