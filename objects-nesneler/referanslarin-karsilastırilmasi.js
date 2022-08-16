// Eşitlik == ve sıkı eşitlik === operatörleri aynı şekilde çalışmaktadır.
// İki obje anca aynı objeler ise eşittir.

// Örneğin iki değişken aynı objeyi referans alırsa bu durumda eşit olurlar:

let a = {};
let b = a; // referansı kopyala

console.log(a == b); // true, iki değişken de aynı objeyi referans almaktadır.
console.log(a === b); // true

// İki tane farklı objenin nasıl davrandığına bakılırsa:

let a2 = {};
let b2 = {}; // iki tane bağımsız obje

console.log(a2 == b2); // false

// Dikkat ederseniz ikisi de boş olsa bile birbirinden farklı objelerdir.