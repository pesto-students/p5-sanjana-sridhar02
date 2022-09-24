const mathOperations = require("./calculator");

describe("calculator tests", () => {
  test("Adding 1+2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
  test("Diff 100 -50 should return 50", () => {
    expect(mathOperations.diff(100, 50)).toBe(50);
  });
  test("Product 9*2 should return 18", () => {
    expect(mathOperations.product(9, 2)).toBe(18);
  });
});
