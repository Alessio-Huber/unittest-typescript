import { mean } from "./average";

test("mean of two numbers", () => {
  
  const numbers: number[] = [4, 8];  
  const expected: number = 6; 

  const actual = mean(numbers);

  expect(actual).toBe(expected);
});

test("mean of five numbers", () => {

  const numbers: number[] = [2, 4, 6, 8, 10];
  const expected: number = 6;

  const actual = mean(numbers);

  expect(actual).toBe(expected);
});

test("mean of no numbers throws error", () => {
 
  const numbers: number[] = [];

  expect(() => mean(numbers)).toThrow("Liste darf nicht leer sein");
});
