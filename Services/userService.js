const Repository = require("../Repositories/userRepository");
const Model = require("../Models/user");
const Service = require("./service");

module.exports = class UserService extends Service {
    constructor() {
        super(Model, Repository);
    }    
}