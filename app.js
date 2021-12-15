var http = require('http')

http.createServer(function(req,res){

    res.write("Welcome back Alien!!");
    res.end();
    
}).listen(8080);

// The listen command defines the port on which the app is going to run.
// The port being used over here is 8080.