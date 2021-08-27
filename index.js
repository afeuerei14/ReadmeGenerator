// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadme = require("./utils/generateReadme");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
return inquirer.prompt([
    {
    type: "input",
    message: "What is your github?",
    name: "github",
    },
    {
    type: "input",
    message: "What is your email?",
    name: "email",
    },
    {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    },
    {
    type: "input",
    message: "Describe your application",
    name: "description",
    },
    {
    type: "input",
    message: "Add a table of contents",
    name: "contents",
    },
    {
    type: "input",
    message: "Installation?",
    name: "installation",
    },
    {
    type: "input",
    message: "Usage? ",
    name: "usage",
    },
    {
    type: "input",
    message: "License?",
    name: "license",
    choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause ",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
    ]
    },
    {
    type: "input",
    message: "Contributing...",
    name: "contributing",
    },
    {
    type: "input",
    message: "Tests...",
    name: "tests",
    },
    {
    type: "input",
    message: "Questions?",
    name: "questions",
    },
]);
}
//     .then ((answers) =>{
//         console.log(answers);
//     })

// };


    // const readme = () => {
    //     promptUser()
    //     .then((answers) => fs.writeFile)
    //     .then(() => console.log("Successfully wrote to index.html"))
    //     .catch((err) => console.error(err));
    // };

    // readme ();


    // const generateReadme = util.promisify(fs.writeFile);
    // generateReadme ();
    
    // const generateReadme = (answers) => {
    // generateReadme();

    // }
    async function init() {
        try {
            // Ask user questions and generate responses
            const answers = await promptUser();
            const generateContent = generateReadme(answers);
            // Write new README.md to dist directory
            await writeFileAsync("./utils/README.md", generateContent);
            console.log("✔️  Successfully wrote to README.md");
        }   catch(err) {
            console.log(err);
        }
      }
      
      init();  
   
