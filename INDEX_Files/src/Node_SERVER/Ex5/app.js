const {createServer} = require("http");
const fs = require("fs");
const path = require("path");


const server = createServer((req,res)=>{
    console.log(`Incoming Request : ${req.method} ${req.url}`);  

    if (req.url === "/data") {

        res.writeHead(200, {
            "content-type": "text/plain",
            "x-powered-by" : "node-fs-callback"
        });

        fs.readFile(path.join(__dirname,'data.txt'), "utf8", (err, fileData)=>{
            if (err){
                res.writeHead(500, {
                    "content-type":"text/plain"
                });
                res.end("File Read Failed !");
                return;
            }

            res.write("---FILE START ---\n");
            res.write(fileData);
            res.end("\n---FILE END---");
        });
    } else {
        res.writeHead(404, {
            "content-type":"text/plain"
        });
        res.end("Route not found !");
    }
});

server.listen(3000, ()=>{
    console.log("Server Running at http://localhost:3000");
});