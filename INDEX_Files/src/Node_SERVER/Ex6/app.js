const http = require("http");
const fs = require("fs");
const url = require("url");
// const path = require("path");


const server = http.createServer((req,res)=>{
    const log = `${Date.now()} : ${req.url} New Request Recieved !\n`;

    const myUrl = url.parse(req.url);
    console.log(myUrl);

    if (req.url === '/favicon.ico') return res.end();

    fs.appendFile('./Data.txt', log,(err,data)=>{
        // switch(myUrl.pathname){
        switch(req.url){
            case '/':
                res.end("Homepage"); break;

                // http://localhost:3000/about?myname=abhishek&userid=1&search=dog search it on chrome..!
            case '/about':
                // const username = myUrl.query.pathname;
                res.end("Hi"); break; // ${username}
            default:
                res.end("404 Not Found !");
        }
    });
});

server.listen(3000, ()=>{
    console.log("Yes, Listening..! at http://localhost:3000")
})