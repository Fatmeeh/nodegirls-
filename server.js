const http = require('http');
const handlers = require('./src/handler.js')

function handler (request, response) {
    var endpoint=request.url
    console.log(endpoint);
    var method=request.method
    console.log(method);
    if (endpoint === "/") {
        handlers.handelHome(request,response)
      }
    else if (endpoint==='/create/post') {
        handlers.handelCreatePost(request,response)
    } else if (endpoint==='/post') {
        handlers.handelPost(request,response)
    }else{      
        handlers.handelFiles(request,response)
      }

}



        
var server = http.createServer(handler);

server.listen(8080, function () {

    console.log("Server is listening on port 8080. Ready to accept requests!");
});

