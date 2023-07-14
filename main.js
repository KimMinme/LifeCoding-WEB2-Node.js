var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
		// pathname을 변수 pathname에 저장
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;

    if(pathname === '/'){ // pathname이 root일 경우 페이지 보여줌
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
      response.writeHead(200);
      response.end(template);
      });
    } else{ // 아닐 경우 Not Found라는 메시지를 띄움
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
