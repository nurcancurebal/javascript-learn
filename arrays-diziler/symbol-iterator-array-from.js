/* -> Döngüler ve dizi-benzerleri
İki tane resmi tanım vardır. Birbirlerine çok benzeseler de aslında çok farklıdırlar. Lütfen ikisini de iyi bir şekilde anlayın böylece karmaşıklıktan kurtulabilirsiniz.

. Iterables Symbol.iterator methodunun uygulamasını yapan objelerdir.
. Array-likes index ve length özelliklerine sahip dizi benzeri objelerdir.
Doğal olarak bu özellikler birleştirilebilir. Örneğin, karakterler hem iterable(sıralı döngü elemanı, for..of kullanmaya müsaittir) hemde dizi benzeri ( sayısal indeksleri bulunur ve length özelliğine sahiptirler.)

Fakat her iterable obje dizi benzeri olmayabilir. Diğeri de doğrudur yani her dizi benzeri, iterable olmayabilir.

Örneğin, yukarıda bulunan aralık fonksiyonu iterable’dır. Fakat dizi benzeri değildir. Çünkü indekslenmiş özellikleri veya length özelliği bulunmamaktadır.

Aşağıda dizi benzeri olan fakat iterable olmayan obje gösterilmiştir. */

let diziBenzeri = { //  indekslere ve uzunluğa sahiptir => dizi-benzeri
    0: "Merhaba",
    1: "Dünya",
    length: 2
};

// Hata Symbol.iterator bulunmamaktadır.
for (let eleman of diziBenzeri) { }

/* Ortak noktalaraı ikisinin de dizi olmamasıdır. Bunların push veya pop gibi metodları bulunmamaktadır. Eğer dizi ile çalışmak istiyorsanız bunlar yetersiz kalırlar. */


/* -> Array.from
Bunları bir araya getirip dizi yapmaya yarayan Array.from metodudur. Sonrasında dizi metodları çağrılabilir.

Örneğin: */

let diziBenzeri2 = {
    0: "Merhaba",
    1: "Dünya",
    length: 2
};

let arr = Array.from(diziBenzeri2); // (*)

console.log(arr.pop()); // Dünya (metod çalışmakta)

/* (*) satırında bulunan Array.from objeyi alır. Objenin sıralı erişim objesi mi yoksa dizi-benzeri mi olduğunu kontrol eder ve ardından bu değerleri kopyalayarak yeni dizi yaratır.

Aynısı sıralı erişim objesi için de yapılabilir: */

// Aralığın yukarıdaki örnekten alındığını varsayarsanız.
let arr2 = Array.from(aralik);

console.log(arr2); // 1,2,3,4,5 (dizinin toString metodu çalışır)

/* Bunun yanında Array.from metodu opsiyonel olarak “mapping” fonksiyonuna izin verir:

Array.from(obj[, mapFn, thisArg])
mapFn argümanı her elemanın diziye eklenmeden önce uygulanacağı fonksiyondur, ve thisArg bunun için thisi ayarlar.

Örneğin: */

// aralik'in yukarıdan alındığı varsayılırsa

// her sayının karesinin alınması.
let arr3 = Array.from(aralik, num => num * num);

console.log(arr3); // 1,4,9,16,25

// burada Array.from kullanarak karakter karakter dizisi haline getirilmiştir.

let str = '𝒳😂';

// karakterden karakterler dizisi yapma
let chars = Array.from(str);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2

/* str.split'e benzemeksizin, karakter dizisinin tekrar edilebilirliğine göre for..of gibi vekil çiftler ile doğru bir şekilde çalışır.

Teknik olarak burada da aynısı yapılmaktadır: */

let str2 = '𝒳😂';

let chars2 = []; // Array.from içinde aynı şeyi yapmaktadır.

for (let char of str2) {

    chars2.push(char);
}

console.log(chars2);

/* …fakat daha kısa.

Hatta vekil-farkında slice yapılabilir. */

function slice(str3, start, end) {

    return Array.from(str3).slice(start, end).join('');
}

let str3 = '𝒳😂𩷶';

console.log(slice(str3, 1, 3)); // 😂𩷶

// Varolan metodlar vekil çiftleri desteklemez.
console.log(str3.slice(1, 3)); // çöp