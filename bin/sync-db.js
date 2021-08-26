const models = require('../models');

module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === 'test' ? true : false
  }
  return models.sequelize.sync(options); // force: true 기존의 DB가 있더라도 빈 큐로 만듬
}