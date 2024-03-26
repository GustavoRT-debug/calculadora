import { BasicCalculator, Calculator } from "../Interface/Interface_Calculator";

// Testes unitários
describe('Basic Calculator Tests', () => {
  let basicCalculator: Calculator;

  beforeEach(() => {
    basicCalculator = new BasicCalculator();
  });

  test('add method should add correctly', () => {
    expect(basicCalculator.add(5, 5)).toBe(10); // 5 + 5 = 10
  });

  test('subtract method should subtract correctly', () => {
    expect(basicCalculator.subtract(15, 5)).toBe(10); // 15 - 5 = 10
  });

  test('multiply method should multiply correctly', () => {
    expect(basicCalculator.multiply(3, 4)).toBe(12); // 3 * 4 = 12
  });

  test('divide method should divide correctly', () => {
    expect(basicCalculator.divide(100, 10)).toBe(10); // 100 / 10 = 10
  });

  test('divide method should throw error when dividing by zero', () => {
    expect(() => basicCalculator.divide(10, 0)).toThrow("Division by zero"); // Division by zero should throw an error
  });
});
