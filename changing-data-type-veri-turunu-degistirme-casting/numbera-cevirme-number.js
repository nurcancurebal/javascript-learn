let str = "123";

console.log(typeof str); // string

let num = Number(str);

console.log(typeof num); // number


// Bu şekilde fonksiyon ile değer dönüştürme işlemi genelde karakter dizi olarak aldığımız formlarda kullanılır. Aslında
// sayı kullanılmak istenmektedir. Fakat yazı kutusunun içeriğine sayı dahilinde yazılanları kontrol etmeniz gerekmektedir.
// Böyle bir fonksiyona sayı olmayan bir değer geldiğinde fonksiyon NaN değeri döndürür. Yani (Not a Number) sayı değil.

let age = Number("Bir sayı yerine herhangi bir yazı");

console.log(age); // NaN, dönüştüremedi!


/*
Sayısal dönüştürme kuralları:

Değer	   Sonuç…
undefined	NaN
null	    0
true ve false	1 ve 0
string	    Önce başta ve sondaki whitespace’ler silinir. Sonra eğer kalan değerde hiçbir karakter yok ise sonuç 0. Eğer
içerisinde sayısal olmayan bir değer var ise bu durumda NaN değeri alınır. */


console.log(Number("   123   ")); // 123
console.log(Number("123z"));      // NaN (Hata "z" bir rakam değil)
console.log(Number(true));        // 1
console.log(Number(false));       // 0