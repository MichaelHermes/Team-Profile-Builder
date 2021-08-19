const Employee = require("../lib/employee");

class Engineer extends Employee {
	constructor(name, id, email, githubUsername) {
		super(name, id, email);

		if (typeof githubUsername !== "string" || !githubUsername.trim().length) {
			throw new Error(
				"Expected parameter 'githubUsername' to be a non-empty string"
			);
		}

		this._github = githubUsername;
	}

	get githubUsername() {
		return this._github;
	}

	getRole() {
		return "Engineer";
	}
}

module.exports = Engineer;
