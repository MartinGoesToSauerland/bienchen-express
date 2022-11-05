module.exports =  class Model {
    constructor() {
        // init dbRepo
    }

    updateValues(data) {
        console.log("data11", data)
        
        Object.keys(data).forEach(key => {
            console.log({
                key: key,
                value: data[key],
            })
            if (data[key] !== undefined) {
                this[key] = data[key];
            }
        });
    }

    static getObject() {}
}