// bir sayıyı bir dizeye dönüştürür. Dizeyi belirtilen sayıda ondalık basamağa yuvarlar.
// Ondalık sayıların sayısı sayıdan büyükse, sıfırlar eklenir.

let num = 5.56789;

let n = num.toFixed(2);

console.log(n); // 5.57
console.log(typeof n); // string


let num2 = 5.56789;

let n2 = num2.toFixed(10);

console.log(n2); // 5.5678900000
console.log(typeof n2); // string