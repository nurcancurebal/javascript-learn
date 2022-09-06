/* Closure
JavaScript fonksiyon yönelimli bir dildir. Çok bağımsızlık verir. Fonksiyon bir yerde yaratılıp sonra başka bir değişkene atanarak diğer bir fonksiyona argüman olarak gönderilebilir ve sonra tamamen farklı bir yerden çağrılabilir.

Bildiğiniz gibi fonksiyon kendi dışında olan değişkenlere ulaşabilir ve bu özelliklik oldukça fazla kullanılır.

Peki ya dışarıdaki değişken değişirse? Fonksiyon en son değerini mi alacak yoksa yaratıldığında var olan değeri mi?

Ayrıca diyelim ki fonksiyon başka bir yere gönderildi ve oradan çağrıldığında ne olur, yeni yerinden dışarıda bulunan değişkenlere erişebilir mi?

Bu sorulara farklı diller farklı cevaplar vermektedir, bu bölümde JavaScriptin bu sorulara cevabını öğreneceksiniz.

Birkaç soru
Örnek olması amacıyla iki soru formülize edilecek olursa, sonrasında içsel mekanizması parça parça incelenecektir, ileride daha karmaşık sorulara cevap verebilirsiniz.

selamVer fonksiyonu dışarıda bulunan isim değişkenini kullanmaktadır. Fonksiyon çalıştığında, hangi isim değişkeni kullanılacaktır? */

let isim1 = "Erdinç";

function selamVer() {

    console.log("Merhaba, " + isim1);
}

isim1 = "Mehmet";

selamVer(); // "Erdinç" mi yoksa "Mehmet" mi gösterilecek?

/* Böyle durumlara tarayıcı ve sunucu tabanlı geliştirmelerde oldukça sık karşılaşılır. Bir fonksiyon yaratıldığı anda değil de daha sonra çalışmak üzere programlanabilir. Örneğin bir kullanıcı aksiyonu veya ağ üzerinden istekler bu gruba girer.

Öyleyse soru: son değişiklikleri alır mı?

calisanYarat diğer bir fonksiyon yaratır ve bunu döner. Bu yeni fonksiyon herhangi bir yerden çağrılabilir. Peki yaratıldığı yerin dışındaki değişkenlere veya çağrılan yerin dışındaki değişkenlere veya ikisine birden erişebilece mi? */

function calisanYarat() {

    let isim2 = "Mehmet";

    return function () {

        console.log(isim2);
    };
}

let isim2 = "Zafer";

// fonksiyon yarat
let is = calisanYarat();

// çağır
is(); // burada "Mehmet" mi yoksa "Zafer" mi gösterilecek ?