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
		return `<div class="card border-dark m-3 shadow-lg">
				<div class="card-header">${this.name}</br>
					<i class="fas fa-database" style="padding-right: 5px"></i>Engineer
				</div>
				<div class="card-body text-dark">
					<div class="container">
						<div class="row border p-2">ID: ${this.id}</div>
						<div class="row border p-2">Email: <a href="mailto:${this.email}">${this.email}</a>
						</div>
						<div class="row border p-2">GitHub: <a href="https://github.com/${this.githubUsername}"
								target="_blank">${this.githubUsername}</a></div>
					</div>
				</div>
			</div>`;
	}
}

module.exports = Engineer;
