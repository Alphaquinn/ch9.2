// TODO: Include packages needed for this application
const inquirer = require('inquirer');


const fs = require("fs");
const generateMarkdown = require("./GenerateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name:'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description'
        message: 'How would you desribe the reason for your project?',
    





    },
    {
        type: 'input',
        name: 'installation',
        message: 'in order to run the application what packages need to be installed?',





    },
    {
        type: 'input',
        name: 'usage',
        message: 'describe what might be a use of the Poject:'





    },
    {
        type: 'input',
        name: "contributing",
        message: 'would you like other people to be included as contributers?'







    },
    {
        Type: 'input',
        name:'tests',
        message:'How would you go about test running this appication?'


    },

    {
        type: 'list',
        name: 'license',
        message: 'please pick a licensse for you application.',
        Choices:['MIT', 'Apache-2.0', 'GLP-3.0', 'BSD-2-clause', 'BSD-3-clasue', 'BSD-3-clause']


    },

    {
        type:'inpute',
        name: 'gitHubUsername',
        message: 'What is your github username?'



    },
    {
        type:'input',
        name:'gitHubProgile',
        message: "what is your git hub profile URL?"



    },
    {
        type: 'input',
        name: 'email',
        message: ' please provide your email if you would like others to contact you about the project.'
    },










];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err)){
console.log(fileName);
console.log(data)
    }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();