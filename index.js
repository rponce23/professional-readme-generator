const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions')


function generateMarkdown(data) {
    return `
      
  ---
  ${data.license}
  ## About
  
  
  ${questions.badgeType(data.license)}
  
  ---
     
  `;
  }
  
  inquirer
    .prompt([
      {
        type:'list',
        name:'license',
        message:'Which license do you use for this project?',
        choices:['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'MIT', 'Apache']
    },
    ])
    .then((data) => {
        const markdownContent = generateMarkdown(data);

        fs.writeFile('README.md', markdownContent, (err) => 
        err ? console.error(err) : console.log('Success!'))
    })