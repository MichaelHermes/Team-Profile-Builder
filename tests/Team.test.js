const Team = require("../lib/team");
const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");

describe("Team", () => {
	describe("Initialization", () => {
		it("should create an object with a manager and engineers and interns lists", () => {
			const team = new Team();

			expect(team.manager).toBeDefined();
			expect(team.engineers).toBeDefined();
			expect(team.interns).toBeDefined();
		});
	});
	describe("addManager()", () => {
		it("should throw an error if provided no arguments", () => {
			const add = () => new Team().addManager();
			const err = new Error(
				"Expected parameter 'manager' to be a Manager employee"
			);

			expect(add).toThrowError(err);
		});
		it("should throw an error if 'manager' is not a Manager employee", () => {
			const add = () =>
				new Team().addManager(
					new Engineer("Bob", 1, "bob@fakeemail.com", "BobSmith")
				);
			const err = new Error(
				"Expected parameter 'manager' to be a Manager employee"
			);

			expect(add).toThrowError(err);
		});
		it("should assign the Manager employee if provided a valid argument", () => {
			const manager = new Manager("Bob", 1, "bob@fakeemail.com", 12);
			const team = new Team();
			team.addManager(manager);

			expect(team.manager).toEqual(manager);
		});
		it("should throw an error if a Manager employee has already been assigned", () => {
			const manager = new Manager("Bob", 1, "bob@fakeemail.com", 12);
			const team = new Team();
			const add = () => team.addManager(manager);
			const err = new Error(
				"A manager has already been assigned to this team profile."
			);

			add(); // Try to add a second Manager...
			expect(add).toThrowError(err);
		});
	});
	describe("addEngineer()", () => {
		it("should throw an error if provided no arguments", () => {
			const add = () => new Team().addEngineer();
			const err = new Error(
				"Expected parameter 'engineer' to be an Engineer employee"
			);

			expect(add).toThrowError(err);
		});
		it("should throw an error if 'engineer' is not an Engineer employee", () => {
			const add = () =>
				new Team().addEngineer(
					new Intern("Bob", 1, "bob@fakeemail.com", "University of Washington")
				);
			const err = new Error(
				"Expected parameter 'engineer' to be an Engineer employee"
			);

			expect(add).toThrowError(err);
		});
		it("should add the Engineer to the list of engineers if provided a valid argument", () => {
			const engineer = new Engineer("Bob", 1, "bob@fakeemail.com", "BobSmith");
			const team = new Team();
			team.addEngineer(engineer);

			expect(team.engineers.length).toEqual(1);
			expect(team.engineers[0]).toEqual(engineer);
			expect(team.engineers[0].name).toEqual(engineer.name);
			expect(team.engineers[0].id).toEqual(engineer.id);
			expect(team.engineers[0].email).toEqual(engineer.email);
			expect(team.engineers[0].githubUsername).toEqual(engineer.githubUsername);
		});
	});
	describe("addIntern()", () => {
		it("should throw an error if provided no arguments", () => {
			const add = () => new Team().addIntern();
			const err = new Error(
				"Expected parameter 'intern' to be an Intern employee"
			);

			expect(add).toThrowError(err);
		});
		it("should throw an error if 'intern' is not an Intern employee", () => {
			const add = () =>
				new Team().addIntern(new Manager("Bob", 1, "bob@fakeemail.com", 12));
			const err = new Error(
				"Expected parameter 'intern' to be an Intern employee"
			);

			expect(add).toThrowError(err);
		});
		it("should add the Intern to the list of interns if provided a valid argument", () => {
			const intern = new Intern(
				"Bob",
				1,
				"bob@fakeemail.com",
				"University of Washington"
			);
			const team = new Team();
			team.addIntern(intern);

			expect(team.interns.length).toEqual(1);
			expect(team.interns[0]).toEqual(intern);
			expect(team.interns[0].name).toEqual(intern.name);
			expect(team.interns[0].id).toEqual(intern.id);
			expect(team.interns[0].email).toEqual(intern.email);
			expect(team.interns[0].school).toEqual(intern.school);
		});
	});
});
