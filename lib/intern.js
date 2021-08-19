const Employee = require("../lib/employee");

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);

		if (typeof school !== "string" || !school.trim().length) {
			throw new Error("Expected parameter 'school' to be a non-empty string");
		}

		this._school = school;
	}

	get school() {
		return this._school;
	}

	getRole() {
		return "Intern";
	}
}

module.exports = Intern;
