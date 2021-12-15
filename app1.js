const express = require('express');

const app = express();

app.get('/', function(re, res){

    res.send("Hello World!!!");
})

app.get('/alien', function(req, res){

    const id = req.query.id;
    res.send("Welcome here Alien!!! "+ id);
})

app.get('/alien/:id', function(req, res){

    const id = req.params.id;
    res.send("Hey "+id);
})

app.listen(9000, function(req,res){

    console.log("Hello World!!");
});

// The listen command defines the port on which the app is going to run.
// The port being used over her is 9000.