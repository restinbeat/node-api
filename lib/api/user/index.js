// 라우팅 설정
const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

var users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'bek' },
  { id: 3, name: 'chris' },
]

router.get('/', ctrl.index);

router.get('/:id', ctrl.show);

router.delete('/:id', ctrl.destroy);

router.post('/', ctrl.create);

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const name = req.body.name;
  if (!name) return res.status(400).end();
  
  const isConflict = users.filter(user => user.name === name).length
  if (isConflict) return res.status(409).end();

  const user = users.filter(user => user.id === id)[0]
  if (!user) return res.status(404).end();

  user.name = name;
  res.json(user);
})

module.exports = router;