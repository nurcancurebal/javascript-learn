const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const aSet = new Set(a);
const bSet = new Set(b);

let c = a.filter(function (num) {   // a' nın b' den farklı olduğu değerler

    return !bSet.has(num);
});

const cSet = new Set(c);

console.log(cSet);