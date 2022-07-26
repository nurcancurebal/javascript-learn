let string = 'I love JavaScript. If you do not love JavaScript what else can you love.';

console.log(string.match('love'));
// ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]

let pattern = /love/gi;

console.log(string.match(pattern))   // ["love", "love", "love"]

// Normal bir ifade kullanarak metinden sayıları çıkaralım. Burası normal ifade bölümü değil, panik yapmayın! Düzenli ifadeleri daha
// sonra ele alacağız.


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge';

let regEx = /\d+/;

// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir,
// ondan sonra g varsa global demektir, her yerde ara.


console.log(txt.match(regEx));  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]

console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]