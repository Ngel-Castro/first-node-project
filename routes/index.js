const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.send('sin f5');
});
router.get('/login', (req, res) => {
  res.send('Dentro de Login');
});
router.get('/logout', (req, res) => {
  res.send('Ahora Logout');
});
module.exports = router;