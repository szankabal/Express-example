const http = require('http');

http.createServer((req, res) => {
  if (req.path === '/user' && req.method === 'GET') {
    console.log('listáázd ki a usereket');
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>HELLO WORLD!</h1>');
  res.end();
}).listen(8080);
