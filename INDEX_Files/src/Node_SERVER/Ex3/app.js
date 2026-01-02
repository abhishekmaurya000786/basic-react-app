const express = require('express');
const { Profiler } = require('react');

const app = express();

app.use(function(req,res,next){
 console.log("middleware chala"); 
 next();
}); // app.use() actually means middleware, and it accepts one argument which is a function, and it actually runs before every route handler.

app.use(function(req,res,next){
 console.log("middleware chala 2nd time"); 
 next();
});

app.get("/", function(req,res){
    res.send("Hello World ABHISHEK jiiii    ok ji");
});

app.get("/about", function(req,res){
    res.send(" About Page hai ye");
});

app.get("/profile",function(req, res, next){
    return next(new Error("Something went wrong !"))
})

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send("Something broke !")
})

app.listen(3000);