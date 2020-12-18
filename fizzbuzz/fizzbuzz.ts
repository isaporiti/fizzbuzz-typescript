export function fizzbuzz(number: number) {
  if (number % 3 === 0 && number % 5 == 0) {
    return "FizzBuzz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }
  return "Fizz";
}