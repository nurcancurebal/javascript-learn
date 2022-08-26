/* JavaScript dahilinde Math.random() 0 ile 1 arasında ( 1 dahil değil) rasgele bir sayı döndürür.
Öyle bir fonksiyon yazın ki random(min,max) bu değerler arasında rasgele ondalıklı sayı üreten bir fonksiyon yazın. */

console.log(random(1, 5)); // 1.2345623452
console.log(random(1, 5)); // 3.7894332423
console.log(random(1, 5)); // 4.3435234525

function random(min, max) {

    return min + Math.random() * (max - min);// min' den başladı max' a kadar
}