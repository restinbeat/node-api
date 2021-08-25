const models = require('../../../models');

// API 로직
const index = function (req, res) {
  req.query.limit = req.query.limit || 10;
  // parseInt (String, 진수)
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  models.User
    .findAll({
      limit: limit
    })
    .then(users => {
      res.json(users);
    });

  // slice (start index, end index)
  // res.json(users.slice(0, limit));
};

const show = function (req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  models.User.findOne({
    where: {id}
  }).then(user => {
    if (!user) return res.status(404).end();
    res.json(user);
  });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  models.User.destroy({
    where: {id}
  }).then(() => {
    res.status(204).end();
  })
};

const create = (req, res) => {
  // express에선 req.body 값을 바로 사용할 수 없으므로 (지원하지 않음)
  // body-parser 추가 설치 필요
  const name = req.body.name;
  if (!name) return res.status(400).end();

  // const isConflict = users.filter(user => user.name === name).length
  // if (isConflict) return res.status(409).end();

  // const id = Date.now();
  // const user = { id, name };
  // users.push(user);

  models.User.create({name})
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).end();
      }
      res.status(500).end();
    })
};

const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const name = req.body.name;
  if (!name) return res.status(400).end();
  
  // const isConflict = users.filter(user => user.name === name).length
  // if (isConflict) return res.status(409).end();

  // const user = users.filter(user => user.id === id)[0]
  // if (!user) return res.status(404).end();

  // user.name = name;

  models.User.findOne({where: {id}})
    .then(user => {
      if (!user) return res.status(404).end();
      user.name = name;
      console.log(user.name);
      user.save()
          .then(_ => {
            res.json(user);
          })
          .catch(err => {
            if (err.name === 'SequelizeUniqueConstraintError') {
              return res.status(409).end();
            }
            res.status(500).end();
          })
    })
};

module.exports = {
  index: index,
  show: show,
  destroy: destroy,
  create: create,
  update: update
};