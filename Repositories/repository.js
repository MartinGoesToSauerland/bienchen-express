const db = require("../db/database.js");

module.exports = class Repository {

    /* use this method for inserts,
     * use all if you want all Items,
     * use get if you want single item,
    */
    run(sql, params) {
        return new Promise((resolve, reject) => {
            db.run(sql, params, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID)
                }
            });
        });
    }

    all(sql, params) {
        return new Promise((resolve, reject) => {
            db.all(sql, params, async (err, rows) => {
                if (err) {
                  reject(err);
                } else {
                    resolve(rows)
                }
            });
        });
    }

    get(sql, params) {
        return new Promise((resolve, reject) => {
            db.get(sql, params, async (err, rows) => {
                if (err) {
                  reject(err);
                } else {
                    resolve(rows)
                }
            });
        });
    }

    getAll() {
        const sql = `SELECT * FROM ${this.table}`;
        const params = [];

        return this.all(sql, params);
    }

    getAllWithFilter(key, value) {
        const sql = `SELECT * FROM ${this.table} WHERE ${key} = ?`;
        const params = [value];

        return this.all(sql, params);
    }

    getByKey(key, value) {
        const sql = `SELECT * FROM ${this.table} WHERE ${key} = ?`;
        const params = [value];

        return this.get(sql, params);
    }

    /**
     *
     * @param {[key1, key2], [value1, value2]} keysValuesObject
     * @returns []
     */
    getByKeys(keysValuesObject) {
        let str = '';
        keysValuesObject.keys.forEach(k => {
            str += k + " = ? AND "
        })
        str = str.slice(0, -5);
        const sql = `SELECT * FROM ${this.table} WHERE ${str}`;
        const params = keysValuesObject.values;
        console.log(sql, params)
        return this.get(sql, params);
    }

    delete(id) {
        const sql = `DELETE FROM ${this.table} WHERE id = ?`;
        const params = [id];

        return this.run(sql, params);
    }

    create(data) {
        const d = {};
        const questionMarks = [];
        Object.entries(data).forEach((r,i) => {
            if (r[1] !== undefined) {
              d[r[0]] = r[1];
              questionMarks.push('?');
            }
        });
        const keys = Object.keys(d).toString();
        const values = Object.values(d);
        const sql = `INSERT INTO ${this.table} (${keys}) VALUES (${questionMarks.toString()})`;
        const params = values;

        return this.run(sql, params);
    }

    update(object, newData) {
        const keyValues = [];
        Object.keys(newData).forEach(e => {
            keyValues.push(`${e} = ?`)
        });

        const sql = `UPDATE ${this.table} SET ${keyValues.toString()} WHERE id = ?`;
        const params = [...Object.values(newData), object.id];

        return this.run(sql, params);
    }
}