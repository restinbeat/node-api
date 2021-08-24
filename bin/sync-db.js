const models = require('../models');

module.exports = () => {
  return models.sequelize.sync({force: true}); // force: true 기존의 DB가 있더라도 빈 큐로 만듬
}