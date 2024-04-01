// 1. Implement the getGreeting function.

function getGreeting(firstName, lastName) {
    return 'Hi, "' + firstName + ' ' + lastName + '". What is up?';
}

const greeting = getGreeting('John', 'Smith');
console.log(greeting);

// 2. Implement the isThisMyName function that returns true if provided with your name.
// Otherwise, return false.

function isThisMyName(myName) {
    return myName === 'Mikolaj';
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

function getCircleArea(radius) {
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
    const isDivisibleByX = nNumber % xNumber === 0;
    const isDivisibleByY = nNumber % yNumber === 0;
    return isDivisibleByX && isDivisibleByY;
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

function getOppositeNumber(number) {
    return number * -1;
}

console.log(getOppositeNumber(-0.75));

// 10. In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

function getNegativeNumber(number) {
    if (number > 0) {
        return number * -1;
    }
}

console.log(getNegativeNumber(5));

// 11. It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function letDeleteLetter(word) {
    return word.slice(1,-1);
}

console.log(letDeleteLetter('precisely'));

// 12. Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicMathOperation(operation, firstValue, secondValue) {
    if (operation === '+') {
        return firstValue + secondValue;
    }
    if (operation === '-') {
        return firstValue - secondValue;
    }
    if (operation === '*') {
        return firstValue * secondValue;
    }
    if (operation === '/') {
        return firstValue / secondValue;
    }
}

console.log(basicMathOperation('*', 10, 2));

// 13. The first century spans from the year 1 up to and including the year 100,
// the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.

function getCentury(year) {
    return Math.ceil(year / 100);
}

console.log(getCentury(1758));

// 14. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
}

console.log(isEvenOrOdd(53));

// 15. Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
    const firstLetter = name.charAt(0);
    if (firstLetter === 'R' || firstLetter === 'r') {
        return name + ' plays banjo!';
    }
    return name + ' does not play banjo!';
}

console.log(areYouPlayingBanjo("Robert"));

// 16. Write function bmi that calculates body mass index (bmi = weight / height2).
//
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function getBMI(weight, height) {
    const bmiValue = weight / (height * height);
    if (bmiValue <= 18.5) {
        return 'Underweight';
    }
    if (bmiValue <= 25) {
        return 'Normal';
    }
    if (bmiValue <= 30) {
        return 'Overweight';
    }
    return 'Obese';
}

console.log(getBMI(80, 1.80));

// 17. Write a rockPaperScissors  function that returns 1 if the first player won and 2 if the second player won.
// In case of a draw, return 0.

function rockPaperScissors(firstPlayer, secondPlayer) {
    if (
        (firstPlayer === 'rock' && secondPlayer === 'scissors') ||
        (firstPlayer === 'paper' && secondPlayer === 'rock') ||
        (firstPlayer === 'scissors' && secondPlayer === 'paper')
    ) {
        return 1;
    }
    if (
        (firstPlayer === 'rock' && secondPlayer === 'paper') ||
        (firstPlayer === 'scissors' && secondPlayer === 'rock') ||
        (firstPlayer === 'paper' && secondPlayer === 'scissors')
    ) {
        return 2;
    }
    return 0;
}

console.log(rockPaperScissors('rock', 'paper'));

// 18. Create the getCalculationResult function
// it should accept three arguments:
// the first number
// the second number
// the calculation type
// the calculation type should be a string that is either '+', '-', '*', or '/'
// the function should return the result of the calculation based on the numbers and the type of the calculation
// if the calculation type is not recognized, return null

function getCalculationResult(firstNumber, secondNumber, calculationType) {
    if (calculationType === '+') {
        return firstNumber + secondNumber;
    }
    if (calculationType === '-') {
        return firstNumber - secondNumber;
    }
    if (calculationType === '*') {
        return firstNumber * secondNumber;
    }
    if (calculationType === '/') {
        return firstNumber / secondNumber;
    }
    return null;
}

console.log(getCalculationResult(3, 3, '*'));

// 19. Implement the getPercentageValue function
// it should accept two arguments:
// the base number
// the percentage
// the function should return the percentage value based on the base number and the percentage.

function getPercentageValue(baseNumber, percentageNumber) {
    return percentageNumber * baseNumber / 100;
}

console.log(getPercentageValue(100, 10));

// 20. Implement the getGreaterNumber function
// it should accept two arguments:
// the first number
// the second number
// the function should return the greater of two numbers

function getGreaterNumber(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber;
    }
    return secondNumber;
}

console.log(getGreaterNumber(2, 5));

// 21. Implement the isOddNumber function
// it should accept one argument:
// a number
// the function should return true  if the number is odd, and false  if the number is not odd

function isOddNumber(number) {
    return number % 2 !== 0;
}

console.log(isOddNumber(6));

// 22. Implement the isEvenNumber  function
// it should accept one argument:
// a number
// the function should return true  if the number is even, and false  if the number is not even

function isEvenNumber(number) {
    return number % 2 === 0;
}

console.log(isEvenNumber(6));

// 23. Implement the isDivisible function
// it should accept two arguments:
// the number to be divided
// the number to divide by
// the function should return true  if the dividend is divisible by the divisor, and false  otherwise

function isDivisibleBy(dividend, divisor) {
    return dividend % divisor === 0;
}

console.log(isDivisibleBy(10, 3));

// 24. Implement the getSmallerNumber function
// it should accept two arguments:
// the first number
// the second number
// the function should return the smaller of two numbers

function getSmallerNumber(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return firstNumber;
    }
    return secondNumber;
}

console.log(getSmallerNumber(2, 1));

// 25. Implement the isNumberPositive function
// it should accept one argument:
// a number
// the function should return true  if the number is positive, and false  if the number is not positive

function isNumberPositive(number) {
    return number > 0;
}

console.log(isNumberPositive(1));

// 26. Implement the getCelsiusConvertedToFahrenheit function
// it should accept one argument:
// a number
// the function should return the number converted from Celsius to Fahrenheit

function getCelsiusConvertedToFahrenheit(degreesCelsius) {
    return degreesCelsius * 1.8 + 32;
}

console.log(getCelsiusConvertedToFahrenheit(36));

// 27. Implement the getFahrenheitConvertedToCelsius function
// it should accept one argument:
// a number
// the function should return the number converted from Fahrenheit to Celsius

function getFahrenheitConvertedCelsius (degreesFahrenheit) {
    const fahrenheitSubtract32 = degreesFahrenheit - 32;
    const fiveDivideNine = 5 / 9;
    return fahrenheitSubtract32 * fiveDivideNine;
}

console.log(getFahrenheitConvertedCelsius(96.8));

// 28. Implement the isLeapYear  function
// it should accept one argument:
// a number
// the function should return true  if the number represents a leap year, and false otherwise

function isLeapYear(year) {
    const divisibleBy4 = year % 4 === 0;
    const divisibleBy100 = year % 100 === 0;
    const divisibleBy400 = year % 400 === 0;
    return divisibleBy4 && divisibleBy100 || divisibleBy400;
}

console.log(isLeapYear(2000));

// 29. Implement the getAverageOfThreeNumbers  function
// it should accept three arguments:
// the first number
// the second number
// the third number
// the function should return the average of all provided numbers

function getAverageOfThreeNumbers (firstNumber, secondNumber, thirdNumber) {
    const sum = firstNumber + secondNumber + thirdNumber;
    return sum / 3;
}

console.log(getAverageOfThreeNumbers(3, 4, 4));

// 30. Implement the isNumberNegative function
// it should accept one argument:
// a number
// the function should return true  if the number is negative, and false  if the number is not negative

function isNumberNegative (number) {
    return number < 0;
}

console.log(isNumberNegative(-5));