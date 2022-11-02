const Model = require("./core/model");

module.exports = class Parcel extends Model {

    #obj = {}
    #props = [];

    constructor(obj) {
        super();
        this.props = Object.getOwnPropertyNames(this);
        this.obj = obj;
        this.mapObject();
    }

    area_id;
    status;
    created_at;


    get area_id() {
        return this.area_id;
    }
    get status() {
        return this.status;
    }
    get created_at() {
        return this.created_at;
    }

    set area_id(val) {
        this.area_id = val;
    }
    set status(val) {
        this.status = val;
    }
    set created_at(val) {
        this.created_at = val;
    }

    mapObject() {
        Object.keys(this.obj).forEach(key => {
            this[key] = this.obj[key];
        });
    }

    object() {
        const o = {};
        this.props.forEach(k => {
            o[k] = this[k];
        })
        return o;
    }

    propertyNames() {
        return this.props;
    }    
}