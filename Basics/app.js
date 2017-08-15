var url = require('url');
var fs = require('fs');

function renderHTML(path, response){
    var data = fs.readFile(path, null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write("Page not Found");
        }
        else{
            response.write(data);
        }
        response.end();
    })
}


module.exports = {
    myroute : function(request, response){
        response.writeHead(200, {"Content-Type" : "text/html"})
        var path = url.parse(request.url).pathname;

        switch(path){
            case '/':
                    renderHTML('./index.html', response);
                break;
            case '/user':
                    renderHTML('./user.html', response);
            break;
            default :
                    response.writeHead(404);
                    response.write("Invalid Route!!!!");
                    response.end();
        }

    }
}
