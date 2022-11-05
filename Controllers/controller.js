module.exports = class Controller {

    Service;

    constructor(Service) {
        this.Service = new Service();
    }

    post(data) {
        return this.Service.create(data);
    }

    put(data) {
        return this.Service.update(data);
    }

    getAll() {
        return this.Service.getAll();
    }

    get(data) {
        return this.Service.getByKey('id', data.params.id);
    }

    delete(data) {
     return this.Service.delete(data);
    }

}