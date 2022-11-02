const Repository = require("../Repositories/areaRepository");
const Model = require("../Models/Area");
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