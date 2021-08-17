class Team {
	constructor() {
		this._manager = null; // Should contain the Manager
		this._engineers = []; // Should contain all Engineers
		this._interns = []; // Should contain all Interns
	}

	addManager(manager) {
		// Do some validation to make sure that we don't already have a manager assigned and that we're not trying to assign an 'Engineer' or 'Intern' to the manager position.
		if (this._manager) {
			throw new Error(
				"A manager has already been assigned to this team profile."
			);
		}

		// If we passed all validation checks, assign the manager.
		this._manager = manager;
	}

	addEngineer(engineer) {
		/* Do some validation:
            1) engineer === 'Engineer' only */

		this._engineers.push(engineer);
	}

	addIntern(intern) {
		/* Do some validation:
            1) intern === 'Intern' only */
		this._interns.push(intern);
	}
}
