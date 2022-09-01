let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b]; // rest parametresi

let cSet = new Set(c);

console.log(cSet); // Set(6) { 1, 2, 3, 4, 5, 6 }