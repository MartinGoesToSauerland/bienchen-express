const Service = require("../Services/areaService");
const Controller = require("./controller");

module.exports = class AreaController extends Controller {
    constructor() {
        super(Service);
    }
    /*
    getAll(data) {
        let results;
        if (! data.query.country) {
            results = this.Service.getAll();
        } else {
            const country_id = parseInt(data.query.country);
            results = this.Service.getCitiesByCountryId(country_id);
        }
        return results;
    }*/
}