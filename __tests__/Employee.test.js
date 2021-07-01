const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("Creates an employee object", () => {
    const e = new Employee(1144250, "Andy Wrench", "HyperUpgrade@aol.com");
    expect(typeof e).toBe("object");
  });

  it("Has a id attribute", () => {
    const e = new Employee(1144250, "Andy Wrench", "HyperUpgrade@aol.com");
    expect(e.id).toBe(1144250);
  });

  it("Has a name attribute", () => {
    const e = new Employee(1144250, "Andy Wrench", "HyperUpgrade@aol.com");
    expect(e.name).toBe("Andy Wrench");
  });

  it("Has a email attribute", () => {
    const e = new Employee(1144250, "Andy Wrench", "HyperUpgrade@aol.com");
    expect(e.email).toBe("HyperUpgrade@aol.com");
  });

  it("Can get id via getId()", () => {
    const e = new Employee(1144250, "Andy Wrench", "HyperUpgrade@aol.com");
    expect(e.getId()).toBe(1144250);
  });

  it("Can get name via getName()", () => {
    const e = new Employee(1144250, "Andy Wrench", "HyperUpgrade@aol.com");
    expect(e.getName()).toBe("Andy Wrench");
  });

  it("Can get email via getEmail()", () => {
    const e = new Employee(1144250, "Andy Wrench", "HyperUpgrade@aol.com");
    expect(e.getEmail()).toBe("HyperUpgrade@aol.com");
  });

  it("Can get role via getRole()", () => {
    const e = new Employee(1144250, "Andy Wrench", "HyperUpgrade@aol.com");
    expect(e.getRole()).toBe("Employee");
  });
});
