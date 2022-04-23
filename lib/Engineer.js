/* The Engineer class extends the Employee class and adds a github property */
const Employee = require("./Employee");

const questionEngineer_array = [

    {
        type: 'input',
        name: 'name',
        message: "Please enter the Name of Engineer?"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the engineer's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's github user name?"
    }

]
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

	fetch_role() {
		return 'Engineer';
	}
	fetch_github() {
		return this.github;
	}

}

module.exports = { Engineer, questionEngineer_array };
  