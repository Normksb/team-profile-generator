const employee = require('../lib/employee.js')

class engineer extends employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        if(this.github === undefined){
            throw 'Please provide relevant employee details.'
        }
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'engineer';
    }
}

module.exports = engineer;