const express = require('express');
const router = express.Router();
const https = require('https');
// const emailService = require("../Services/emailService");
//const d = require("../db/data");
// const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');



/**
 * AREAS
 * GET, POST, PUT, DELETE
 * @note: user will store in req.userData
 */
const areasRouter = require("../routes/areas");
router.use("/areas", areasRouter);

/**
 * PARACELS
 * GET, POST, PUT, DELETE
 * @note: user will store in req.userData
 */
const parcelsRouter = require("../routes/parcels");
router.use("/parcels", parcelsRouter);

/**
 * USERS
 * GET, POST, PUT, DELETE
 * @note: user will store in req.userData
 */
const usersRouter = require("../routes/users");
router.use("/users", usersRouter);

/**
 * CONTRACTS
 * GET, POST, PUT, DELETE
 * @note: user will store in req.userData
 */
 const contractsRouter = require("../routes/contracts");
 router.use("/contracts", contractsRouter);


/*
  router.get("/areas", (req, res, next) => {

    try {
      res.status(200).send({
        data: d
      });
    } catch(err) {
      next(err);
    }
  });*/
/*
  router.post("/parcels", async (req, res, next) => {
    console.log(req.body)
    // emailService.sendEmail(req.body);

    try {
      res.status(200).send({
        data: {msg: "hallo"}
      });
    } catch(err) {
      next(err);
    }
  });
  */

module.exports = router;