// + iki formda bulunur. Yukarıda kullandığımız binary form(iki tane operand olma olayı) veya unary form(tek operand olması).
// Eğer unary + veya tek bir değerle kullanılan + işareti sayılar ile bir şey yapmaz. Fakat eğer bu bir sayı değilse sayıya
// çevrilir.


// Sayılara bir etkisi yoktur

let x = 1;
console.log(+x); // 1

let y = -2;
console.log(+y); // -2


// Sayı olmayan değerleri çevirir

console.log(+true); // 1
console.log(+"");  // 0


// Aslında Number(...) işlemini yapar. Fakat daha kısa biçimiyle.

// Karakter dizilerini sayılara çevirme gerekliliği sıklıkla önünüze gelir. Örneğin HTML form değerlerini alırken sadece
// karakter dizisi kullanır. Fakat ya siz bunları toplamak istiyorsanız ? Bildiğiniz gibi iki karakter dizisini + işareti
// ile toplarsanız birleştirme işlemi yapar:

let elma = "2";
let portakal = "3";

console.log(elma + portakal); // "23",  binary toplama iki karakter dizisini birleştiriyor


//Eğer sayı olarak kullanmak istiyorsanız, önce dönüştürme işlemini yapıp sonra toplayabilirsiniz.
// her iki değer de binary toplama işleminden önce sayıya çevrilmişlerdi

console.log(+elma + +portakal); // 5

// Daha uzun bi şekilde bu işlemi yapmak istiyorsanız
// alert( Number(apples) + Number(oranges) ); // 5 şeklinde yapabilirsiniz.


// Olaya bir matematikçi gözünden bakarsanız + kullanımı garip gelebilir. Fakat bir programcının gözünden özel bir olay yok
// aslında: operand’ı bir tane olan(unary) toplama işlemi önce uygulanıyor ve karakter dizisini sayıya çeviriyor. Daha
// sonra iki tane operand’lı ( binary) toplama işlemi bunları topluyor. Neden önce “unary” işlemi gerçekleşiyor da “binary”
// işlemi gerçekleşmiyor? Buna yüksek öncelik diyebiliriz.