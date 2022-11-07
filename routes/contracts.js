const ContractController = require("../Controllers/contractController");
const contractController = new ContractController();
const express = require("express");
const router = express.Router();
// const userMiddleware = require('../middleware/users.js');
const emailService = require("../Services/emailService");

router.get('/', async (req, res, next) => {
    const response = await contractController.getAll();
    return res.status(200).send( response )
});

router.get('/:id', async (req, res, next) => {
    const response = await contractController.get(req);
    return res.status(200).send( {message: "contract ok", data: response} );
});

router.post('/', async (req, res, next) => {
  //console.log("A:",req.body)
  //contractController.post(req.body)
  //res.status(200).send( {data: emailService.sendEmail(req.body)});
  //res.status(200).send( {data: 1});
  //return;
  let response = await contractController.post(req.body);
  let msg = "contract created!";
  let statusCode = 201;
  if (response.status == "error") {
    msg = response.msg;
    statusCode = 409;
    response = null;
  }
  return res.status(statusCode).send( {message: msg, data: response} );
});

router.put('/status/:id', async (req, res, next) => {
  // const response = req.params.id
  const response = await contractController.changeStatus(req, "start");
  return res.status(201).send( {message: "contract updated!", data: response} );
});

/*
router.delete('/:id', userMiddleware.isLoggedIn, async (req, res, next) => {
  const response = await countryController.delete(req);
  return res.status(201).send( {message: "country deleted!", data: response} );
});

router.post('/', userMiddleware.isLoggedIn, async (req, res, next) => {
  const response = await countryController.post(req.body);
  return res.status(201).send( {message: "country created!", data: response} );
});





*/

module.exports = router;