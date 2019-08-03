const functions = require("./functions");

// toBe
test("2 + 2 equals 4", () => {
    expect(functions.add(2, 2)). toBe(4);
});

// not.toBe
test("2 + 2 NOT equals 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("should be null", () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
// test("should be falsy", () => {
//     expect(functions.checkValue(null)).toBeFalsy();
// });

test("should be falsy", () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

