const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');

router.get("/users", (req, res, next) => {
    try {
      res.status(200).send({
        data: {msg: "hallo"}
      });
    } catch(err) {
      next(err);
    }
  });