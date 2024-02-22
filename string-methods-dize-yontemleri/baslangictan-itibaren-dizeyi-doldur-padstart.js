/* Yöntem padStart(), başlangıçtan itibaren bir dizeyi doldurur.

Yöntem padStart(), bir dizeyi belirli bir uzunluğa ulaşana kadar başka bir dizeyle (birden çok kez) doldurur. */

const numb = 5;
const text = numb.toString();
console.log(text.padStart(4, "0")); // 0005

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);

console.log(last4Digits.padStart(fullNumber.length, '*')); // ************5581