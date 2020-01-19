var http = require('http');
var fs = require('fs');
var querystring=require('querystring');

function handler (request, response) {
    var endpoint=request.url
    console.log(endpoint);
    var method=request.method
    console.log(method);
    if (endpoint === "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
    
        fs.readFile(__dirname + '/public/index.html', function(error, file) {
          if (error) {
            console.log(error);
            return;
          }
    
          response.end(file);
        });
      }else if (endpoint === "/img/image.jpg") {
        response.writeHead(200, {"Content-Type": "image/jpeg"});
    
        fs.readFile(__dirname + '/public/img/image.jpg', function(error, file) {
          if (error) {
            console.log(error);
            return;
          }
    
          response.end(file);
        });
      }
      else if (endpoint==='/main.css') {
        response.writeHead(200, {"Content-Type": "text/css"});
    
        fs.readFile(__dirname + '/public/main.css', function(error, file) {
          if (error) {
            console.log(error);
            return;
          }
    
          response.end(file);
        });
      }
      else if (endpoint==='/create-post') {
        var allTheData = '';
       
        console.log('hiiiii')
       
        request.on('data', function (chunkOfData) {
        
            allTheData += chunkOfData;
        });
        
        request.on('end', function () {

            var convertedData = querystring.parse(allTheData);
            console.log(convertedData);  
            response.writeHead(301,{"Location": " /"});

            response.end();
       
        });
    
      }else{
          response.writeHead(404)
          response.end('not found error #404')

      }

}



        
var server = http.createServer(handler);

server.listen(8080, function () {

    console.log("Server is listening on port 8080. Ready to accept requests!");
});

