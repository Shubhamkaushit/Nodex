var fs = require('fs');


fs.readFile('app2.js','utf8',function(err,data){

  var printeddata = data;
    console.log(data);
});

fs.writeFile('calc1.js', 'console.log("done")', function(err){

    console.log("Task done"); 
});

fs.appendFile('calc1.js', 'console.log("done")', function(err){

    console.log("Task done"); 
})

fs.unlink('calc1.js', function(err){

    console.log("Deleted");
})