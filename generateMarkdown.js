// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
  
    let badge = '';
  
    switch (license) {
      case 'MIT':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      case 'Apache 2.0':
        badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case 'GPL 3.0':
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
      default:
        badge = '';
    }
  
    return badge;
  }
  
  const badge = renderLicenseBadge('MIT');


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
  
    let link = '';
  
    switch (license) {
      case 'MIT':
        link = 'https://opensource.org/licenses/MIT';
        break;
      case 'Apache 2.0':
        link = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'GPL 3.0':
        link = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
      default:
        link = '';
    }
  
    return link;
  }
  
  const link = renderLicenseLink('MIT');


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
  
    const licenseLink = renderLicenseLink(license);
    const licenseBadge = renderLicenseBadge(license);
  
    return `## License
  
  This project is licensed under the ${license} License. ${licenseBadge} Click [here](${licenseLink}) to learn more about the license.`;
  }

  const licenseSection = renderLicenseSection('MIT');

  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
  ${licenseSection}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.tests}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;
  }
  

module.exports = generateMarkdown;