var http = require("http");
var url = require("url");
var fs = require("fs");  // 文件模块
const port = '8080';
const host = "127.0.0.1"



const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });
    var urlJson = url.parse(req.url);
    res.write('__dirname : ' + __dirname);  // 返回运行文件所在的目录 C:\Users\10436\Desktop\nodeBase
    res.write("<br>");
    res.write('__filename : ' + __filename);  // 返回运行文件所在的目录具体位置 C:\Users\10436\Desktop\nodeBase\fs.js

    if (urlJson.pathname !== "/favicon.ico") {
        // res.write("<h2>muzidigbig</h2>")
        /** 
         * 获取文件目录的 Stats 对象
         * 文件目录的 Stats 对象存储着关于这个文件或文件夹的一些重要信息，如创建时间、最后一次访问的时间、最后一次修改的时间、文章所占字节和判断文件类型的多个方法等等。 
        
        fs.stat("fs.js", (error, stats) => {
            if(error) {
                console.log(error);
            }else {
                // console.log(stats);
                console.log(`文件：${stats.isFile()}`);  // 判断是否是文件   true
                console.log(`目录：${stats.isDirectory()}`);  // 判断是否是目录    false
            }
        })
        */

        //检查某个目录是否存在
        try {
            //检查某个文件是否存在
            var stat = fs.statSync(__dirname + "/file/hello");
            console.log(stat.isDirectory());//为true的话那么存在，如果为false不存在
        } catch (error) {
            //捕获异常,进行处理异常
            /** 
         * 异步创建目录方法 mkdir(目录存在会报错)
         * mkdir 方法的第一个参数为目录的路径，最后一个参数为回调函数，回调函数有一个参数 err （错误），在执行创建操作后执行，同样需要路径前部分的文件夹都存在。 
        */
            fs.mkdir("file/hello", error => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("成功创建目录：file");
                }
            })
        }

        /** 
         * 测试某个路径下的文件是否存在，如果存在 返回 true ，如果目录不存在 返回false
         * fs.exists(欲检测的文件路径, 回调)
        
        fs.exists("file", (exists) => {
            console.log(exists ? "存在" : "不存在");
        });
        */

        /** 
         * 创建文件写入
         * fs.writeFile(文件路径,内容,回调函数)
         * 第一个参数为写入文件的路径或文件描述符；
         * 第二个参数为写入的数据，类型为 String 或 Buffer；
         * 第三个参数为回调函数，函数内有一个参数 err （错误），回调函数在文件写入数据成功后执行。 
         * 会覆盖原来文件的内容
        
        fs.writeFile("file/hello.txt", "muzidigbig \n", (error) => {
            if(error) {
                console.log(error);
            }else {
                console.log("创建写入成功！")
            }
        })
        */

        /** 
         * 文件读取
         * fs.readFile(文件路径, options,回调函数)
         * 第一个参数为读取文件的路径或文件描述符；
         * 第二个参数为 options ，默认值为 null ，其中有 encoding （编码，默认为 null ）和 flag （标识位，默认为 r ），也可直接传入 encoding ； 
         * 第三个参数为回调函数，函数内有两个参数 err （错误）和 data （数据），该方法没有返回值，回调函数在读取文件成功后执行。 
        */
        fs.readFile("file/hello.txt", "utf8", (error, data) => {
            if (error) {
                console.log(error);
            } else {
                // console.log(`读取内容：${data}`)
                /** 
                 * 追加文件
                 * fs.appendFile(文件路径,内容,回掉函数)
                 * 不会覆盖之前的内容
                
                fs.appendFile("file/hello.txt", "今年24岁 \n", error => {
                    if(error) {
                        console.log(error);
                    }else {
                        console.log("追加文件成功！")
                    }
                })
                */
            }
        })

        /** 
         * 读取文件目录
         * fs.readdir(文件路径, options,回调函数)
         * 第一个参数为目录的路径，传入的路径前部分的目录必须存在，否则会报错；
         * 第二个参数为 options ，其中有 encoding （编码，默认值为 utf8 ），也可直接传入 encoding ；
         * 第三个参数为一个回调函数，回调函数有两个参数 err （错误）和 data （存储文件目录中成员名称的数组），在读取文件目录后执行。
        
        fs.readdir("file","utf8", (error, files) => {
            if(error) {
                console.log(error);
            }else{
                console.log(files,files instanceof Array) // true
            }
        })
        */

        /** 
         * 文件重命名
         * fs.rename(旧文件的路径,新文件的路径,回调函数)；
         * 重复命名会报错
        
        fs.rename("file/test.js", "file/test2.js", error => {
            if(error) {
                console.log(error);
            }else{
                console.log('文件重命名成功！');
            }
        })
        */

        /** 
         * 文件拷贝写入
         * 第一个参数为被拷贝的源文件路径；
         * 第二个参数为拷贝到的目标文件路径，如果目标文件不存在，则会创建并拷贝；
         * 第三个参数为回调函数，在拷贝完成后执行。
        
        fs.copyFile("file/hello.txt", "file/hello2.txt", error => {
            if(error) {
                console.log(error);
            }else {
                fs.readFile("file/hello2.txt", "utf8", (error, data) => {
                    if(error) {
                        console.log(error);
                    }else {
                        console.log(data);
                    }
                })
            }
        })
        */

        /** 
         * 管道流
         * 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
         * 写入文件不存在可创建并写入
        
       // 创建一个可读流
       var readerStream = fs.createReadStream("file/hello.txt");
       // 创建一个可写流
       var writerStream = fs.createWriteStream("file/hello2.txt");
       // 管道读写操作
       // 读取 hello.txt 文件内容，并将内容写入到 hello2.txt 文件中
       readerStream.pipe(writerStream);
       */

        /** 
         * 打开文件 open
         * fs.open()
         *  open 方法有四个参数：
         *   path：文件的路径；
         *   flag：标识位；
         *   mode：权限位，默认 0o666 ；
         *   callback：回调函数，有两个参数 err （错误）和 fd （文件描述符），打开文件后执行。
        */
        fs.open(__dirname + "/file/hello.txt", "r", (error, fd) => {
            if (error) {
                console.log(error);
            } else {
                console.log(fd); //4复制代码
                /** 
                 * 关闭文件 close
                 * 第一个参数为关闭文件的文件描述符 fd；
                 * 第二参数为回调函数，回调函数有一个参数 err （错误），关闭文件后执行。 
                */
                fs.close(fd, error => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("关闭文件成功！")
                    }
                })
            }
        })

        /** 
         * 删除文件目录
         * 第一个参数要删除目录的路径
         * 第二个参数为回调函数，函数中存在一个参数 err （错误），在删除目录操作后执行。 
        
        fs.rmdir(__dirname + "/a/b", err => {
            if (!err) console.log("删除成功");
        });
        */

        /** 
         * 删除文件操作
        
        fs.unlink("a/index.js", err => {
            if (!err) console.log("删除成功");
        });
        */



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