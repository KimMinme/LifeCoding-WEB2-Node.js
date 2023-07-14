var http = require('http');
var fs = require('fs');
var url = require('url'); // url 모듈

var app = http.createServer(function(request,response){
    var _url = request.url; // url을 요청해서 _url에 저장
    var queryData = url.parse(_url, true).query; // query string 가져오기
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id); // queryData.id를 보여줌
 
});
app.listen(3000); // port 3000
