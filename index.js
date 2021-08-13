
/*
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
*/

/* 
hello world node.version

const http = require('http');

// 서버의 주소
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  } else if (req.url === '/users') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('User list');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// listen() 서버는 요청대기상태로 만들어 주는 함수
// 서버가 클라이언트의 요청을 받을 수 있게 종료하지 않고 계속 대기하도록 하는
server.listen(port, hostname, () => {
  // ` : 템플릿 문자열안의 변수는 ${} 사용가능
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/


const express = require('express');   // express middleware : npm i express
const morgan = require('morgan');     // morgan middleware : npm i morgan
const app = express();

// 미들웨어는 인터페이스가 정해져있음 req, res, next
// function logger(req, res, next) {
//   console.log('I am logger');
//   next(); 
// }
// function logger2(req, res, next) {
//   console.log('I am logger2');
//   next();
// }
// // add middleware : app.use() 를 통해 미들웨어를 추가
// app.use(logger);
// app.use(logger2);
// app.use(morgan('dev'));

// app.listen(3000, function() {
//   console.log('Server is running');
// });