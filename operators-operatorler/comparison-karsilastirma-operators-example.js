// Farklı tiplerin karşılaştırılması
// Farklı tipler karşılaşılaştırıldığında sayılara döünüştürülürler.


console.log('2' > 1); // doğru, karakter olan `2` sayıya çevrilerek 2 olmuş ve böyle karşılaştırılmıştır.
console.log('01' == 1); // doğru, karakter olan '01' sayıya çevrilerek 1 olmuştur.



let firstValue = 10;
let secondValue = 20;
let thirdValue = 10.5365;
let fourthValue = 352532;
let fifthValue = 20;
let sixth = -6;

console.log(firstValue == secondValue, firstValue == thirdValue, secondValue == fifthValue,);
// false false true