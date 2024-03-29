// 1. Implement the getGreeting function.

function getGreeting(firstName, lastName) {
    return 'Hi, ' + firstName + ' ' + lastName + '. What is up?';
}

const greeting = getGreeting('John', 'Smith');
console.log(greeting);

// 2. Implement the isThisMyName function that returns true if provided with your name.
// Otherwise, return false.

function isThisMyName(myName) {
    if (myName === 'Mikolaj') {
        console.log('true');
    } else {
        console.log('false');
    }
}

isThisMyName('Mikolaj');

// 3. Implement the isThisBoolean  function that returns true  if provided with a boolean.

function isThisBoolean(boolean) {
    if (boolean === true || boolean === false) {
        console.log('true');
    } else {
        console.log('false');
    }
}

isThisBoolean(true);  //true
isThisBoolean(false);  // true
isThisBoolean('true'); // false

// 4.Implement the getCircleArea  function.

function getCircleArea(radiusNumber) {
    return Math.PI * radius * radius;
}

const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

// 4.5. Implement the getCirclesAreaSum function that uses the getCircleArea function under the hood

function getCirclesAreaSum(radiusFirst, radiusSecond) {
    return  (Math.PI * radiusFirst * radiusFirst) + (Math.PI * radiusSecond * radiusSecond);
}

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

// 4.75 Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

function isQuarter(monthNumber) {
    console.log(Math.ceil(monthNumber / 3));
}

isQuarter(12);

// 5. Write the convertMinutesToHours function.

function convertMinutesToHours(hoursNumber) {
    return hoursNumber / 60;
}

const hours = convertMinutesToHours(75);
console.log(hours); // 1.25

// 6. Write the isTextUppercase  function.

function isTextUppercase(text) {
    if (text === text.toUpperCase()) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isTextUppercase('Hello'); // false
isTextUppercase('HELLO'); // true

// 7. Create a function that checks if a number n is divisible by two numbers x AND y.
// All inputs are positive, non-zero numbers.

function isDivisibleByTwoNumbers(nNumber, xNumber, yNumber) {
    if (nNumber % xNumber === 0 && nNumber % yNumber === 0) {
        console.log('true because ' + nNumber + ' is divisible by ' + xNumber + ' and ' + yNumber);
    } else if (nNumber % xNumber === 0 && nNumber % yNumber !== 0) {
        console.log('false because ' + nNumber + ' is not divisible by ' + yNumber);
    } else if (nNumber % xNumber !== 0 && nNumber % yNumber === 0) {
        console.log('false because ' + nNumber + ' is not divisible by ' + xNumber);
    } else {
        console.log('false because ' + nNumber + ' is neither divisible by ' + xNumber + ' nor ' + yNumber);
    }
}

isDivisibleByTwoNumbers(30,5,20);

//8. Write the getBillboardPrice function that accepts two arguments:
// - the text intended to use on the billboard
// - the cost of a single character

function getBillboardPrice(text, costPerCharacter) {
    const textLength = text.length;
    const totalPrice = textLength * costPerCharacter;
    console.log(totalPrice);
}

getBillboardPrice('Hello world!', 10); // 120
getBillboardPrice('Hello world!', 15); // 180
getBillboardPrice('To be, or not to be', 20); // 380

// 9.Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

function additiveInverse(number) {
    const currentNumber = number - number * 2;
    console.log(currentNumber);
}

additiveInverse(-0.75);

// 10. In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

function isNegative(number) {
    if (number >= 1) {
        console.log(number - number * 2);
    } else {
        console.log(number);
    }
}

isNegative(-5);

// 11. It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function charactersRemover(string) {
    const letterRemover = string.slice(1,-1);
    console.log(letterRemover);
}

charactersRemover("precisely");

