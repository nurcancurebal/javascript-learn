const evens = [0, 2, 4, 6, 8, 10];

const evensNumbers = [...evens];

console.log(evensNumbers);  // [ 0, 2, 4, 6, 8, 10 ]


const odds = [1, 3, 5, 7, 9];

const oddsNumbers = [...odds];

console.log(oddsNumbers);   // [ 1, 3, 5, 7, 9 ]


const wholeNumbers = [...evens, ...odds];

console.log(wholeNumbers);  // [ 0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9 ]