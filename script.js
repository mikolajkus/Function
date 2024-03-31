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

const quarterOf = (month) => {
    return Math.ceil(month / 3);
}

console.log(quarterOf(12));

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

function isDivisible(nNumber, xNumber, yNumber) {
    const isFirstResult = nNumber % xNumber === 0;
    const isSecondResult = nNumber % yNumber === 0;
    return isFirstResult && isSecondResult;
}

console.log(isDivisible(3, 3, 4));

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

function opposite(number) {
    return number - number * 2;
}

console.log(opposite(-0.75));

// 10. In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

function makeNegative(number) {
    if (number >= 0) {
        return number - number * 2;
    } else {
        return number;
    }
}

console.log(makeNegative(5));

// 11. It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(word) {
    return word.slice(1,-1);
}

console.log(removeChar("precisely"));

// 12. Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, firstValue, secondValue) {
    return eval(firstValue + operation + secondValue);
}

console.log(basicOp('*', 10, 2));

// 13. The first century spans from the year 1 up to and including the year 100,
// the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year / 100);
}

console.log(century(1758));

// 14. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else  {
        return 'Odd';
    }
}

console.log(evenOrOdd(53));

// 15. Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
    const letterReturn = name.charAt(0);
    if (letterReturn === 'R' || letterReturn === 'r') {
        return name + ' plays banjo!';
    } else {
        return name + ' does not play banjo!';
    }
}

console.log(areYouPlayingBanjo("Robert"));

// 16. Write function bmi that calculates body mass index (bmi = weight / height2).
//
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function BMI(weight, height) {
    const bmiValue = weight / (height * height);
    if (bmiValue <= 18.5) {
        return 'Underweight';
    } else if (bmiValue <= 25) {
        return 'Normal';
    } else if (bmiValue <= 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

console.log(BMI(80, 1.80));

// 17. Write a rockPaperScissors  function that returns 1 if the first player won and 2 if the second player won.
// In case of a draw, return 0.

function rockPaperScissors(firstPlayer, secondPlayer) {
    if (firstPlayer === 'rock' && secondPlayer === 'scissors') {
        return 1;
    } else if (firstPlayer === 'paper' && secondPlayer === 'rock') {
        return 1;
    } else if (firstPlayer === 'scissors' && secondPlayer === 'paper') {
        return 1;
    } else if (firstPlayer === 'rock' && secondPlayer === 'paper') {
        return 2;
    } else if (firstPlayer === 'scissors' && secondPlayer === 'rock') {
        return 2;
    } else if (firstPlayer === 'paper' && secondPlayer === 'scissors') {
        return 2;
    }
    return 0;
}

console.log(rockPaperScissors('rock', 'paper'));