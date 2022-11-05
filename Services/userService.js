const Repository = require("../Repositories/userRepository");
const Model = require("../Models/User");
const Service = require("./service");

module.exports = class UserService extends Service {
    constructor() {
        super(Model, Repository);
    }    
}