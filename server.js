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
    else if (endpoint==='/create-post') {
        handlers.handelPost(request,response)
    }else{
        // response.writeHead(404)
        handlers.handelFiles(request,response)
        //   response.end('not found error #404')
      }

}



        
var server = http.createServer(handler);

server.listen(8080, function () {

    console.log("Server is listening on port 8080. Ready to accept requests!");
});

