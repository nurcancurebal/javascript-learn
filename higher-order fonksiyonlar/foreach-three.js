//! forEach return dönmez

// 1. kullanımı

const numbers = [1, 3, 5, 7, 9];

let total = 0;

numbers.forEach(number => total += number); //! forEach()parametre olarak bir fonksiyon alır.

console.log(total);

// 2. kullanımı

const num = [10, 11, 12, 13];

let totalTwo = 0;

let calculate = sayi => totalTwo += sayi;

num.forEach(calculate);

console.log(totalTwo);