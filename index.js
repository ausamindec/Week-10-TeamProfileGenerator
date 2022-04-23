/* This is the main app.js file that runs the application. It requires the inquirer package, the
page-template.js file, and the write-file.js file. 

It also requires the Manager, Engineer, and
Intern classes. It then creates an array to store all of the employee objects. It then creates a
function called init that calls the managerQuestions function. 

The managerQuestions function prompts
the user with the questions from the questionManager_array. 

It then creates a new Manager object
from the user's answers and pushes it to the arrayOfEmployees array. It then calls the
employeePrompt function. 

The engineerQuestions function prompts the user with the questions from the
questionEngineer_array. 

It then creates a new Engineer object from the user's answers and pushes it
to the arrayOfEmployees array. 

It then calls the employeePrompt function. The internQuestions
function prompts the user with the questions from the questionInterns_array. 

It then creates a new
Intern object from the user's answers and pushes it to the arrayOfEmployees array. 

It then calls the
employeePrompt function. The employeePrompt function prompts the user with a list of employee types. */

const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/write-file')

// constructor classes and questions for each employee type
const { Manager, questionManager_array } = require('./lib/Manager');
const { Engineer, questionEngineer_array } = require('./lib/Engineer');
const { Intern, questionInterns_array  } = require('./lib/Intern');
// stores all team member objects
const arrayOfEmployees = []

const init = () => { managerQuestions() }
// prompts manager questions then creates object from user inputs based on Manager class 
const managerQuestions = () => {
    inquirer.prompt(questionManager_array)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        arrayOfEmployees.push(answers);
        return employeePrompt();
    })
}
// prompts engineer questions then creates object from user inputs based on Engineer class 
const engineerQuestions = () => {
    inquirer.prompt(questionEngineer_array)
    .then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        arrayOfEmployees.push(answers);
        return employeePrompt();
    })
}
// prompts intern questions then creates object from user inputs based on Intern class 
const internQuestions = () => {
    inquirer.prompt(questionInterns_array)
    .then(( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        arrayOfEmployees.push(answers);
        return employeePrompt();
    })
}
// handles prompts
const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "Who you wanna add as a team member?",
        choices: [
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        // sends correct prompts based on the employee type
        if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
        if (answer.employeeType === 'addIntern') { internQuestions(); };
        if (answer.employeeType === 'done') {
            // converts users inputs into HTML
            let html = template(arrayOfEmployees)
            console.log('...');
            // creates HTML file
            writeFile(html);
        }
    })
}

init();
