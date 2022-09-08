/* Zamanlama: setTimeout ve setInterval
Bir fonksiyon hemen çalıştırılmak istenmeyebilir, belirli bir zaman sonra çalışması istenebilir. Buna “çağrıyı zamanlama” denir.

Bunun için iki metod var:
. setTimeout fonksiyonu belirli bir zaman sonra çalıştırmaya yarar.
. setInterval fonksiyonun belirli aralıklar ile sürekli çalışmasını sağlar.

Bu metodlar JavaScript’in tanımları arasında yer almaz. Fakat çoğu ortam bu metodları sunar. Daha özele inecek olursak tüm tarayıcılar ve NodeJS bu metodları sağlar. */


/* -> setTimeout

let zamanlayiciId = setTimeout(fonk|kod, bekleme[, arg1, arg2...])

Parametreler:
~ fonk|kod
Fonksiyon veya çalıştırılacak kodun karakter dizisi hali. Genelde bu fonksiyon olur. Uyumluluk dolayısıyla karakter dizisi de gönderilebilir fakat önerilmez.

~ bekleme
Milisaniye cinsiden çalışmadan önceki bekleme süresi.(1000 ms = 1 saniye).

~ arg1, arg2…
Fonksiyon için gerekli argümanlar.( IE9 öncesinde çalışmaz.)
Örneğin aşağıdaki kod selamVer() fonksiyonunu bir saniye sonra çalıştırır: */

function selamVer1() {

  console.log('Selam');
}

setTimeout(selamVer1, 1000);

// Argümanlı versiyonu:

function selamVer2(ifade, kim) {

  console.log(ifade + ', ' + kim);
}

setTimeout(selamVer2, 1000, "Merhaba", "Erdinç"); // Merhaba, Erdinç

/* Eğer ilk argüman karakter dizisi ise, sonrasında JavaScript bundan fonksiyon üretir.

Aşağıdaki de aynı şekilde çalışacaktır: */

setTimeout("selamVer('Merhabalar')", 1000); // TODO hata Callback must be a function. Received "selamVer('Merhabalar')"

/* Karakter dizisi olarak fonksiyon göndermek aslında pek önerilmez, bunun yerine aşağıdaki gibi fonksiyon kullanılması daha doğrudur: */

setTimeout(() => console.log('Adım Nurcan'), 1000);


/* -> Fonksiyon gönder fakat çalıştırma.
Yeni başlayan arkadaşlar bazen yanlışlıkla fonksiyonun sonuna () ekleyebilir: */

// yanlış!
setTimeout(selamVer2(), 1000); // undefined

/* Bu çalışmaz, çünkü setTimeout referans bir fonksiyon beklemektedir. Burada selamVer() derseniz fonksiyonu çalıştırırsınız ve bunun sonucu setTimeout fonksiyonu tarafından kullanılır. Bizim durumumuzda selamVer() undefined döndürür. ( fonksiyon ile alakalı bir sorun yok ) bundan dolayı hiçbir şey zamanlanmaz. */