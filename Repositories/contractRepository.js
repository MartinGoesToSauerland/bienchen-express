const Repository = require("./repository");

module.exports = class ContractRepository extends Repository {

    table = 'contracts'

    /*
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