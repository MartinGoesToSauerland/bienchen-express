// const Repository = require("../Repositories/statsRepository");
// const Model = require("../Models/user");
const Repository = require("../Repositories/repository");
const Service = require("./service");

module.exports = class StatsService {
    constructor() {}

    async getAllRentedParcelsInProcent() {
        //const sql = `SELECT * FROM parcels WHERE `;
        //const params = [data.code, data.name];
        const repository = new Repository;
        const all = await repository.all("SELECT COUNT(*) as v FROM parcels p", []);
        const rented = await repository.all("SELECT COUNT(*) v FROM parcels p WHERE p.status = 'rented'", []);
        const r = ((rented[0].v / all[0].v) * 100).toString();
        //return this.run(sql, params);
        return Math.round(r).toString();
    }
}