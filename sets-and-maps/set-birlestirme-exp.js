const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a, ...b];

const cSet = new Set(c);

console.log(cSet);