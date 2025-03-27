import { median } from "./median";

describe("Median function", () => {
  test("median for odd number of elements", () => {
    // Arrange
    const numbers = [1, 3, 5, 7, 9];

    // Act
    const result = median(numbers);

    // Assert
    expect(result).toBe(5);
  });

  test("median for even number of elements", () => {
    // Arrange
    const numbers = [2, 4, 6, 8];

    // Act
    const result = median(numbers);

    // Assert
    expect(result).toBe(5);
  });

  test("median for no elements", () => {
    // Arrange
    const numbers: number[] = [];

    // Act & Assert
    expect(() => median(numbers)).toThrow("Cannot calculate median of an empty list");
  });
});
