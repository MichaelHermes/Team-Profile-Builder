const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Team = require("./lib/team");
const htmlTemplate = require("./src/htmlTemplate");
const fs = require("fs");

// Location of the output teamProfile.html file
const outputFile = "./dist/teamProfile.html";

const teamProfile = new Team();

// Prompts the user with main menu options and handles their choice.
const promptMainMenu = () => {
	const mainMenu = {
		type: "rawlist",
		name: "Action",
		message: "What would you like to do?",
		choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
	};

	inquirer.prompt(mainMenu).then(answers => {
		switch (mainMenu.choices.indexOf(answers.Action) + 1) {
			case 1:
				promptForEngineer();
				break;
			case 2:
				promptForIntern();
				break;
			case 3:
				console.log(teamProfile);

				fs.writeFile(
					outputFile,
					htmlTemplate.generateHTML(teamProfile),
					err => {
						if (err) throw err;
						console.log("File written successfully!");
					}
				);

				break;
		}
	});
};

// Prompts for Manager information from the user. Assigns the manager to the global teamProfile. Then sends the user to the main menu.
const promptForManager = () => {
	inquirer
		.prompt([
			{
				message: "What is the team Manager's name?",
				name: "Name",
			},
			{
				message: "What is their employee ID?",
				name: "ID",
			},
			{
				message: "What is their email?",
				name: "Email",
			},
			{
				message: "What is their office number?",
				name: "OfficeNumber",
			},
		])
		.then(answers => {
			try {
				teamProfile.addManager(
					new Manager(
						answers.Name,
						Number.parseInt(answers.ID),
						answers.Email,
						Number.parseInt(answers.OfficeNumber)
					)
				);
				promptMainMenu();
			} catch (err) {
				console.error(err);
			}
		});
};

// Prompts for Manager information from the user. Adds a new manager to the global teamProfile. Then returns the user back to the main menu.
const promptForEngineer = () => {
	inquirer
		.prompt([
			{
				message: "What is the Engineer's name?",
				name: "Name",
			},
			{
				message: "What is their employee ID?",
				name: "ID",
			},
			{
				message: "What is their email?",
				name: "Email",
			},
			{
				message: "What is their Github username?",
				name: "Username",
			},
		])
		.then(answers => {
			try {
				teamProfile.addEngineer(
					new Engineer(
						answers.Name,
						Number.parseInt(answers.ID),
						answers.Email,
						answers.Username
					)
				);
				promptMainMenu();
			} catch (err) {
				console.error(err);
			}
		});
};

// Prompts for Intern information from the user. Adds a new intern to the global teamProfile. Then returns the user back to the main menu.
const promptForIntern = () => {
	inquirer
		.prompt([
			{
				message: "What is the Intern's name?",
				name: "Name",
			},
			{
				message: "What is their employee ID?",
				name: "ID",
			},
			{
				message: "What is their email?",
				name: "Email",
			},
			{
				message: "What school did/do they attend?",
				name: "School",
			},
		])
		.then(answers => {
			try {
				teamProfile.addIntern(
					new Intern(
						answers.Name,
						Number.parseInt(answers.ID),
						answers.Email,
						answers.School
					)
				);
				promptMainMenu();
			} catch (err) {
				console.error(err);
			}
		});
};

// Start the application by prompting for the Manager information.
promptForManager();
