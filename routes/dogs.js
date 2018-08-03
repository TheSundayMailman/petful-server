'use strict';

const express = require('express');
const router = express();

const dogDb = require('../db/dog-db.js');

router.get('/', (req, res, next) => {
  res.json(dogDb[0]);
});

module.exports = router;
