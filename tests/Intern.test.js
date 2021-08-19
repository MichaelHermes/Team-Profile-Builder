const Intern = require("../lib/intern");

describe("Intern", () => {
	describe("Initialization", () => {
		it("should throw an error if provided no arguments", () => {
			const intern = () => new Intern();

			expect(intern).toThrow();
		});
		it("should throw an error if not provided a 'school'", () => {
			const intern = () => new Intern("DK", 1, "dk@fakeemail.com");
			const err = new Error(
				"Expected parameter 'school' to be a non-empty string"
			);

			expect(intern).toThrowError(err);
		});
		it("should throw an error if 'school' is not a string", () => {
			const intern = () => new Intern("DK", 1, "dk@fakeemail.com", true);
			const err = new Error(
				"Expected parameter 'school' to be a non-empty string"
			);

			expect(intern).toThrowError(err);
		});
		it("should create an object with name, id, email, and school if provided valid arguments", () => {
			const intern = new Intern("DK", 1, "dk@fakeemail.com", "DKJohnson");

			expect(intern.name).toEqual("DK");
			expect(intern.id).toEqual(1);
			expect(intern.email).toEqual("dk@fakeemail.com");
			expect(intern.school).toEqual("DKJohnson");
		});
	});
	describe("getRole()", () => {
		it("should return 'Intern'", () => {
			const intern = new Intern("DK", 1, "dk@fakeemail.com", "DKJohnson");

			expect(intern.getRole()).toEqual("Intern");
		});
	});
});
