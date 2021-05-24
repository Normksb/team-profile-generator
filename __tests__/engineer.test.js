const engineer = require('../lib/engineer.js');

describe('Engineer class',()=>{

    it("Prompts for employee details if parameters aren't provided.",()=>{
        expect(()=>{ new engineer() }).toThrow('Please provide relevant employee details.');
    });
    it("Returns the office number when the getNumber function is invoked",()=>{
        const newEngineer = new engineer('Fred', '123', 'fred@email.com', 'www.github.com/engineer');
        expect(newEngineer.getGithub()).toBe('www.github.com/engineer');
    });
    it("Returns the engineer role when the getRole function is invoked",()=>{
        const newEngineer = new engineer('Fred', '123', 'fred@email.com', 'www.github.com/engineer');
        expect(newEngineer.getRole()).toBe('engineer');
    });
});