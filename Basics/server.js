var http = require('http');
var route = require('./app');

http.createServer(route.myroute).listen(8001);