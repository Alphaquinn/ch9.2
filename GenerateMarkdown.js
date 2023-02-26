// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '[license Badges[(https://img.shields.io/badge/LICENSE-${license}-blue'
   
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
    ---


    ###Description
    ${data.description}
    
    ###Installation###
    ${data.usage}


    ###contributing
    ${data.contributing}

    ###tests
    ${data.tests}
    
    ###License
    ${data.license}

    ##username
    ${data.gitUsername}
    ###URL
    ${data.gitHubprofile}
  ###email
  ${data.email}


  `;
  }


  module.exports = generateMarkdown;