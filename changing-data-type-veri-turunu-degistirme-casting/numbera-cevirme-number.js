// Sayısal dünüştürme işlemleri matematiksel operasyonlarda otomatik olarak gerçekleşir. Örnğin sayı olmayan iki değer /
// işlemine tutulduğunda:

console.log("6" / "2");  // 3, karakterler sayılara dönüştürülür ve işlem öyle yapılır.


// Eğer isterseniz Number(value) fonksiyonu ile değeri sayıya dönüştürebilirsiniz:

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

// Lütfen null ve undefined'ın aynı davranmadıklarını bilin. null 0 olurken undefined NaN yani sayı değildir.


// Ekleme karakteri ‘+’
// Neredeyse tüm matematiksel operasyonlar önce değerleri sayılara çevirmeye çalışır. Eğer bir taraf sayıya çevrilemediyse
// bu durumda karakter olarak diğeri ile birleştirme işlemi yapılır.

console.log(1 + '2'); // '12' (Sağ tarafta karakter var)
console.log('1' + 2); // '12' (Sol tarafta karakter var)

// Gördüğünüz gibi sadece bir tarafın karakter olması yeterlidir. Eğer iki tarafta sayıya dönüşebiliyorsa bu durumda gerçek
// toplama işlemi yapılır.