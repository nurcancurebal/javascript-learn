// Atama operatörü = dir. Öncelik sırasında en altlarda yer almaktadır. Böylece x = 2 * 2 + 1 ifadesi çalıştığında önce tüm
// işlemler yapılır ardından “=” çalıştırılarak sonuç x içerisinde tutulur.

let x = 2 * 2 + 1;

console.log(x); // 5

// Zincirleme atama yapmak şu şekilde mümkündür:

let a, b, c;

a = b = c = 2 + 2;

console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

// Zincirleme atama sağdan sola doğru olur.Önce en sağdaki değişkene değer atanır. 2 + 2 değeri önce c'ye ardından b ve son
// olarak da a'ya atanır.En sonunda tüm değişkenler tek bir değeri alırlar.

// "=" operatörü değer döndürür
// Operatör her zaman değer döndürür.Toplama + veya çarpma için * bu çok açıktır.Fakat ya atama ? Atama operatörü de aslında
// değer döndürür.

// Aşağıdaki gibi bir işlem yaptığınızda value x’in içine yazılır ve sonra döndürülür.

// Daha karmaşık bir örnek şu şekilde yapılabilir:

let a2 = 1;
let b2 = 2;

let c2 = 3 - (a2 = b2 + 1);

console.log(a2); // 3
console.log(b2); // 2
console.log(c2); // 0

//Yukarıdaki örnekte, (a2 = b2 + 1) in sonucu a2 ye atandıktan sonra(3) 3’den çıkarmak için kullanılıyor.

// Komik bi kod değil mi ? Nasıl çalıştığını anlamanız lazım, bazen başka kütüphaneler kullandığınızda böyle şeyleri sizin
// yazmanız beklenmez.Böyle olaylar aslında kodun okunaklılığını azaltır.