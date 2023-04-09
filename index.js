// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        tpye: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for usage:'
    },

    {
      type: 'input',
      name: 'contributing',
      message: 'What are the guidelines for contributing to this project?'  
    },

    {
      type: 'input',
      name: 'tests',
      message: 'What command should be used to run tests?'  
    },

    {
      type: 'input',
      name: 'license',
      message: 'What kind of license does your project have?',
      choices: ['MIT', 'GNU GPLv3', 'APACHE LICENSE 2.0', 'ISC LICENSE', 'NONE']  
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'  
    },

    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'  
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README.md successfully created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const fileName = 'README.md';
        const data = generateMarkdown(answers);
        writeToFile(fileName, data);
    })

    .catch((error) => {
        console.log(error);
    });
}

// Function call to initialize app
init();