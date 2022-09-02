/* toString
Dizilerin kendi toString uygulaması mevcuttur. Bu dizilerin arasına virgül konularak geri dönderilir. */

let arr = [1, 2, 3];

console.log(arr); // [ 1, 2, 3 ]
console.log(String(arr) === '1,2,3'); // true

// Şu şekilde denenirse:

console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1, 2] + 1); // "1,21"

/* Dizilerin Symbol.toPrimitive özellikleri yoktur, valueOf metodu da bulunmamaktadır. Sadece toString çevirimi mevcuttur. Bundan dolayı [] boş karakter dizisi dönderir , [1] 1, veya [1,2] "1,2" dönderir.

"+" operatörü karakter dizisine ekleme yaptığında diğer bölümü de karakter dizisine çevirir. Bundan dolayı sonraki adım şu şekilde görülür: */

console.log("" + 1); // "1"
console.log("1" + 1); // "11"
console.log("1,2" + 1); // "1,21"