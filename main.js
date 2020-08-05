var http = require("http");   // 服务器
var url = require("url");   // 前台请求路径
var path = require("path");     // 文件路径
var ejs = require("ejs");   // 后台渲染模块

const port = "8080";
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html'; charset=utf-8" });
    // res.write("ejs")
    // console.log(req.url)
    if (req.url !== "/favixon.ico") {
        /** 
         * ejs.renderFile(filename, data, options, function (err, str) {});
        */
        ejs.renderFile('./views/login.ejs','{name:"muzidigbig"}', (err, data) => {
            
            if(err) {
                console.log(err);
            }else {
                // console.log('data',data)
            }
        })

    }
    res.end();
})
server.listen(port, host, error => {
    if (error) {
        throw error;
    } else {
        console.log("启动成功！")
    }
})