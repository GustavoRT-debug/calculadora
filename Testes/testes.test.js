"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Interface_Calculator_1 = require("../Interface/Interface_Calculator");
// Testes unitários
describe('Basic Calculator Tests', function () {
    var basicCalculator;
    beforeEach(function () {
        basicCalculator = new Interface_Calculator_1.BasicCalculator();
    });
    test('add method should add correctly', function () {
        expect(basicCalculator.add(5, 5)).toBe(10); // 5 + 5 = 10
    });
    test('subtract method should subtract correctly', function () {
        expect(basicCalculator.subtract(15, 5)).toBe(10); // 15 - 5 = 10
    });
    test('multiply method should multiply correctly', function () {
        expect(basicCalculator.multiply(3, 4)).toBe(12); // 3 * 4 = 12
    });
    test('divide method should divide correctly', function () {
        expect(basicCalculator.divide(100, 10)).toBe(10); // 100 / 10 = 10
    });
    test('divide method should throw error when dividing by zero', function () {
        expect(function () { return basicCalculator.divide(10, 0); }).toThrow("Division by zero"); // Division by zero should throw an error
    });
});
