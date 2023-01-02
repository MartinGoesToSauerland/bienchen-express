const Service = require("../Services/statsService");
const Controller = require("./controller");

module.exports = class StatsController {

    getAllRentedParcelsInProcent() {
        this.Service = new Service;
        return this.Service.getAllRentedParcelsInProcent();
    }

}
