const Repository = require("./repository");

module.exports = class ParcelRepository extends Repository {

    table = 'parcels'

    async getAllWithRelationsByFilter(key, value) {
        // get all parcels
        const sql = `SELECT p.id, p.status FROM ${this.table} p WHERE p.${key} = ?`;
        const params = [value];
        const parcels = await this.all(sql, params);

        // fetch all parcels ids which are reserved and rented
        const ids = [];
        parcels.forEach(_ => {
          if (_.status != 0) {
          ids.push(_.id)
          }
        });

        // get all contracts with users relation
        const sql2 = `SELECT c.active, c.parcel_id, c.user_id, c.start_at, c.end_at, c.created_at, u.id as user_id, u.firstname, u.lastname FROM contracts c
        JOIN users u ON u.id = c.user_id
        WHERE parcel_id IN (${ids}) AND active = 1`
        const params2 = [];
        const contracts = await this.all(sql2, params2);

        // merge parcels with contracts
        const dict = contracts.reduce((acc, val) => ({...acc, [val.parcel_id]: val}), {});

        const result = parcels.map(val=> {
          if (! dict[val.id]) return val; //If nothing in "dict" object by id we return original obj
          const mergedObj = {...val, ...dict[val.id]}; //Merge two objects
          delete Object.assign(mergedObj, {user_id: mergedObj.parcel_id})['parcel_id']; //create "user_id" by the value of "a_id"  and delete old key "a_id"
          return mergedObj;
        });

        return result;
    }

    updateAfterEdit(object, newData) {
        return this.update(object, newData);
    }
    /*
    async x_getAllWithRelationsByFilter(key, value) {
        console.log("hello", key, value)
        const sql = `SELECT p.id, p.status, c.active, c.user_id, c.start_at, c.end_at, c.created_at, u.id as user_id, u.firstname, u.lastname  FROM ${this.table} p
        LEFT JOIN  contracts  c ON c.parcel_id = p.id
        LEFT JOIN users u ON c.user_id = u.id
        WHERE p.${key} = ? LIMIT 10`; // AND c.active IS NOT 0
        const params = [value];

        const data = await this.all(sql, params);
        console.log(data)
        return data.filter(_ => _.active != 0);
    }

    createCountry(data) {
        const sql = `INSERT INTO ${this.table} (code, name) VALUES (?,?)`;
        const params = [data.code, data.name];

        return this.run(sql, params);
    }

    update(country, newCountryData) {
        const keyValues = [];
        Object.keys(newCountryData).forEach(e => {
            keyValues.push(`${e} = ?`)
        });

        const sql = `UPDATE ${this.table} SET ${keyValues.toString()} WHERE id = ?`;
        const params = [...Object.values(newCountryData), country.id];

        return this.run(sql, params);
    }

    getAllCountries() {
        const sql = `SELECT * FROM ${this.table}`;
        const params = [];

        return this.all(sql, params);
    }

    getCountryById(id) {
        const sql = `SELECT * FROM ${this.table} where id = ?`;
        const params = [id];

        return this.get(sql, params);
    }

    getCountryByKey(key, value) {
        const sql = `SELECT * FROM ${this.table} WHERE ${key} = ?`;
        const params = [value];
        return this.get(sql, params);
    }

    deleteCountry(id) {
        const sql = `DELETE FROM ${this.table} WHERE id = ?`;
        const params = [id];

        return this.run(sql, params);
    }*/

}