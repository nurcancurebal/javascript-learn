/* Array.of() metodu, verilen argümanları içeren yeni bir dizi (Array) oluşturur. Argüman sayısı ve tipi konusunda herhangi bir kısıtı yoktur.

Array.of() ile Array yapıcı arasındaki fark, sayısal argümanları kullanma biçimidir: Array.of(7) tek öğesi 7 olan bir dizi oluştururken, Array(7), 7 öğe kapasiteli(length) özelliği 7 olan- boş bir dizi oluşturur. */

console.log(Array.of(7)); // [ 7 ]

console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]

console.log(Array(7)); // [ <7 empty items> ]

console.log(Array(1, 2, 3)); // [ 1, 2, 3 ]