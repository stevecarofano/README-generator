// TODO: Include packages needed for this application

const config = require('./package.json');
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
},
{
    type: "input",
    name: "description",
    message: "Write a brief description of your project: "
},
{
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
},
{
    type: "input",
    name: "usage",
    message: "Describe the usage of this project: "
},
{
    type: "list",
    name: "license",
    message: "Choose the appropriate license for this project: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
},
{
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this projects?"
},
{
    type: "input",
    name: "tests",
    message: "Is there a test included?"
},
{
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? "
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data ,(err) =>
        err ? console.error(err) : console.log('Success!')
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answers){
           const text =  generateMarkdown(answers)
           writeToFile("README.md", text)
        })
}

// Function call to initialize app
init();
