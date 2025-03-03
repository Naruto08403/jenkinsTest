const { add, subtract } = require("../script");
const subtract = require("../script");

test("adds 2 + 3 to equal 5", () => {
    expect(add(2, 3)).toBe(5);
});
test("subtract 5 from 10 equals 5",() => {
    expect(subtract(10,5)).toBe(5);
});