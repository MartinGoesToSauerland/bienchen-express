const express = require('express');
const router = express.Router();
const https = require('https');

router.get('/', (req, res, next) => {
    return res.status(200).send( "hello world" )
  });

  module.exports = router;