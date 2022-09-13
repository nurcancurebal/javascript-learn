/* -> Tımarlama ve kısmi fonksiyonlar

Aslında sadece this değil argümanları da bağlamak mümkün. Çok nadir yapılan bir teknik fakat bilmekte fayda var.

bind'ın yazımı: */

let bound = func.bind(context, arg1, arg2/* , ... */);

/* Bu kaynağı this olarak bağlamaya ve ardından argümanları tanımlaya olanak verir.

Örneğin çarpma fonksiyonu mul(a,b): */

function mul(a, b) {

    return a * b;
}

// Bunun iki katını almak için double fonksiyonunu şu şekilde bağlayarak yaratabiliriz:

let double = mul.bind(null, 2);

console.log(double(3)); // = mul(2, 3) = 6
console.log(double(4)); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10

/* mul.bind(null,2) ile double fonksiyonu yaratılır. Bu fonksiyon mul'a kaynağı null yaparak fakat ilk argüman 2 olacak şekilde iletilir. Bundan sonraki argümanlar da “olduğu gibi” iletilir.

Bu olaya kısmi fonksiyon uygulaması denir – var olan fonksiyonun parametrelerini değiştirerek yeni bir fonksiyon yaratma olayı.

Dikkat ederseniz aslında biz burada this'i hiç kullanmıyoruz. Fakat bind'ın buna ihtiyacı var bundan dolayı null gibi bir değer koymak zorundayız.

Üç ile çarpma olayını ( triple ) ise şu şekilde yazabiliriz */

let triple = mul.bind(null, 3);

console.log(triple(3)); // = mul(3, 3) = 9
console.log(triple(4)); // = mul(3, 4) = 12
console.log(triple(5)); // = mul(3, 5) = 15

/* Neden kısmi fonksiyon kullanıyoruz?

Burada amaç var olan fonksiyon üzerinden okunabilir bağımsız bir fonksiyon yaratmaktır ( double, triple) Böylece bunu kullanabilir ve her defasında ilk argümanı yazmak zorunda kalmayız çünkü bind ile bu sabitlenmiş olur.

Diğer bir durumda kısmı uygulamalar jenerik fonksiyon yaratmada oldukça yararlıdır, ayrıca daha genel fonksiyondan özele doğru inmeye yarar. Kullanışlılık böylece artar.

Örneğin, send(from, to, text) adında bir fonksiyonumuz olsun. user objesinin içerisinde bunun bir farklı versiyonu olan ve o anki kullanıcıyı gönderen sendTo(to,text) kullanmak isteyelim. */