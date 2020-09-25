// srcĿ¼��������
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
        // ���ÿ���
        proxy: {
            "/api": {
                target: "https://gjf.h5.luckyxp.com.cn", //Դ��ַ
                changeOrigin: true, //�ı�Դ
                secure: true,  // �����https�ӿڣ���Ҫ�����������
                pathRewrite: {
                    "^/api": "https://gjf.h5.luckyxp.com.cn" // ʹ��"/api"������"http://gjf.h5.luckyxp.com.cn"
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
        // ��������
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
            //ͼƬ��Դ��template��style��ʹ�ñ�����ʱ�����Ҫ��ǰ�����~��js��ʹ��assets�е�ͼƬ��Դֻ����require()�����������Ŀ���ֱ��ʹ�ñ���
        config.resolve.alias
            .set('@', resolve('src'))
            .set("style", resolve("src/assets/css"))
            .set("img", resolve("src/assets/img"))
            .set("views", resolve("src/views"));
    },
};