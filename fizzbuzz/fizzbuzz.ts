export function fizzbuzz(number: number) {
    return checkFizzBuzz(new Multiple(number));
}

function checkFizzBuzz(number: Multiple) {
    if (number.isMultipleOf(3) && number.isMultipleOf(5)) {
        return "FizzBuzz";
    }
    if (number.isMultipleOf(5)) {
        return "Buzz";
    }
    return "Fizz";
}

class Multiple {
    private readonly number: number;

    constructor(multiple: number) {
        this.number = multiple;
    }

    public isMultipleOf(otherNumber: number) {
        return this.number % otherNumber === 0;
    }
}
