import { add, subtract, multiply, divide } from "./calculator";

test("divide six by two is three", () => {
  // Arrange
  const a: number = 6;
  const b: number = 2;
  const expected: number = 3;

  // Act
  const actual = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide by zero throws an error", () => {
  // Arrange
  const a: number = 5;
  const b: number = 0;

  // Act & Assert
  expect(() => divide(a, b)).toThrow("Division durch 0 ist nicht erlaubt");
});


test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 4;
  const expected: number = 6;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply three by two is six", () => {
  // Arrange
  const a: number = 3;
  const b: number = 2;
  const expected: number = 6;

  // Act
  const actual = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});