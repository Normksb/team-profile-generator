const inquirer = require('inquirer');
const fs = require('fs');
const intern = require('./lib/intern.js');
const manager = require('./lib/manager.js');
const employee = require('./lib/employee.js');
const engineer = require('./lib/engineer.js');
const manager = require('../../inquirer/manager.js');

inquirer.prompt([
    {
      type: "input",
      message: "Please enter your team managers name",
      name: "managerName",
    },
    {
      type: "input",
      message: "Please enter your team managers employee ID",
      name: "managerID",
    },
    {
      type: "input",
      message: "Please enter your team managers email address.",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Please enter your team managers phone number.",
      name: "managerPhone",
    },
    {
      type: "checkbox",
      message:
        "Select engineer to add an engineer, intern to add an intern or finish to finish building your team",
      name: "checkListOption",
      choices: ["Engineer", "Intern", "Finish"],
    },
  ])
  
  .then((answers) => {
    console.log(answers);
    let manager = new manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerPhone
    );
    console.log(manager);
  });

  function html(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${data}
    </body>
    </html>`
    }