
const http = require('http');
const URL = require('url');


const server=http.createServer(function (req,res) {
    /*if(req.url=="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write('<h2> this is home page</h2>')
        res.end();

    } else if(req.url=="/about"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write('<h2> this is about page</h2>')
        res.end();

    } else if(req.url=="/contact"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write('<h2> this is contact page</h2>')
        res.end();

    }*/

    const myUrl="https://rabbil.com/blog.html?year=202&month=jaly";
    const myUrlObj=URL.parse(myUrl,true);
    const myHostName= myUrlObj.host;
    const myPathName= myUrlObj.pathname;
    const mySearchName= myUrlObj.search;
    res.writeHead(200,{"Content-Type":"text/html"})
   res.write(myHostName)
    res.end;
});

server.listen(5050);
console.log('server run success');