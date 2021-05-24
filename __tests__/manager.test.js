const manager = require('../lib/manager.js');

describe('Manager class',()=>{

    it("Prompts for employee details if parameters aren't provided.",()=>{
        expect(()=>{ new manager() }).toThrow('Please provide relevant employee details.');
    });
    it("Returns the office number when the getNumber function is invoked",()=>{
        const newManager = new manager('Fred', '123', 'fred@email.com', '123456');
        expect(newManager.getNumber()).toBe('123456');
    });
    it("Returns the manager role when the getRole function is invoked",()=>{
        const newManager = new manager('Fred', '123', 'fred@email.com', '123456');
        expect(newManager.getRole()).toBe('manager');
    });
});