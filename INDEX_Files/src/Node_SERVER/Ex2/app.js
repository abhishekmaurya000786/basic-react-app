const express = require('express');

const app = express();

app.get('/',function(req,res){      // this function is always a request handler
    res.send("Hello World ABHISHEK jiiii    ok ji");
});

app.get('/profile',function(req,res){      // this function is always a request handler
    res.send("ABHISHEK OKAY PROFILE PAGE");
});

app.listen(3000);
// app.listen(port, hostname, backlog)