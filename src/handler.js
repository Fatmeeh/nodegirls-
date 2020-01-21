
const fs = require('fs');
const querystring=require('querystring');
const path=require('path');
const posts =  require('./posts.json')


const handelHome = function(request, response) {
    console.log(posts)
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
        png: 'image/png',
        ico: 'image/x-icon'
    }
    const filePath = path.join(__dirname ,'..', '/public',endpoint)
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

const handelCreatePost =function (request, response) {
var Data=""
    request.on('data', function (chunkOfData) {
    
        Data+=chunkOfData
    });
    
    request.on('end', function () {
        var utc = new Date()
        var blogPost = querystring.parse(Data)
        posts[utc]=blogPost.post,
        fs.writeFile('./posts.json', JSON.stringify(posts),(error) =>{
        });
        response.writeHead(301,{Location: " /"});
        response.end();  
    });
}
const handelPosts =function (request, response) {
        response.end(JSON.stringify(posts));   
}
module.exports={
    handelHome,
    handelFiles,
    handelCreatePost,
    handelPosts
}