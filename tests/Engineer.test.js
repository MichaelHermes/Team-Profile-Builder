const Engineer = require("../lib/engineer");

describe("Engineer", () => {
	describe("Initialization", () => {
		it("should throw an error if provided no arguments", () => {
			const engineer = () => new Engineer();

			expect(engineer).toThrow();
		});
		it("should throw an error if not provided a 'githubUsername'", () => {
			const engineer = () =>
				new Engineer("Russell", 1, "russell@fakeemail.com");
			const err = new Error(
				"Expected parameter 'githubUsername' to be a non-empty string"
			);

			expect(engineer).toThrowError(err);
		});
		it("should throw an error if 'githubUsername' is not a string", () => {
			const engineer = () =>
				new Engineer("Russell", 1, "russell@fakeemail.com", true);
			const err = new Error(
				"Expected parameter 'githubUsername' to be a non-empty string"
			);

			expect(engineer).toThrowError(err);
		});
		it("should create an object with name, id, email, and githubUsername if provided valid arguments", () => {
			const engineer = new Engineer(
				"Russell",
				1,
				"russell@fakeemail.com",
				"RussellSmith"
			);

			expect(engineer.name).toEqual("Russell");
			expect(engineer.id).toEqual(1);
			expect(engineer.email).toEqual("russell@fakeemail.com");
			expect(engineer.githubUsername).toEqual("RussellSmith");
		});
	});
	describe("getRole()", () => {
		it("should return 'Engineer'", () => {
			const engineer = new Engineer(
				"Russell",
				1,
				"russell@fakeemail.com",
				"RussellSmith"
			);

			expect(engineer.getRole()).toEqual("Engineer");
		});
	});
});
