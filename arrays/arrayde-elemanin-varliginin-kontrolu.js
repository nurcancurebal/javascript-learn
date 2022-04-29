// indexOf() dizide o eleman varsa elemanın bulunduğu index dönüyor yoksada -1 dönüyor

let names = ['nurcan', 'erdinç', 'bal', 'aşk', 'sevgi', 'bal'];
let namesTwo = names.indexOf('kalp'); // -1
let namesThree = names.indexOf('bal'); //2

namesTwo === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array');
namesThree === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array');


// lastIndexOf() dizide aynı elemandan birden fazla olabilir bu komut içine yazılan elemanın en son nerede geçtiğini söyler

const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2];

console.log(numbers.lastIndexOf(1)); // 9
console.log(numbers.lastIndexOf(2)); // 10


// includes() yine dizinin içerisinde olup olmadığını kontrol ediyor ama bu kez true/false döndürüyor

const number = [1, 2, 3, 4, 6, 8, 0];

console.log(number.includes(8)); // true