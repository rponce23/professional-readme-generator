const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions')


function generateMarkdown(data) {
    return `
    
  # ${data.title}
  
    ${data.description}
      
  ---
  ## Contents
  
  1. [About](#about)
  6. [Authors and acknowledgment](#authors%20and%20acknowledgment)
  
  ---
  ## About
  
    ${data.about}
  
  ---
     
  `;
  }
  
  inquirer
    .prompt([
        {
            type: 'input',
            name: 'description',
            message:'what is your title?'
        }
        {
            type: 'input',
            name: 'title',
            message:'what is your description?'
        }
        {
            type: 'input',
            name: 'about',
            message:'what is your about?'
        }
    ])
    .then((data) => {
        const markdownContent = generateMarkdown(data);

        fs.writeFile('README.md', markdownContent, (err) => 
        err ? console.error(err) : console.log('Success!'))
    })