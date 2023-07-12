import { fizzbuzz } from "./fizzbuzz";

function getRandom(min: number = 1, max: number = 15): number {
    const ceiledMin = Math.ceil(min);
    const ceiledMax = Math.floor(max);
    return Math.floor(Math.random() * (ceiledMax - ceiledMin) + ceiledMin);
}

const randomNumber = getRandom();
const message = fizzbuzz(randomNumber)
console.log(message)