const Model = require("./core/model");

module.exports = class Area extends Model {

    #obj = {}
    #props = [];

    constructor(obj) {
        super();
        this.props = Object.getOwnPropertyNames(this);
        this.obj = obj;
        this.mapObject();
    }

    name;
    geo_json;
    country;
    state;
    zip;
    street;
    size_qm;
    created_at;


    get name() {
        return this.name;
    }
    get geo_json() {
        return this.geo_json;
    }
    get country() {
        return this.country;
    }    
    get state() {
        return this.state;
    }    
    get zip() {
        return this.zip;
    }    
    get street() {
        return this.street;
    }    
    get size_qm() {
        return this.size_qm;
    }    
    get created_at() {
        return this.created_at;
    }

    set name(val) {
        this.name = val;
    }
    set geo_json(val) {
        this.geo_json = val;
    }
    set country(val) {
        this.country = val;
    }
    set state(val) {
        this.state = val;
    }
    set zip(val) {
        this.zip = val;
    }
    set street(val) {
        this.street = val;
    }      
    set size_qm(val) {
        this.size_qm = val;
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