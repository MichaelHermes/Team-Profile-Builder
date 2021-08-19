const Manager = require("../lib/manager");

describe("Manager", () => {
	describe("Initialization", () => {
		it("should throw an error if provided no arguments", () => {
			const manager = () => new Manager();

			expect(manager).toThrow();
		});
		it("should throw an error if not provided an 'officeNumber'", () => {
			const manager = () => new Manager("Michael", 1, "michael@fakeemail.com");
			const err = new Error(
				"Expected parameter 'officeNumber' to be a non-negative number"
			);

			expect(manager).toThrowError(err);
		});
		it("should throw an error if 'officeNumber' is not a number", () => {
			const manager = () =>
				new Manager("Michael", 1, "michael@fakeemail.com", true);
			const err = new Error(
				"Expected parameter 'officeNumber' to be a non-negative number"
			);

			expect(manager).toThrowError(err);
		});
		it("should create an object with name, id, email, and officeNumber if provided valid arguments", () => {
			const manager = new Manager("Michael", 1, "michael@fakeemail.com", 12);

			expect(manager.name).toEqual("Michael");
			expect(manager.id).toEqual(1);
			expect(manager.email).toEqual("michael@fakeemail.com");
			expect(manager.officeNumber).toEqual(12);
		});
	});
	describe("getRole()", () => {
		it("should return 'Manager'", () => {
			const manager = new Manager("Michael", 1, "michael@fakeemail.com", 12);

			expect(manager.getRole()).toEqual("Manager");
		});
	});
});
