const http = require("http");
const fs = require("fs").promises;
// const path = require("path");


const server = http.createServer((req,res)=>{
    const log = `${Date.now()} : ${req.url} New Request Recieved !\n`;

    fs.appendFile('./Data.txt', log,(err,data)=>{
        switch(req.url){
            case '/':
                res.end("Homepage"); break;
            case '/about':
                res.end("This is about page "); break;
            default:
                res.end("404 Not Found !");
        }
    });
});

server.listen(3000, ()=>{
    console.log("Yes, Listening..! at http://localhost:3000")
})