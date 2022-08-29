// Array.isArray() = ifadenin array olup olmadığına bakar. true/ false döner


/* Diziler farklı bir tip değildir. Obje üzerine kurulmuşlardır.

Bundan dolayı typeof normal obje ile diziyi ayırt etmekte yardımcı olamaz: */

console.log(typeof {}); // object
console.log(typeof []); // object

/* … Fakat diziler çok kullanıldığından dolayı buna has metod bulunmaktadır: Array.isArray(value) . Eğer değer dizi ise true döndürür. Diğer türlü false döndürür. */

const numbers = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers)); // true



const number = 100;

console.log(Array.isArray(number)); // false



let names1 = 'erdinç'.split(''); // artık buda array oldu

console.log(Array.isArray(names1)); // true



const names2 = ['nurcan', 'erdinç', 'bal'];

console.log(Array.isArray(names2)); //true