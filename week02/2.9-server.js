/**
 * 第2周 9、HTTP请求｜服务端环境准备
 */

const http = require('http');

const port = 12345;
http.createServer( (request, response) => {
  let body = [];
  request.on('error', err => {
    console.error(err);
  }).on('data', chunk => {
    //body.push( chunk.toString() );
    body.push( chunk );
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body:', body);
    response.writeHead(200, {'Content-Type': 'text/html', 'Transfer-Encoding': 'chunked'});
    response.end('Hello World');
  })
}).listen(port);

console.log(`server started on ${port}`);