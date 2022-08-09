// && ampersand operator example

const checkOne = 4 > 3 && 10 > 5;         // true && true -> true
const checkTwo = 4 > 3 && 10 < 5;         // true && false -> false
const checkThree = 4 < 3 && 10 < 5;       // false && false -> false

// || pipe or operator, example

const checkFour = 4 > 3 || 10 > 5;         // true  || true -> true
const checkFive = 4 > 3 || 10 < 5;         // true  || false -> true
const checkSix = 4 < 3 || 10 < 5;          // false || false -> false

//! Negation examples

let checkSeven = 4 > 3;               // true
let checkEight = !(4 > 3);            // false
let isLightOn = true;                 // true
let isLightOff = !isLightOn;          // false
let isMarried = !false;               // true