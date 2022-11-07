const express = require('express');
const router = express.Router();
const https = require('https');

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

 /**
 * EMAILS
 * POST
 * @note: user will store in req.userData
 */
  const emailsRouter = require("../routes/emails");
  router.use("/email", emailsRouter);

module.exports = router;