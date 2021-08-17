class Engineer extends Employee {
	constructor(name, id, email, githubUsername) {
		/* Validation:
            1) githubUsername === 'string' && githubUsername.length > 0 */

		super(this, name, id, email);

		this._github = githubUsername;
	}

	get githubUsername() {
		return this._github;
	}

	getRole() {
		return "Engineer";
	}
}
