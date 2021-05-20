const employee = require('../lib/employee.js')

class manager extends employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
        if(this.officeNumber === undefined){
            throw 'Please provide relevant employee details.'
        }
    }
    getNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'manager';
    }
}

module.exports = manager;