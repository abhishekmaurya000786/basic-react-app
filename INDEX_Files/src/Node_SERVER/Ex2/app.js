const express = require('express');

const app = express();

app.get('/',function(req,res){      // this function is always a request handler
    res.send("Hello World ABHISHEK jiiii    ok ji");
})

app.listen(3000);
// app.listen(port, hostname, backlog)