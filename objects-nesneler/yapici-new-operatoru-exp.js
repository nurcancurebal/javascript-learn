// İki fonksiyon - bir obje

// new A() == new B() şeklinde A ve B fonksiyonları yaratmak mümkün müdür?

function A() {
    //... 
}

function B() {
    //... 
}

let a = new A;
let b = new B;

console.log(a == b); // true, şu an bu haliyleyken false döndürüyor

// Eğer mümkünse, bi işi yapan kodu yazınız. Eğer öyleyse, kodlarından bir örnek verin.


/* Evet mümkün.
Eğer bir fonksiyon obje döndürüyorsa this yerine o objeyi döndürebilir.
Öyleyse, iki fonksiyon da dışarıda yaratılmış aynı objeyi dönderirse bu durumda aynı olur: */

let obj = {};

function A2() { return obj; }
function B2() { return obj; }

console.log(new A2() == new B2()); // true