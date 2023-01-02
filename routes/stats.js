const StatsController = require("../Controllers/statsController");
const statsController = new StatsController();
const express = require("express"); 
const router = express.Router();

router.get('/parcels_rented', async (req, res, next) => {
    const response = await statsController.getAllRentedParcelsInProcent();
    return res.status(200).send( response );    
});

module.exports = router;