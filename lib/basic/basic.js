const http = require('http');

http.createServer();

// math module
const math = require('./math.js');
const result = math.sum(1, 2);
console.log(result);


// data file system
const fs = require('fs');
// Synchronous
const data = fs.readFileSync('./data.txt', 'utf-8');
console.log(data);

// Asynchronous
const data = fs.readFile('./data.txt', 'utf-8', function(err, data) {
  console.log(data);
});