// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const generateReadMe = ({Title, Desc, Usage, Contribution, Test_Instruction, license, Email, Gitname, Install}) =>
  `## ${Title}

  ${Desc}
  
  # Installation
  
  ${Install}
  
  # Usage
  
  ${Usage}
  
  # Contributing
  
  ${Contribution}
  
  # Testing
  
  ${Test_Instruction}
  
  # Questions
  
  Email me with questions here: ${Email}
  
  Github Link: (https://github.com/${Gitname}) 
  
  ## License
  
  ${license}`

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Title of your project.',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Enter a brief Description of your project.',
      name: 'Desc',
    },
    {
      type: 'input',
      message: 'Enter installation info here',
      name: 'Install',
    },
    {
        type: 'input',
        message: 'Enter Usage Info here',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Enter Contribution guidelines here',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions here:',
        name: 'Test_Instrcution',
    },
    {
      type: 'input',
      message: 'Github Username :',
      name: 'Gitname',
    },
    {
      type: 'input',
      message: 'Enter Email Here :',
      name: 'Email',
    },
    {
        type: 'checkbox',
        choices: [`yes`, `no`] ,
        name: 'license',
    },
  ])
  .then((answers) =>{
    const readMeContent = generateReadMe(answers);

    fs.writeFile(`readme.md`, readMeContent, (err) =>
    err ? console.log(err) : console.log('created readme.md!')
    );
  })
    

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
