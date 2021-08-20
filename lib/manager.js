const Employee = require("../lib/employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);

		if (
			typeof officeNumber !== "number" ||
			isNaN(officeNumber) ||
			officeNumber < 0
		) {
			throw new Error(
				"Expected parameter 'officeNumber' to be a non-negative number"
			);
		}

		this._officeNumber = officeNumber;
	}

	get officeNumber() {
		return this._officeNumber;
	}

	getRole() {
		return "Manager";
	}

	generateCard() {
		return `<div class="card border-dark m-3 shadow-lg">
				<div class="card-header">${this.name}</br>
					<i class="fas fa-briefcase" style="padding-right: 5px"></i>Manager
				</div>
				<div class="card-body text-dark">
					<div class="container">
						<div class="row border p-2">ID: ${this.id}</div>
						<div class="row border p-2">Email: <a href="mailto:${this.email}">${this.email}</a>
						</div>
						<div class="row border p-2">Office Number: ${this.officeNumber}</div>
					</div>
				</div>
			</div>`;
	}
}

module.exports = Manager;
