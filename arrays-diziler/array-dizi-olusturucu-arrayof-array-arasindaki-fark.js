/* Array.of() metodu, verilen argümanları içeren yeni bir dizi (Array) oluşturur. Argüman sayısı ve tipi konusunda herhangi bir kısıtı yoktur.

Array.of() ile Array yapıcı arasındaki fark, sayısal argümanları kullanma biçimidir: Array.of(7) tek öğesi 7 olan bir dizi oluştururken, Array(7), 7 öğe kapasiteli(length) özelliği 7 olan- boş bir dizi oluşturur. */

console.log(Array.of(7)); // [ 7 ]

console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]

console.log(Array(7)); // [ , , , , , , ]

console.log(Array(1, 2, 3)); // [ 1, 2, 3 ]



console.log(Array.from(7)); // []

// console.log(7.split("")); // hata


// console.log(Array.from(1, 2, 3)); // hata

console.log(Array.from("1, 2, 3")); // ['1', ',', ' ','2', ',', ' ','3']

console.log(("1, 2, 3").split("")); // ['1', ',', ' ','2', ',', ' ','3']


const string = 'merhaba';

console.log(string.split('')); // ['m', 'e', 'r', 'h', 'a', 'b','a']
console.log(Array.from(string)); // ['m', 'e', 'r', 'h', 'a', 'b','a']
console.log(Array(string)); // ['merhaba']
console.log(Array.of(string)); // ['merhaba']

console.log(Array.isArray(string.split(''))); // true
console.log(Array.isArray(Array.from(string))); // true