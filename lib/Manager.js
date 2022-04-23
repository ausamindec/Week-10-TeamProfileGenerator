/* The Manager class extends the Employee class and adds a officeNumber property */
const Employee = require("./Employee");

const questionManager_array = [

    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }

]

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    fetch_role() {
        return 'Manager'
    }

fetch_officeno() { 
    return this.officeNumber;
	}

}

module.exports = { Manager, questionManager_array } ;

