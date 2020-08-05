var http = require("http");
var url = require("url");
var path = require("path");  // 用于处理文件与目录的路径

const port = "8080";
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });
    // res.write("muzidigbig")
    if (req.url !== "/favicon.ico") {
        const driname = __dirname;  //返回运行文件所在的目录
        const filename = __filename;  //返回运行文件所在的具体位置
        res.write(driname + "<br>" + filename + "<br>");
        // res.write()
        /** 
         * 获取路径中的文件名
         * path.basename(path[, ext])
         * 参数：
            path <string> 完整文件名路径
            ext <string> 可选的文件扩展名
            返回: <string> 文件名
        */
        var baseName = path.basename(filename);
        res.write(baseName + "<br>"); // path.js
        var baseNameJS = path.basename(filename, '.js');
        res.write(baseNameJS + "<br>"); //path

        /** 
         * 获取路径的文件夹
         * path.dirname(path)
         * 参数：
            path <string> ，要返回路径的变量
            返回: <string>
        */
        var dirName = path.dirname(filename)
        res.write(dirName + "<br>"); //C:\Users\10436\Desktop\nodeBase

        /** 
         * 获取路径的扩展名
         * path.extname() 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。
         * 如果 path 的最后一部分没有 . 或 path 的文件名的第一个字符是 .，则返回一个空字符串。
         * path.extname(path)
         * 参数：
            path 是 <string>类型。
            返回: <string>
        */
        var extName = path.extname(filename);
        res.write(extName + "<br>"); // .js

        /** 
         * 格式化一个路径
         * path.format(pathObject) 方法会从一个对象返回一个路径字符串。
         * 参数：
            pathObject <Object> 要转换成路径字符串的设置对象
            dir <string> 所在目录，提供了 pathObject.dir，则 pathObject.root 会被忽略
            root <string> 根目录
            base <string> 文件全名。如果pathObject.base 存在，则 pathObject.ext 和 pathObject.name 会被忽略
            name <string> 文件名字（不带后缀）
            ext <string> 文件后缀
        */
        var formatStr = path.format({
            dir: 'file\\hello',
            base: 'index.html'
        })
        res.write(formatStr + "<br>"); //file\hello\index.html

        /** 
         * 把路径字符串转换成对象
         * path.parse(path) 方法返回一个对象，对象的属性表示 path 的元素。
         * parse方法跟 format方法正好相反，所以不赘述。直接看例子
         {
           root: 'C:\\',
           dir: 'C:\\Users\\10436\\Desktop\\nodeBase',
           base: 'path.js',
           ext: '.js',
           name: 'path'
         }
        */
        var parseObj = path.parse(filename)
        // console.log(parseObj);

         /** 
          * 连接多个路径重点
          * path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
          * 长度为零的 path 片段会被忽略。 如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录。
          * 参数说明：
                ...paths <string> 一个路径片段的序列。
                返回: <string>
         */
        var pathJoin = path.join('/file','index','','html');
        res.write(pathJoin + "<br>")


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