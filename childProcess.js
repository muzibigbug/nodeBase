var http = require("http");   // 服务器
var url = require("url");   // 前台请求路径
var ejs = require("ejs");   // 后台渲染模块

// 引入Nodejs自带的child_process模块
const childProcess = require('child_process');

const port = '8182';
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("么么么么么");

    res.end();

})
server.listen(port, host, error => {
    if(error) {
        throw error;
    }else {
        childProcess.exec(`start http://${host}:${port}/`)
    }
})