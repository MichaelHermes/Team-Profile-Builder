const Employee = require("../lib/employee");

describe("Employee", () => {
	describe("Initialization", () => {
		it("should throw an error if provided no arguments", () => {
			const employee = () => new Employee();

			expect(employee).toThrow();
		});
		it("should throw an error if not provided an 'id'", () => {
			const employee = () => new Employee("Bob");
			const err = new Error(
				"Expected parameter 'id' to be a non-negative number"
			);

			expect(employee).toThrowError(err);
		});
		it("should throw an error if not provided an 'email'", () => {
			const employee = () => new Employee("Bob", 1);
			const err = new Error(
				"Expected parameter 'email' to be a non-empty string"
			);

			expect(employee).toThrowError(err);
		});
		it("should throw an error if 'name' is not a string", () => {
			const employee = () => new Employee(15, 1, "bob@fakeemail.com");
			const err = new Error(
				"Expected parameter 'name' to be a non-empty string"
			);

			expect(employee).toThrowError(err);
		});
		it("should throw an error if 'name' is an empty string", () => {
			const employee = () => new Employee("", 1, "bob@fakeemail.com");
			const err = new Error(
				"Expected parameter 'name' to be a non-empty string"
			);

			expect(employee).toThrowError(err);
		});
		it("should throw an error if 'id' is not a number", () => {
			const employee = () => new Employee("Bob", "Smith", "bob@fakeemail.com");
			const err = new Error(
				"Expected parameter 'id' to be a non-negative number"
			);

			expect(employee).toThrowError(err);
		});
		it("should throw an error if 'id' is less than zero", () => {
			const employee = () => new Employee("Bob", -5, "bob@fakeemail.com");
			const err = new Error(
				"Expected parameter 'id' to be a non-negative number"
			);

			expect(employee).toThrowError(err);
		});
		it("should create an object with name, id, and email if provided valid arguments", () => {
			const employee = new Employee("Bob", 1, "bob@fakeemail.com");

			expect(employee.name).toEqual("Bob");
			expect(employee.id).toEqual(1);
			expect(employee.email).toEqual("bob@fakeemail.com");
		});
	});
	describe("getRole()", () => {
		it("should return 'Employee'", () => {
			const employee = new Employee("Bob", 1, "bob@fakeemail.com");

			expect(employee.getRole()).toEqual("Employee");
		});
	});
});
