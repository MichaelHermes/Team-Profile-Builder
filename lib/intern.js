class Intern extends Employee {
	constructor(name, role, id, email, school) {
		/* Validation:
            1) school === 'string' && school.length > 0 */

		super(this, name, role, id, email);

		this._school = school;
	}

	get school() {
		return this._school;
	}

	getRole() {
		return "Intern";
	}
}
