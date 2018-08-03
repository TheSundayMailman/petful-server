'use strict';

const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
  res.json({message: 'cats api reached'});
});

module.exports = router;