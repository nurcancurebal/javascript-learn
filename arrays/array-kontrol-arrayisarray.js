// Array.isArray: Veri türünün bir dizi olup olmadığını kontrol etmek için

const numbers = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers)); // true


const number = 100;

console.log(Array.isArray(number)); // false


// Array.isArray() = ifadenin array olup olmadığına bakar. true/ false döner

let names1 = 'erdinç'.split(''); // artık buda array oldu

const names2 = ['nurcan', 'erdinç', 'bal'];

console.log(Array.isArray(names1)); // true

console.log(Array.isArray(names2)); //true