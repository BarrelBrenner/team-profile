const Manager = require("./../lib/Manager");

describe("Manager class", () => {
  it("Has a officeNumber attribute", () => {
    const e = new Manager(
      1451212,
      "Nell Clement",
      "LadyLuck@aol.com",
      "3128138512"
    );
    expect(e.officeNumber).toBe("3128138512");
  });

  it("Can get role via getRole()", () => {
    const e = new Manager(
      1451212,
      "Nell Clement",
      "LadyLuck@aol.com",
      "3128138512"
    );
    expect(e.getRole()).toBe("Manager");
  });

  it("Can get office number via getOfficeNumber()", () => {
    const e = new Manager(
      1451212,
      "Nell Clement",
      "LadyLuck@aol.com",
      "3128138512"
    );
    expect(e.getOfficeNumber()).toBe("3128138512");
  });
});
