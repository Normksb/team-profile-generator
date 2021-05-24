const intern = require('../lib/intern.js');

describe('Intern class',()=>{

    it("Prompts for employee details if parameters aren't provided.",()=>{
        expect(()=>{ new intern() }).toThrow('Please provide relevant employee details.');
    });
    it("Returns the intern school when the getSchool function is invoked",()=>{
        const newIntern = new intern('Fred', '123', 'fred@email.com', 'UWA');
        expect(newIntern.getSchool()).toBe('UWA');
    });
    it("Returns the engineer role when the getRole function is invoked",()=>{
        const newIntern = new intern('Fred', '123', 'fred@email.com', 'UWA');
        expect(newIntern.getRole()).toBe('intern');
    });
});