const Service = require("../Services/emailService");
const Controller = require("./controller");

module.exports = class EmailController {

    post(data) {
        //return Service.test(data);
        console.log("1=>",data)
        return Service.sendEmail({data:data});
    }
}