const employee = require('../lib/employee.js');

describe('Employee class',()=>{

    it("Prompts for employee name, id number and email if parameters aren't provided.",()=>{
        expect(()=>{ new employee() }).toThrow('Please provide employee name, id and email.');
    });

    it("Returns the name when the getName function is invoked",()=>{
        const newEmployee = new employee('Fred', '123', 'fred@email.com');
        expect(newEmployee.getName()).toBe('Fred');
    });

    it("Returns the ID when the getId function is invoked",()=>{
        const newEmployee = new employee('Fred', '123', 'fred@email.com');
        expect(newEmployee.getId()).toBe('123');
    });

    it("Returns the email address when the getEmail function is invoked",()=>{
        const newEmployee = new employee('Fred', '123', 'fred@email.com');
        expect(newEmployee.getEmail()).toBe('fred@email.com');
    });

    it("Returns the role Employee when the getRole function is invoked",()=>{
        const newEmployee = new employee('Fred', '123', 'fred@email.com');
        expect(newEmployee.getRole()).toBe('employee');
    });
});