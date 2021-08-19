const app = require('../api');
const request = require('supertest');

describe('GET /users는', () => {
  // api 서버는 비동기 동작
  // it 함수의 두번째 파라미터에 done 콜백함수 넣어주고
  // 테스트가 끝나는 시점에 done이라는 콜백함수를 호출한다
  it ('...', (done) => {
    request(app)
      .get('/users')
      .end((err, res) => {
        console.log(res.body)
        done();
      })
  })
})