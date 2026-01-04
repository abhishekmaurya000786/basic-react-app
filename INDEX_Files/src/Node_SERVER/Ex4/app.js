const path = require("path");
const {createServer} = require("http");
const fs = require('fs');

const server = createServer((req,res)=>{
    // This will handle only root url only !
    if (req.url == '/'){
        // reading file uasing callback API
        // fs.readFile('index.html', "utf8", (err,data)=>{
        fs.readFile(path.join(__dirname,'index.html'), "utf8", (err,data)=>{
            if (err) {
                res.writeHead(500, {"content-type":"text/html"});
                res.end("Internal Error..");
                return;
            }
            // if file reads succeeds
            res.writeHead(200, {"content-type" : "text/html"});
            res.end(data);
        });
    } else {
        // Handles Unknown routes !
        res.writeHead(404, {"content-type" : "text/plain"});
        res.end("Page not Found !");
    }
});
server.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000");
});