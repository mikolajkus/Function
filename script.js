// 1. Implement the getGreeting function.

function getGreeting(firstName, lastName) {
    return 'Hi, "' + firstName + ' ' + lastName + '". What is up?';
}

const greeting = getGreeting('John', 'Smith');
console.log(greeting);

// 2. Implement the isThisMyName function that returns true if provided with your name.
// Otherwise, return false.

function isThisMyName(myName) {
    return myName === 'Mikolaj'
}

console.log(isThisMyName('Mikolaj'));

// 3. Implement the isThisBoolean  function that returns true  if provided with a boolean.

function isThisBoolean(value) {
    return typeof value === 'boolean';
}

console.log(isThisBoolean(true));  //true
console.log(isThisBoolean(false));  // true
console.log(isThisBoolean('true')); // false

// 4.Implement the getCircleArea  function.

function getCircleArea(radiusNumber) {
    return Math.PI * radius * radius;
}

const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

// 4.5. Implement the getCirclesAreaSum function that uses the getCircleArea function under the hood

function getCirclesAreaSum(firstRadius, secondRadius) {
    const firstCircleArea = Math.PI * firstRadius * firstRadius;
    const secondCircleArea = Math.PI * secondRadius * secondRadius;
    return firstCircleArea + secondCircleArea;
}

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

// 4.75 Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

function isQuarter(monthNumber) {
    return Math.ceil(monthNumber / 3);
}

console.log(isQuarter(12));

// 5. Write the convertMinutesToHours function.

function convertMinutesToHours(hoursNumber) {
    return hoursNumber / 60;
}

const hours = convertMinutesToHours(75);
console.log(hours); // 1.25

// 6. Write the isTextUppercase  function.

function isTextUppercase(text) {
    return text === text.toUpperCase();
}

console.log(isTextUppercase('Hello')); // false
console.log(isTextUppercase('HELLO')); // true

// 7. Create a function that checks if a number n is divisible by two numbers x AND y.
// All inputs are positive, non-zero numbers.

function isDivisibleByTwoNumbers(nNumber, xNumber, yNumber) {
    if (nNumber % xNumber === 0 && nNumber % yNumber === 0) {
        return 'true because ' + nNumber + ' is divisible by ' + xNumber + ' and ' + yNumber;
    } else if (nNumber % xNumber === 0 && nNumber % yNumber !== 0) {
        return 'false because ' + nNumber + ' is not divisible by ' + yNumber;
    } else if (nNumber % xNumber !== 0 && nNumber % yNumber === 0) {
        return 'false because ' + nNumber + ' is not divisible by ' + xNumber;
    } else {
        return 'false because ' + nNumber + ' is neither divisible by ' + xNumber + ' nor ' + yNumber;
    }
}

console.log(isDivisibleByTwoNumbers(30,5,20));

//8. Write the getBillboardPrice function that accepts two arguments:
// - the text intended to use on the billboard
// - the cost of a single character

function getBillboardPrice(text, costPerCharacter) {
    return text.length * costPerCharacter;
}

console.log(getBillboardPrice('Hello world!', 10)); // 120
console.log(getBillboardPrice('Hello world!', 15)); // 180
console.log(getBillboardPrice('To be, or not to be', 20)); // 380

// 9.Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

function additiveInverse(number) {
    return number - number * 2;
}

console.log(additiveInverse(-0.75));

// 10. In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

function isNegative(number) {
    if (number >= 1) {
        return number - number * 2;
    } else {
        return number;
    }
}
console.log(isNegative(5));

// 11. It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function charactersRemover(string) {
    return string.slice(1,-1);
}

console.log(charactersRemover("precisely"));