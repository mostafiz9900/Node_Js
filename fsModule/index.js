
const fs=require('fs');
const http=require('http');


const server=http.createServer(function (req,res){

    if(req.url=='/'){
     /*   fs.readFile("Home.html",function (error,data) {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data);
            res.end();

        });*/

        // file read sync method
     /*   let myData=fs.readFileSync("Home.html");
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(myData);
        res.end();*/

        //file write
        fs.writeFile("demo.txt","hello world",function (error) {
            if (error){
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write('file write fail');
                res.end()
            }else {
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write('file write success');
                res.end()
            }
        })
    }

});
server.listen(6060);
console.log('server run success');
