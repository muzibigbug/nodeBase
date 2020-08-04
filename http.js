var http = require("http");   // 创建本地服务器
var url = require("url");  // URL模块用于解析和处理URL字符串
var ejs = require("ejs");

const port = "8888";  // 设置端口
const host = "127.0.0.1";  // 设置主机名

const server = http.createServer(function (require, response) {
    /** 
     * 发送HTTP头部
     * HTTP 状态值：200 === ok
    */
    /** 
     * 向请求的客户端发送响应头。
     * 该函数在一个请求内最多只能调用一次，如果不调用，则会自动生成一个响应头。
     * 设置HTTP头部，状态码：200，文件类型html，字符集utf8
    */
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // response.write("第一次请求");
    if (require.url !== "/favicon.ico") {   // 屏蔽/favicon.ico这个必要的路径
        // console.log(url.parse(require.url).pathname)
        //转为对象，将URL字符串变为JSON对象。
        var urljson = url.parse(require.url,true);
        // console.log(urljson)
        //得到文件路径(host后面的路径)
        var pathname = urljson.pathname;
        //得到查询字符串
        var qs = urljson.query;
        //转为查询对象，和url.parse加上true非常类似
        // var qsjson = querystring.parse(qs);
        //得到拓展名
        // var extname = path.extname(pathname);

        if (url.parse(require.url).pathname == "/login") {
            console.log("登录")
        } else {
            console.log("找不到此页面")
        }



    }
    // 发送响应数据 "hello World"
    response.end();
});
/**
 * 启动服务器监听指定端口
 * @param {String} port 端口
 * @param {String} host 主机名
 * @param {Function} callback 回调函数
 */
server.listen(port, host, error => {
    if (error) {
        throw error;
    } else {
        console.log("启动成功！")
    }
})
