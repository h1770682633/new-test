// src目录别名设置
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    assetsDir: "./",
    devServer: {
        disableHostCheck: true,
        port: 8081,
        open: false,
        // 配置跨域
        proxy: {
            "/api": {
                target: "https://gjf.h5.luckyxp.com.cn", //源地址
                changeOrigin: true, //改变源
                secure: true,  // 如果是https接口，需要配置这个参数
                pathRewrite: {
                    "^/api": "https://gjf.h5.luckyxp.com.cn" // 使用"/api"来代替"http://gjf.h5.luckyxp.com.cn"
                }
            }
        }
    },
    publicPath: "./",
    outputDir: process.env.outputDir || "dist",
    runtimeCompiler: undefined,
    productionSourceMap: true,
    parallel: undefined,
    css: undefined,
    // filenameHashing:true,
    chainWebpack: config => {
        // 其他配置
        const imagesRule = config.module.rule("images");
        imagesRule.uses.clear();
        imagesRule
            .use("url-loader")
            .loader("url-loader")
            .options({
                limit: 1,
                fallback: {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]"
                    }
                }
            });
            //图片资源在template和style中使用别名的时候必须要在前面带上~，js中使用assets中的图片资源只能用require()方法，其他的可以直接使用别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set("style", resolve("src/assets/css"))
            .set("img", resolve("src/assets/img"))
            .set("views", resolve("src/views"));
    },
};