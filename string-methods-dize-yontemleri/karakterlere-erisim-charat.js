// indexteki elemanı döndürür

let string = '30 Days Of JavaScript';

console.log(string.charAt(0));        // 3


let lastIndex = string.length - 1;

console.log(string.charAt(lastIndex)); // t



let str = `Selam`;

// ilk karakter
console.log(str[0]); // S
console.log(str.charAt(0)); // S


/* Köşeli parantez karakter almanın modern yoludur, charAt ilk metodlardandır.
Aralarındaki tek fark [] eğer karakteri bulamaz ise undefined döner. Fakat charAt boş karakter döner: */

let str2 = `Selam`;

console.log(str2[1000]); // undefined
console.log(str2.charAt(1000)); // '' (boş karakter)