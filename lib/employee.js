class Employee {
	constructor(name, id, email) {
		if (typeof name !== "string" || !name.trim().length) {
			throw new Error("Expected parameter 'name' to be a non-empty string");
		}

		if (typeof id !== "number" || isNaN(id) || id < 0) {
			throw new Error("Expected parameter 'id' to be a non-negative number");
		}

		if (typeof email !== "string" || !email.trim().length) {
			throw new Error("Expected parameter 'email' to be a non-empty string");
		}

		this._name = name;
		this._id = id;
		this._email = email;
	}

	get name() {
		return this._name;
	}
	get id() {
		return this._id;
	}
	get email() {
		return this._email;
	}

	getRole() {
		return "Employee";
	}
}

module.exports = Employee;
