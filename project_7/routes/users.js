const express = require('express');

const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const fsp = fs.promises;

router.get('/', (req, res) => {
  fsp.readFile('data/users.json', 'utf8')
    .then((file) => {
      res.send(file);
    })
    .catch((error) => console.error(error));
});

router.get('/:userId', (req, res) => {
  fsp.readFile('data/users.json', 'utf8')
    .then((file) => {
      res.send(JSON.parse(file).find((el) => el.id === Number(req.params.userId)));
    })
    .catch((error) => console.error(error));
});

router.post('/', (req, res) => {
  fsp.readFile('data/users.json', 'utf8')
    .then((file) => {
      const jsFile = JSON.parse(file);
      req.body.id = uuidv4();
      const newFile = [...jsFile, req.body];
      fsp.writeFile('data/users.json', JSON.stringify(newFile), 'utf8');
    });
  res.send('hello');
});

module.exports = router;
