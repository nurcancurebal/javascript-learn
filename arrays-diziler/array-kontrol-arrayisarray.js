// Array.isArray() = ifadenin array olup olmadığına bakar. true/ false döner

const numbers = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers)); // true



const number = 100;

console.log(Array.isArray(number)); // false



let names1 = 'erdinç'.split(''); // artık buda array oldu

console.log(Array.isArray(names1)); // true



const names2 = ['nurcan', 'erdinç', 'bal'];

console.log(Array.isArray(names2)); //true