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