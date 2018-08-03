'use strict';

const express = require('express');
const router = express();

const catDb = require('../db/cat-db.js');

router.get('/', (req, res, next) => {
  res.json(catDb[0]);
});

module.exports = router;
