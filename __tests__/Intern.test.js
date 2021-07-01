const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("Has a school attribute", () => {
    const e = new Intern(1911390, "Sami Domino", "VictoryMarch@aol.com", "Orange Star Academy");
    expect(e.school).toBe("Orange Star Academy");
  });

  it("Can get role via getRole()", () => {
    const e = new Intern(1911390, "Sami Domino", "VictoryMarch@aol.com", "Orange Star Academy");
    expect(e.getRole()).toBe("Intern");
  });

  it("Can get github via getSchool()", () => {
    const e = new Intern(1911390, "Sami Domino", "VictoryMarch@aol.com", "Orange Star Academy");
    expect(e.getSchool()).toBe("Orange Star Academy");
  });
});
