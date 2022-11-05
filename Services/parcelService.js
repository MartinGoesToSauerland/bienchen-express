const Repository = require("../Repositories/parcelRepository");
const Model = require("../Models/parcel");
const Service = require("./service");

module.exports = class ParcelService extends Service {
    constructor() {
        super(Model, Repository);
    }

    async getParcelsByAreaId(id) {
        const d = await this.Repository.getAllWithRelationsByFilter("area_id", id);

        const statusMapper = {
            free: 0,
            reserved: 1,
            rented: 2
          }

          return d.map(_ => {
            const m = {
              id: _.id,
              area_id: _.area_id,    
              status: statusMapper[_.status],
              details: {
                firstname: _.firstname,
                lastname: _.lastname,
                start_at: _.start_at,
                end_at: _.end_at,
                created_at: _.created_at
              }
            }
            return m
          })        
        // return this.Repository.getAllWithFilter("area_id", id);
    }

    updateAfterEdit(object, newData) {
        return this.Repository.updateAfterEdit(object, newData);
    }
}