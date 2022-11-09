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

    firstname;
    lastname;
    email;
    phone;
    created_at;


    get firstname() {
        return this.firstname;
    }
    get lastname() {
        return this.lastname;
    }
    get email() {
        return this.email;
    }
    get phone() {
        return this.phone;
    }
    get created_at() {
        return this.created_at;
    }
    /* maping */
    set firstName(val) {
        this.firstname = val;
    }
    set firstname(val) {
        this.firstname = val;
    }
    set lastname(val) {
        this.lastname = val;
    }
    /* maping */
    set lastName(val) {
        this.lastname = val;
    }
    set email(val) {
        this.email = val;
    }
    /* maping */
    set phone(val) {
        this.phone = val;
    }
    set phoneNumber(val) {
        this.phone = val;
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