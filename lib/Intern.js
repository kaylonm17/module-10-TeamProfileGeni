 const Employee = require('./Employee');

 const internQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "What is the interns name?"
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the interns id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school did the intern attend?"
    }
 ]

 class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
        getSchool() {
            return this.school;
        }

        getRole() {
            return 'Intern';
        }
 } 

 module.exports = { Intern, internQuestionsArr };