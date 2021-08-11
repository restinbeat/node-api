const utils = require('./utils');
const assert = require('assert');

describe('utils.js모듈의 capitalize() 함수는', () => {
  it('문자열의 첫번째 문자를 대문자로 변환한다.', () => {
    // test code
    const result = utils.capitalize('hello');
    assert.equal(result, 'Hello');
  })
})