const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a, ...b]; // rest parametresi

const cSet = new Set(c);

console.log(cSet); // Set(6) { 4, 5, 8, 9, 3, 7 }