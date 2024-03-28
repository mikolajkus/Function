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