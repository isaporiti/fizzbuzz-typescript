import {fizzbuzz} from "./index";

describe('fizzbuzz', () => {
    it('should return "Fizz" when argument is a number multiple of three', () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });

    it('should return "Buzz" if the number is a multiple of five', () => {
        expect(fizzbuzz(5)).toBe("Buzz");
    });
});