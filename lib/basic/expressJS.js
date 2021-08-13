// const express = require('express');   // express middleware : npm i express
// const morgan = require('morgan');     // morgan middleware : npm i morgan
// const app = express();

// // 미들웨어는 인터페이스가 정해져있음 req, res, next
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

//================================================================================

// Error Middleware

// const express = require('express');
// const app = express();

// function commonmw(req, res, next) {
//   console.log('commonmw');
//   next(new Error('error ouccered'));
// }

// function errormw(err, req, res, next) {
//   console.log(err.message);
//   // 에러를 처리하거나
//   next()
// }

// app.use(commonmw);
// app.use(errormw);

// app.listen(3000, function() {
//   console.log('Server is running');
// })

//================================================================================

// Express Hello World

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});