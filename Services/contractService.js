const Repository = require("../Repositories/contractRepository");
const Model = require("../Models/contract");
const Service = require("./service");
const UserService = require("./userService");
const ParcelService = require("./parcelService");
const emailService = require("./emailService");


module.exports = class ContractService extends Service {
    constructor() {
        super(Model, Repository);
    }

    async create(d) {
        const data = d.data

        // build UserModel if not exists or get User (by email)
        // check if user exists
        const userService = new UserService;
        const parcelService = new ParcelService;

        let userCheck = await userService.getByKey("email", data.user_data.email);

        if (! userCheck) {
            // create User & fetch User
            const user_inserted_id = await userService.create(data.user_data);
            userCheck = await userService.getByKey("id", user_inserted_id);
        }

        // check if parcel is free? @todo


        // Check if contract exists for this user and this parcel id which is active
        // then return false with message. allready reserved. please wait.
        let res = await this.Repository.getByKeys({
            keys: ["user_id", "parcel_id"],
            values: [userCheck.id, data.parcel_id]
        });
        if (res) {
            return {status: "error", msg: "You have already reserved this space. Please wait for a reply from us. We will contact you within the next three working days. Thank you very much!"}
        }
        //console.log(userCheck, data.user_data.email)
        //return userCheck;

        // build contract Model
        const contractObject = {
            user_id: userCheck.id,
            parcel_id: data.parcel_id,
            active: 1
        }

        // store Contract Model
        const model = new this.Model(contractObject);
        const inserted_id = await this.Repository.create(model.object());


        // get Parcel Object
        const parcel = await parcelService.getByKey("id", data.parcel_id);
        // update Parcel Object
        const newParcelData = {
            status: "reserved"
        }

        //parcel.updated_at = new Date().toISOString();
        const parcel_inserted_id = await parcelService.updateAfterEdit(parcel, newParcelData);
        // send Email to WMAgrar
        // emailService.sendEmail(data);
        emailService.sendEmail({data: this.flatObject(d.data)});
        // successdull response
        return parcel_inserted_id;
    }

    async changeStatus(id, status) {
        const parcelService = new ParcelService;
        const allowedStatus = ["start", "end"];
        const contractObject = {
            params: '',
            body: ''
        }
        contractObject.params = {
            id: id
        };

        if (! allowedStatus.includes(status)) {
            return false;
        }
        if (status === "start") {
            const today = new Date();
            contractObject.body = {
                active: 1,
                start_at: today.toISOString(),
                end_at: this.addOneYear(today).toISOString()
            };
        } else {
            contractObject.body = {
                active: 0,
            };
        }

        let contractCheck = await this.getByKey("parcel_id", id);

        const model = new this.Model(contractCheck);

        await this.Repository.update(contractCheck, contractObject.body);

        // get Parcel Object
        const parcel = await parcelService.getByKey("id", contractCheck.parcel_id);
        // update Parcel Object
        const newParcelData = {
            status: "rented"
        }
        await parcelService.updateAfterEdit(parcel, newParcelData);
        return true;
    }

    flatObject(nestyObject) {
        console.log("C", nestyObject)
        let flatedObject = {}
        Object.keys(nestyObject).forEach(key => {
          if (typeof nestyObject[key] == "object") {
            flatedObject = {...flatedObject,...nestyObject[key]};
          } else {
              flatedObject[key] = nestyObject[key];
          }
        })
        return flatedObject;
    }

    addOneYear(date) {
        const clone = new Date(date);
        clone.setFullYear(clone.getFullYear() + 1);
        return clone;
    }
}