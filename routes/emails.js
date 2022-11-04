const EmailController = require("../Controllers/emailController");
const emailController = new EmailController();
const express = require("express"); 
const router = express.Router();

router.post('/', async (req, res, next) => {
    const response = await emailController.post(req.body);
    return res.status(201).send( {message: "email sended!", data: response} );
});

module.exports = router;