// Require the http module
var http = require('http');

// Create server function
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Text to be written
  res.write('Hello World!');

  // End server
  res.end(""); 

  // Any res.write() line here will be ignored because its placed after res.end()

  
}).listen(8080);