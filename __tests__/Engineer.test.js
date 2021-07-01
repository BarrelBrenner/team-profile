const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("Has a github attribute", () => {
    const e = new Engineer(
      1312400,
      "Max Cannon",
      "MaxBlast@aol.com",
      "MaxForce@github.com"
    );
    expect(e.github).toBe("MaxForce@github.com");
  });

  it("Can get role via getRole()", () => {
    const e = new Engineer(
      1312400,
      "Max Cannon",
      "MaxBlast@aol.com",
      "MaxForce@github.com"
    );
    expect(e.getRole()).toBe("Engineer");
  });

  it("Can get github via getGithub()", () => {
    const e = new Engineer(
      1312400,
      "Max Cannon",
      "MaxBlast@aol.com",
      "MaxForce@github.com"
    );
    expect(e.getGithub()).toBe("MaxForce@github.com");
  });
});
