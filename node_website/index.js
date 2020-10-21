const fs = require('fs');
const http = require('http');


const server = http.createServer(function (req, res) {
    if (req.url == "/") {
        let data=fs.readFileSync("home.html","utf8");
        res.end(data);

    } else if (req.url == "/about") {
        let data=fs.readFileSync("about.html","utf8");
        res.end(data);

    } else if (req.url == "/contact") {
        let data=fs.readFileSync("contact.html","utf8");
        res.end(data);

    } else if (req.url == "/blog") {
        let data=fs.readFileSync("blog.html","utf8");
        res.end(data);

    }

});
server.listen(8081);
console.log('server run success');
