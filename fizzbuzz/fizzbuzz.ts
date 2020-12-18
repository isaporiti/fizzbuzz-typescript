export function fizzbuzz(number: number) {
  const numberIsMultipleOfThree = number % 3 === 0;
  const numberIsMultipleOfFive = number % 5 == 0;

  if (numberIsMultipleOfThree && numberIsMultipleOfFive) {
    return "FizzBuzz";
  }
  if (numberIsMultipleOfFive) {
    return "Buzz";
  }
  return "Fizz";
}