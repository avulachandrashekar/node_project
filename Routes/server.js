var http = require('http');
var mod1 = require('./module1');
var mod2 = require('./module2');
var fs = require('fs');

function onRequest(req, res){
    res.writeHead(200, {'Content-Type' :'text/html'});
    fs.readFile('./index.html', null, function(error, data){
        if(error){
            console.log('Error Occured!!!!');
            res.writeHead(404);
            res.error("File not Found")
        } else {
            res.write(data);
        }
        res.end();
    })
}

http.createServer(onRequest).listen(8000);