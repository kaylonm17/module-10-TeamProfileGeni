const inquirer = require('inquirer')
const template = require('./src/webpage-template')
const writefile = require('./src/write-file')

// constructor and questions dynamic
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern')

const employeesArr = []

const init = () => { managerQuestions() } 

const managerQuestions = () => {
    inquirer.createPromptModule(managerQuestionsArr)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.email, answers.officeNumber)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const engineerQuestions = () => {
    inquirer.createPromptModule(engineerQuestionsArr)
    .then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.github)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const internQuestions = () => {
    inquirer.createPromptModule(internQuestionsArr)
    .then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.github)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const employeePrompt = () => {
    inquirer.createPromptModule([{
        type: 'list',
        name: 'employeeType',
        message: "What type"
    }])
}