const {createServer} = require("http");
const fs = require("fs");
const path = require("path");


const server = createServer((req,res){
    console.log(`Incoming Request : ${req.method} ${req.url}`);

    if (req.url === "/data") {

        res.writeHead(200, {
            "content-type": "text/plain",
            "x-powered-by" : "node-fs-callback"
        });

        fs.readFile(path.join(__dirname(path,'data.txt'), options, callback));
    }
});

server.listen(3000, ()=>{
    console.log("Server Running at https://localhost:3000");
});