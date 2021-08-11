// hello world node.version

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
