const {
    TestScheduler
} = require('jest');
const addition = require("./calc.js");

describe("Calculator", () => {
    describe('addition function', () => {
        test('shuld return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        })
        test('shuld return 73 for 42 + 31', () => {
            expect(addition(42, 31)).toBe(73);
        })
    });
    describe('addition function', () => {

    });
    describe('addition function', () => {

    });
    describe('addition function', () => {

    });
});