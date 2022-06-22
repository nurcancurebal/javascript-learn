let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let aSet = new Set(a);
let bSet = new Set(b);

let c = a.filter(function (num) {

   return bSet.has(num);
});

let cSet = new Set(c);

console.log(cSet);  // Set(3) { 3, 4, 5 }