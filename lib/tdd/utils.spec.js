/*
 TDD
 1. Unit Test : Mocah, Should
 2. Integration Test : SuperTest
 */

const utils = require('./utils');
// mocha
// const assert = require('assert');

// should
const should = require('should');

describe('utils.js모듈의 capitalize() 함수는', () => {
  it('문자열의 첫번째 문자를 대문자로 변환한다.', () => {
    // test code
    const result = utils.capitalize('hello');
    // mocha
    // assert.equal(result, 'Hello');
    // should
    result.should.be.equal('Hello');
  })
})

