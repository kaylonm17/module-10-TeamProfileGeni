const Employee = require('./Employee')

const managerQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the managers name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the managers id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is the managers email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the managers office number?"
    },
]
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'
    }
        getOfficeNumber() {
            return this.officeNumber;
        }
}

module.exports = {manager, managerQuestionsArr}