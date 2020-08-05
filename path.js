var http = require("http");
var url = require("url");
var path = require("path");  // 用于处理文件与目录的路径

const port = "8080";
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html; charset = utf-8"});
    // res.write("muzidigbig")
    if(req.url !== "/favicon.ico") {
        const driname = __dirname;
        const filename = __filename;
        res.write(driname)
        res.write(filename)


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