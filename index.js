const inquirer = require('inquirer')
const template = require('./src/webpage-template')
const writefile = require('./src/write-file')

// constructor and questions dynamic
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern')

const employeesArr = []