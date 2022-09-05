/* -> Gerisi(rest) parametreleri ve yayma(spread) operatörleri
Çoğu JavaScript fonksiyonu istenilen sayıda argümanın yazılabilmesini desteklemektedir.

. Math.max(arg1, arg2, ..., argN) – en büyük sayıyı döndürür.
. Object.assign(dest, src1, ..., srcN) – src1..N'in özelliklerini dest'e kopyalar. …vs.
Bu bölümde biz fonksiyonlarımızda bunları nasıl kullanabiliriz konusu üzerinde durulacaktır.


-> Gerisi Parametreleri ...
Fonksiyon istenildiği kadar argüman ile çağırılabilir, nasıl tanımlandığı önemli değidlir.

Aşağıdaki gibi: */

function topla(a, b) {

    return a + b;
}

console.log(topla(1, 2, 3, 4, 5)); // 3

/* Çok fazla argüman yazdınız diye bir hata almazsınız. Fakat hesaplarken tabi ilk iki argüman işleme dahil olacaktır.

Geri kalanlar fonksiyon içerisinde ... ile gösterilebilir. Kelime anlamıyla “geri kalanları diziye al” anlamına gelir.

Örneğin tüm elemanları args dizisine almak için: */

function hepsiniTopla(...args) { // args dizinin ismi

    let topla = 0;

    for (let arg of args) topla += arg;

    return topla;
}

console.log(hepsiniTopla(1)); // 1
console.log(hepsiniTopla(1, 2)); // 3
console.log(hepsiniTopla(1, 2, 3)); // 6

/* İlk parametre değişken olarak, geri kalanlar dizi olarak alınabilir.

Aşağıda ilk iki değişken alınır geriye kalanlar ise basliklar'a atanır: */

function showName(adi, soyadi, ...basliklar) {

    console.log(adi + ' ' + soyadi); // Julius Caesar
    console.log(basliklar[0]); // Konsil
    console.log(basliklar[1]); // İmparator
    console.log(basliklar.length); // 2
}

showName("Julius", "Caesar", "Konsil", "İmparator");


/* -> Geri kalanlar hep en sonda olmalıdır
Geri kalan parametreler hep en sonda olmalıdır. Bundan dolayı aşağıdaki kod pek mantıklı değildir. */

/* function f(arg1, ...rest, arg2) { // ...rest'ten sonra arg2 ?!
     error
} */

//! ...rest her zaman en sonda olmalıdır.


/* -> “arguments” değişkeni
arguments adında dizi benzeri bir obje yer almaktadır. Bu obje tüm argümanları indeksine göre tutar.

Örneğin: */

function argumanIsimleri() {

    console.log(arguments.length); // 2, 1
    console.log(arguments[0]); // Julius, Erdinç
    console.log(arguments[1]); // Caesar, undefined

    // Döngüye de alınabilir
    // for(let arg of arguments) console.log(arg);
}


argumanIsimleri("Julius", "Caesar");
argumanIsimleri("Erdinç");

/* Önceden, geriye kalanlar parametresi eklenmemişti, arguments değişkeni tüm argümanların alınacağı yegane yöntemdi.

Hala çalışmakta ve eski şekliyle kullanılabilir.

Fakat olumsuz tarafı, tam olarak dizi olmamasından dolayı dizilere ait bazi fonksiyonlar çağırılamaz. Örneğin arguments.map(...) mümkün değildir.

Ayrıca tüm argümanları alır, önceki geriye kalan parametrelerdeki gibi istenilen argüman başka bir değişkene atanamaz.

Eğer böyle bir özelliğe ihtiyacınız varsa bu durumda geriye kalanlar parametrelerini kullanmanız önerilir. */


/* -> Ok fonksiyonları "arguments" objesine sahip değillerdir.
Eğer arguments objesine ok fonksiyonlarında erişmeye çalışırsanız bu değerler dışta bulunan normal fonksiyondan alınan değerlerdir. */

function f() {

    let showArg = () => console.log(arguments[0]);
    showArg();
}

f(1); // 1

// Hatırlayacaksınız ok fonksiyonlarının kendisine ait this'i bulunmamaktadır. Şimdi arguments'in olmadığını da biliyorsunuz.


/* -> Yayma Operatörleri
Geriye kalan parametrelerden nasıl dizi oluşturulacağını bir önceki bölümde gördünüz.

Bazen bunun tam tersini yapmak gerekebilir.

Örneğin Math.max fonksiyonu listede bulunan en büyük sayıyı dönmeye yarar: */

console.log(Math.max(3, 5, 1)); // 5

/* Diyelim ki bir diziniz var [3, 5, 1] olsun. Math.max çağırıldığında ne olur.

Olduğu gibi bu dizi paslanırsa çalışmaz, çünkü Math.max sayısal argüman listesi bekler, dizi değil: */

let arr1 = [3, 5, 1];

console.log(Math.max(arr1)); // NaN

/* … Ayrıca Math.max(arg[0], arg[1], arg[2]) gibi sürekli indeksini elle yazacak haliniz yok, çünkü kaç tane olduğunu bilemeyebilirsiniz. Kodunuz çalıştıkça belki daha fazla olabilir veya daha az da olabilir bu durumda ortaya çirkin bir kod çıkacaktır.

Yayma operatörü bu durumda yardıma koşar. Geriye kalanlar parametrelerine benzer, ...'yi bu da kullanır fakat tam olarak zıttıdır.

Fonksiyon çağırıldığında ...arr şeklinde kullanılırsa, döngüye alınabilir arr argüman listesi şekline dönüşür.

Math.max fonksiyonu için: */

let arr2 = [3, 5, 1];

console.log(Math.max(...arr2)); // 5 (diziyi argüman listesine çevirdi)

// Ayrıca bu şekilde birçok dizi fonksiyona gönderilebilir:

let arr3 = [1, -2, 3, 4];
let arr4 = [8, 3, -8, 1];

console.log(Math.max(...arr3, ...arr4)); // 8

// …Ayrıca yayma operatörü ile normal operatörleri birlikte kullanabilirsiniz:

let arr5 = [1, -2, 3, 4];
let arr6 = [8, 3, -8, 1];

console.log(Math.max(1, ...arr5, 2, ...arr6, 25)); // 25

// Operatörler dizileri birleştirmek için de kullanılabilirler.

let arr7 = [3, 5, 1];
let arr8 = [8, 9, 15];

let merged = [0, ...arr7, 2, ...arr8];

console.log(merged); // [0, 3, 5, 1, 2, 8, 9, 15]

/* Yukarıdaki örnekte dizi kullanarak yayma operatörü gösterilmiştir. Sadece dizi değil her döngüye alınabilen üzerinde bu işlem yapılır.

Örneğin, aşağıdaki yayma operatörü metini karakterlerin dizisi şekline çevirir */

let str1 = "Hello";

console.log([...str1]); // ['H', 'e', 'l', 'l', 'o']

/* Yayma operatörü içte döngü ile elemanları alır, aynı for..of'ta olduğu gibi.

Bundan dolayı, karakter for..of kullanıldığında ...str "h","e","l","l","o" şekline çevrilir. Karakter listesi dizi olarak tanımlanır [...str]

Bu iş için Array.from'da kullanılabilir. Çünkü Array.from döngüye alınabilenleri (karakter dizisi gibi) dizi yapar: */

let str2 = "Hello";

// Döngüye alınabilenleri dizi haline getirir.
console.log(Array.from(str2)); // ['H', 'e', 'l', 'l', 'o']

/* Sonuç [...str] ile aynıdır. Fakat Array.from(obj) and [...obj] ince bir fark bulunmaktadır.

. Array.from hem dizi-benzerlerinde hem de döngüye alınabilirlerde ( array-likes, iterables ) kullanılabilirler.
. Yayma operatörü ise sadece döngüye alınabilirlerde uygulanır.

* Bundan dolayı, bir şeyi diziye çevirmek için Array.from kullanmak daha mantıklı olacaktır. */