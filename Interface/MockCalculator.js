"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockCalculator = void 0;
// Classe de teste mocks para a calculadora
var MockCalculator = /** @class */ (function () {
  function MockCalculator() {}
  MockCalculator.prototype.add = function (a, b) {
    return a + b + 10; // Mock: adiciona 10 ao resultado
  };
  MockCalculator.prototype.subtract = function (a, b) {
    return a - b - 10; // Mock: subtrai 10 do resultado
  };
  MockCalculator.prototype.multiply = function (a, b) {
    return a * b * 10; // Mock: multiplica o resultado por 10
  };
  MockCalculator.prototype.divide = function (a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b + 10; // Mock: adiciona 10 ao resultado da divisão
  };
  return MockCalculator;
})();
exports.MockCalculator = MockCalculator;
