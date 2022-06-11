const findInArray = require("./index");

describe("findInArray method", () => {
  it("should return true if value exists in the array", () => {
    const result = findInArray([1, 2, 3], 3);

    expect(result).toBe(true);
  });

  it("should return false if value doesnt exist in the array", () => {
    const result = findInArray([1, 2, 3], 100);

    expect(result).toBe(false);
  });
});
