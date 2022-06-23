const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const aSet = new Set(a);
const bSet = new Set(b);

let c = a.filter(function (number) {

    return bSet.has(number);
});

const cSet = new Set(c);

console.log(cSet);  // Set(2) { 4, 5 }