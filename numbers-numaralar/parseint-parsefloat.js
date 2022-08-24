/* -> parseInt ve parseFloat
+ veya Number() kullanılarak sayıya çevirme sıkı bir çevirmedir. Eğer argüman sayı değilse hata verir: */

console.log(+"100px"); // NaN

/* Eğer başta veya sonda boşluk varsa bunlar görmezden gelinir.
Fakat gerçek hayatta değerler, "100px" veya "12pt" gibi birim ekleri alabilir. Birçok ülkenin para birimi sona veya başa
gelir. Bundan dolayı 15₺ gibi değerler kullanıldığında önemli olan sayı bölümü olabilir.
parseInt ve parseFloat tam olarak bunlar için kullanılır.
Karakter dizisinden sayıları “okuyabildikleri kadar” okurlar. Hata olduğu durumda sayıyı dönderir. parseInt tam sayı
dönderirken parseFloat küsüratlı sayı dönderir. */

console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5

console.log(parseInt('12.3')); // 12, sadece tamsayı bölümü alındı
console.log(parseFloat('12.3.4')); // 12.3, birinci noktadan sonra yeniden nokta gördüğünde işlemi tamamladı

// Eğer hiçbir basamak okunamazsa NaN dönderirler.

console.log(parseInt('a123')); // NaN, ilk harf işlemi durdurur.


/* -> parseInt in ikinci argümanı : parseInt(str,radix)
parseInt fonksiyonu isteğe bağlı olarak ikinci bir parametreye sahiptir. Bu sayı tabanını belirtir, böylece parseInt
karakter olarak yazılmış hex sayılarını veya binary değerlerini de ayrıştırabilir. */

console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255, 0x olmadan da çalışır
console.log(parseInt('2n9c', 36)); // 123456