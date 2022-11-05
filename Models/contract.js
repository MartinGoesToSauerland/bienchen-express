const Model = require("./core/model");

module.exports = class Contract extends Model {

    #obj = {}
    #props = [];

    constructor(obj) {
        super();
        this.props = Object.getOwnPropertyNames(this);
        this.obj = obj;
        this.mapObject();
    }

    user_id;
    parcel_id;
    active;
    start;
    end;
    updated_at;
    created_at;


    get user_id() {
        return this.user_id;
    }
    get parcel_id() {
        return this.parcel_id;
    }    
    get active() {
        return this.active;
    }
    get start_at() {
        return this.start_at;
    }
    get end_at() {
        return this.end_at;
    }        
    get updated_at() {
        return this.updated_at;
    }    
    get created_at() {
        return this.created_at;
    }

    set user_id(val) {
        this.user_id = val;
    }
    set parcel_id(val) {
        this.parcel_id = val;
    }    
    set active(val) {
        this.active = val;
    }
    set start_at(val) {
        this.start_at = val;
    }
    set end_at(val) {
        this.end_at = val;
    }  
    set updated_at(val) {
        this.updated_at = val;
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