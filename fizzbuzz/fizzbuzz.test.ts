import {fizzbuzz} from "./index";

describe('fizzbuzz', () => {
    it('should return "Fizz" when argument is a number multiple of three', () => {
      [3, 6, 9, 12].forEach(number => {
        expect(fizzbuzz(number)).toBe("Fizz");
      });
    });

    it('should return "Buzz" if the number is a multiple of five', () => {
      [5, 10].forEach(number => {
        expect(fizzbuzz(number)).toBe("Buzz");
      });
    });
});