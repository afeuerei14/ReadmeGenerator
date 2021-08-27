// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateReadme(answers) {
//   return }
function Readme(description, contents, installation, usage, license, contributing, tests, questions) {
    this.answers.title = title;
    this.answers.description = description;
    this.answers.contents = contents;
    this.answers.installation = installation;
    this.answers.usage = usage;
    this.answers.license = license;
    this.answers.contributing = contributing;
    this.answers.tests = tests;
    this.answers.questions = questions;
    this.displayAnswers = function (answers) {
      const input = answers;
        if (answers === answers)
        return input
      }
}
function generateReadme(answers) {
    return `
<h1 align="center">${answers.title} 👋</h1>
  
${answers.license}-brightgreen)<br />
## Description
${answers.description}
## Table of Contents
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
${answers.license} 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.questions}<br />
<br />
GitHub: [${answers.github}](https://github.com/${answers.github})<br />
<br />
Email: ${answers.email}<br /><br />
    `;
  }
  
  module.exports = generateReadme;



//function generateReadme(answers) {
module.exports = generateReadme;
