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
		return `<div class="card border-secondary m-3 p-0 shadow-lg">
				<div class="card-header">
					<h2>${this.name}</h2>
					<i class="fas fa-pen-fancy"></i>Intern
				</div>
				<div class="card-body text-dark">
					<div class="container">
						<div class="row border-bottom border-secondary p-2">ID: ${this.id}</div>
						<div class="row border-bottom border-secondary p-2">Email: <a href="mailto:${this.email}">${this.email}</a>
						</div>
						<div class="row p-2">School: <p>${this.school}</p>
						</div>
					</div>
				</div>
			</div>`;
	}
}

module.exports = Intern;
