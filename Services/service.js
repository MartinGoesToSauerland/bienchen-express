// update, create, delete, getAll, getByKey

module.exports = class Service {

    Repository;
    Model;

    constructor(Model, Repository) {
        this.Repository = new Repository();
        this.Model = Model;
    }

    getAll() {
        return this.Repository.getAll();
    }

    getByKey(key, value) {
        return  this.Repository.getByKey(key, value);
    }

    delete(data) {
        const id = data.params.id;
        return this.Repository.delete(id);
    }

    async update(data) {
        const id = data.params.id;
        const object = await this.getByKey('id', id); /*Add index key to model forExapmle: indexKey = id;*/ 
        if (object === undefined) {
            return null;
        }
        return await this.Repository.update(object, data.body);
    }    

    async create(data) {
        const model = new this.Model(data);
        const inserted_id = await this.Repository.create(model.object());
        return inserted_id;
    }
}