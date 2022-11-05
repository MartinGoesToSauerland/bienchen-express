const Service = require("../Services/parcelService");
const Controller = require("./controller");

module.exports = class ParcelController extends Controller {
    constructor() {
        super(Service);
    }
    
    getAll(data) {
        let results;
        if (! data.query.area_id) {
            results = this.Service.getAll();
        } else {
            const area_id = parseInt(data.query.area_id);
            results = this.Service.getParcelsByAreaId(area_id);
        }
        return results;
    }
}