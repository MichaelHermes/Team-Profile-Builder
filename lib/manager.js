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
}

module.exports = Manager;
