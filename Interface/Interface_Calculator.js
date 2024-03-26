"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicCalculator = void 0;
// Implementação da calculadora básica
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator() {
    }
    BasicCalculator.prototype.add = function (a, b) {
        return a + b;
    };
    BasicCalculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    BasicCalculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    BasicCalculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    };
    return BasicCalculator;
}());
exports.BasicCalculator = BasicCalculator;
