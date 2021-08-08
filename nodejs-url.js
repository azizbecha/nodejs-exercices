var http = require('http');
var url = require('url');
var adr = 'http://localhost:8080/default.html?year=2021&month=august';
var q = url.parse(adr, true);
var host = q.host;
var pathname = q.pathname;
var search = q.search;
var qdata = q.query;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  
    // Text to be written
    res.write("<h2>Host: "+host+"</h2>");
    res.write("<h2>Path: "+pathname+"</h2>");
    res.write("<h2>Search: "+search+"</h2>");
    res.write("<h2>Year: "+qdata.year+"</h2>");
    res.write("<h2>Month: "+qdata.month+"</h2>");
  
    // End server
    res.end(""); 
  
    // Any res.write() line here will be ignored because its placed after res.end()
    
  }).listen(8080);

/*
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'*/