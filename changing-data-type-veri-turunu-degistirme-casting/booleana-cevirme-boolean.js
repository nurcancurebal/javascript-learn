/* Boolean dönüştürme en kolay olanıdır.
Lojik operasyonlarda otomatik olarak bu dönüştürme gerçekleşir. Bunun yanında gerekli olduğunda Boolean(value) da kullanılabilir.
Dönüştürücü kuralları:
“boş” olan 0, veya boş karakter dizisi, null, undefined , Nan gibi değerler false olur.
Diğer türlü değerler true olur. */

console.log(Boolean(1)); // true

console.log(Boolean(0)); // false

console.log(Boolean("merhaba")); // true

console.log(Boolean("")); // false

console.log(Boolean("0")); // true

console.log(Boolean(" ")); // true


// undefined sayı olarak NaN'dır ama null sayı olarak 0 dır.