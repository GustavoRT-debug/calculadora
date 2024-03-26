import { MockCalculator } from '../Interface/MockCalculator';

describe('MockCalculator', () => {
  let mockCalculator: MockCalculator;

  beforeEach(() => {
    mockCalculator = new MockCalculator();
  });

  test('add method should add 10 to the result', () => {
    expect(mockCalculator.add(5, 5)).toBe(20); // 5 + 5 + 10 = 20
  });

  test('subtract method should subtract 10 from the result', () => {
    expect(mockCalculator.subtract(20, 10)).toBe(0); // 20 - 10 - 10 = 0
  });

  test('multiply method should multiply the result by 10', () => {
    expect(mockCalculator.multiply(2, 3)).toBe(60); // (2 * 3) * 10 = 60
  });

  test('divide method should add 10 to the result of division', () => {
    expect(mockCalculator.divide(20, 2)).toBe(20); // (20 / 2) + 10 = 20
  });

  test('divide method should throw an error when dividing by zero', () => {
    expect(() => {
      mockCalculator.divide(10, 0);
    }).toThrow('Division by zero');
  });
});
