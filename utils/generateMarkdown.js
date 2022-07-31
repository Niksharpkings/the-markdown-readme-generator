//// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPLv2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}
//// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  The application is covered under the ${license} license.
    `;
}
//// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Tables of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Tests](#tests)
  4. [License](#license)
  5. [Contact Information](#contact-information)
  ## Installation
  Run the following command to install the necessary dependencies
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage
  ${data.usage}
  ## Tests
  Run the following command to run tests
  \`\`\`
  ${data.tests}
  \`\`\`
  ${renderLicenseSection(data.license)}
  ## Contact Information
  GitHub: https://github.com/${data.github}
  Email: ${data.email}
`;

}

module.exports = generateMarkdown;
