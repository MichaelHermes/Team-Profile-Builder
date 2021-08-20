const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

class Team {
	constructor() {
		this._manager = null;
		this._engineers = [];
		this._interns = [];
	}

	get manager() {
		return this._manager;
	}
	get engineers() {
		return this._engineers;
	}
	get interns() {
		return this._interns;
	}

	addManager(manager) {
		// Do some validation to make sure that we don't already have a manager assigned and that we're not trying to assign an 'Engineer' or 'Intern' to the manager position.
		if (this._manager) {
			throw new Error(
				"A manager has already been assigned to this team profile."
			);
		}

		if (!manager || !(manager instanceof Manager)) {
			throw new Error("Expected parameter 'manager' to be a Manager employee");
		}

		// If we passed all validation checks, assign the Manager.
		this._manager = manager;
	}

	addEngineer(engineer) {
		// Validation to make sure we're only assigning Engineer employees to the list of Engineers.
		if (!engineer || !(engineer instanceof Engineer)) {
			throw new Error(
				"Expected parameter 'engineer' to be an Engineer employee"
			);
		}

		// If we passed all validation checks, add the new Engineer.
		this._engineers.push(engineer);
	}

	addIntern(intern) {
		/* Do some validation:
            1) intern === 'Intern' only */
		if (!intern || !(intern instanceof Intern)) {
			throw new Error("Expected parameter 'intern' to be an Intern employee");
		}

		// If we passed all validation checks, add the new Intern.
		this._interns.push(intern);
	}

	generateCards() {
		let cardsHtml = "";
		cardsHtml += this.manager.generateCard();
		this.engineers.forEach(engineer => {
			cardsHtml += engineer.generateCard();
		});
		this.interns.forEach(intern => {
			cardsHtml += intern.generateCard();
		});
		return cardsHtml;
	}
}

module.exports = Team;
