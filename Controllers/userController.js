const Service = require("../Services/userService");
const Controller = require("./controller");

module.exports = class UserController extends Controller {
    constructor() {
        super(Service);
    }
}