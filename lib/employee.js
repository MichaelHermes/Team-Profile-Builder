class Employee {
	constructor(name, id, email) {
		/* Validation:
			1) name === 'string' && name.length > 0
			2) id === 'number' && !isNaN(id) && id > 0
			3) email === 'string' && email.length > 0 */
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
