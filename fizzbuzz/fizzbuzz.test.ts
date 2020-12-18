import { fizzbuzz } from "./fizzbuzz";

describe('fizzbuzz', () => {
  it.each([3, 6, 9, 12])('should return "Fizz" when argument is a number multiple of three', (number) => {
    expect(fizzbuzz(number)).toBe("Fizz");
  });

  it.each([5, 10])('should return "Buzz" if the number is a multiple of five', (number) => {
    expect(fizzbuzz(number)).toBe("Buzz");
  });

  it('should return "FizzBuzz" if the number is a multiple of three and five', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
});