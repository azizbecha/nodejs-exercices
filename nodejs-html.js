// Require the http module
var http = require('http');

// Create server function
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Text to be written
  res.write('<h1>Hello World!</h1>');

  // End server
  res.end(""); 

  // This line will be ignored because its placed after res.end()
  res.write('Another line');
  
}).listen(8080); // Port