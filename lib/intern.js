const employee = require('../lib/employee.js')

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        if(this.school === undefined){
            throw 'Please provide relevant employee details.'
        }
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'intern';
    }
}

module.exports = intern;