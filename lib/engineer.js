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

	generateCard() {
		return `<div class="card border-secondary m-3 p-0 shadow-lg">
				<div class="card-header">
					<h2>${this.name}</h2>
					<i class="fas fa-database"></i>Engineer
				</div>
				<div class="card-body text-dark">
					<div class="container">
						<div class="row border-bottom border-secondary p-2">ID: ${this.id}</div>
						<div class="row border-bottom border-secondary p-2">Email: <a href="mailto:${this.email}">${this.email}</a>
						</div>
						<div class="row p-2">GitHub: <a href="https://github.com/${this.githubUsername}"
								target="_blank">${this.githubUsername}</a></div>
					</div>
				</div>
			</div>`;
	}
}

module.exports = Engineer;
