const Repository = require("../Repositories/areaRepository");
const Model = require("../Models/area");
const Service = require("./service");

module.exports = class AreaService extends Service {
    constructor() {
        super(Model, Repository);
    }

    /*
    getRoutesByCityId(id) {
        return this.Repository.getRoutesByCityId(id);
    }*/
}