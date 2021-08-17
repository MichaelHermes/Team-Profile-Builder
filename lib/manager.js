class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		/* Validation:
            1) officeNumber === 'number' && !isNaN(officeNumber) && officeNumber > 0 */

		super(this, name, id, email);

		this._officeNumber = officeNumber;
	}

	get officeNumber() {
		return this._officeNumber;
	}

	getRole() {
		return "Manager";
	}
}
