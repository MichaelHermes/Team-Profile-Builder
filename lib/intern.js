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

	generateCard() {
		return `<div class="card border-dark m-3 shadow-lg">
				<div class="card-header">${this.name}</br>
					<i class="fas fa-pen-fancy" style="padding-right: 5px"></i>Intern
				</div>
				<div class="card-body text-dark">
					<div class="container">
						<div class="row border p-2">ID: ${this.id}</div>
						<div class="row border p-2">Email: <a href="mailto:${this.email}">${this.email}</a>
						</div>
						<div class="row border p-2">School: <p style="margin: 0;">${this.school}</p>
						</div>
					</div>
				</div>
			</div>`;
	}
}

module.exports = Intern;
