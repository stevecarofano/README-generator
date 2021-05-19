// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)

    ${data.username}
##username:

    ${data.description}
##description:

    ${data.installation}
##installation:

    ${data.usage}
##usage:

    ${data.licenses}
##licenses:

    ${data.contributors}
##contribution:

    ${data.test}
##test:

    ${data.email}
##email:

    ${data.profile}
##profile:
`;
}

module.exports = generateMarkdown;
