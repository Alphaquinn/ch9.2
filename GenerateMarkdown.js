// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return '![License Badges[(https://img.sheilds.io/badge/LICENCE-${license}-blue)'
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
    
    # Project Title [${data.title}]
    ${renderLicenseBadge(data.license)}
    ----
  
    ## Table of contents
    1. [description](#description)
    2. [Installation](#installation)
    3.[usage](#usage)
    4. [Contributing](contributing)
    5. [Tests](#test)
    6. [License](#license)
    7. [Questions](#questions)
  
  
    ###Description
    ${data.description}
  
  
    ###Installation
    ${data.installation}
  
    ###Usage
    ${data.usage}
  
    ###contributing
    ${data.contributing}
  
    ###Tests
    ${data.tests}
  
    ###License
    ${data.license}
  
  
    ###Questions
  
  
    ### Github Username: ${data.gitUsername}
  
    ###Github URL: ${data.gitHubprofile}
  
  
  ### Email
  ${data.email}
  
  `;
  }
  
  module.exports = generateMarkdown;