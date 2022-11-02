const AreaController = require("../Controllers/areaController");
const areaController = new AreaController();
const express = require("express"); 
const router = express.Router();
// const userMiddleware = require('../middleware/users.js'); 

router.get('/', async (req, res, next) => {
    const response = await areaController.getAll();
    return res.status(200).send( response )
});

router.get('/:id', async (req, res, next) => {
    const response = await areaController.get(req);
    return res.status(200).send( {message: "area ok", data: response} );
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

router.put('/:id', userMiddleware.isLoggedIn, async (req, res, next) => {
  const response = await countryController.put(req);
  return res.status(201).send( {message: "country updated!", data: response} );
});



*/

module.exports = router;