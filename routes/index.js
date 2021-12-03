const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('sin f5');
});

module.exports = router;