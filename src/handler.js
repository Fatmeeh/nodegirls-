
const fs = require('fs');
const querystring=require('querystring');
const path=require('path');



const handelHome = function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    const filePath = path.join(__dirname ,'..','public','index.html')
    fs.readFile(filePath, function (error, file) {
        if (error) {
            console.log(error);
            return;
        }

        response.end(file);
    });
}
const handelFiles =function (request, response) {
    var endpoint = request.url
    const extention = endpoint.split('.')[1]
    const extentionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        jpg: 'image/jpg'
    }
    const filePath = path.join(__dirname ,'..', '/public/',endpoint)
    console.log(filePath)
    fs.readFile(filePath, function (error, file) {
        if (error) {
            console.log(error);
            return;
        }else{
        response.writeHead(200, { "Content-Type": extentionType[extention] });
        response.end(file);
        }
    });
}

const handelPost =function (request, response) {

    var allTheData = '';
    request.on('data', function (chunkOfData) {
    
        allTheData += chunkOfData;
    });
    
    request.on('end', function () {

        var convertedData = querystring.parse(allTheData);
        console.log(convertedData);  
        response.writeHead(301,{"Location": " /"});

        response.end();
   
    });
}
module.exports={
    handelHome,
    handelFiles,
    handelPost
}