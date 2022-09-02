/* -> Kıyaslama
Eğer çok ağır yüklü işlemler için kıyaslama yapılıyorsa, dikkatli olunmalıdır.

Örneğin, iki tarih arasındaki farkı hesaplayan iki fonksiyondan hangisinin daha hızlı olduğunu inceleyelim */

// tarih1 ve tarih2, hangisi işlemi daha hızlı tamamlar.
function diffSubtract(date1, date2) {

    return date2 - date1;
}

// veya
function diffGetTime(date1, date2) {

    return date2.getTime() - date1.getTime();
}

/* Yukarıdaki iki fonksiyon aynı işlemi yapar, fakat bir tanesi date.getTime() ile o tarihin ms cinsinden değerini alırken diğeri tarihin sayıya doğrudan çevrilmesine dayalı. Sonuçları her zaman aynı olacaktır.

Öyleyse hangisi daha hızlı?

Bunu ölçmek için fonksiyonları birçok defa çalıştırıp aradaki farkı öyle kontrol etmektir.

Ölçülecek olursa: */

function diffSubtract(date1, date2) {

    return date2 - date1;
}

function diffGetTime(date1, date2) {

    return date2.getTime() - date1.getTime();
}

function bench(f) {

    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms'); // Time of diffSubtract: 16ms
console.log('Time of diffGetTime: ' + bench(diffGetTime) + 'ms'); // Time of diffGetTime: 6ms

/* Vay be! getTime() ile yapılan işlem çok daha hızlı! Bunun nedeni tip dönüşümü olmaması, böylece JavaScript motoru çok daha iyi optimize edebilmektedir.

Bir değer aldık fakat bu henüz iyi bir karşılaştırma olmadı.

Diyelim ki karsilastirma(cikarma) çalışırken işlemci paralelde başka bir şeyler ile uğraşıyor olsun. Bu uğraştığı işlemler karsilastirma(tarihFarki) zamanında bitsin.

Bu aslında oldukça gerçekçi bir senaryodur.

A pretty real scenario for a modern multi-process OS.

Sonuç olarak karsilastirma(cikarma) için daha az işlemci kaynağı kullanılanılır ve bu da yanlış sonuca neden olur.


-> Daha güvenilir karşılaştırma yapabilmek için bu karşılaştırma paketi bir kaç defa çalıştırılmalıdır

Aşağıda örneğini görebilirsiniz: */

function diffSubtract(date1, date2) {

    return date2 - date1;
}

function diffGetTime(date1, date2) {

    return date2.getTime() - date1.getTime();
}

function bench(f) {

    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// Paketi 10 defa çalışacak şekilde ayarlayın
for (let i = 0; i < 10; i++) {

    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

console.log('Total time for diffSubtract: ' + time1); // Total time for diffSubtract: 119
console.log('Total time for diffGetTime: ' + time2); // Total time for diffGetTime: 8

/* Modern JavaScript motorları “sıcak kod” için daha gelişmiş optimizasyon yapmaya başladılar. Bu nadiren çalışan kodlar yerine daha çok fazlaca tekrar eden kodların optimizasyonu anlamına gelmektedir. Böylece ilk çalışmalar çok ta optimize edilmezler. */

// ana döngüye girmeden ısınma turu:
bench(diffSubtract);
bench(diffGetTime);

// şimdi ise karşılaştırma ( benchmark )
for (let i = 0; i < 10; i++) {

    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}


/* -> Mikro seviyede karşılaştırma yaparken daha dikkatli olunmalıdır.
Modern JavaScript motorları kod üzerinde birçok iyileştirme yaparlar. Normal kullanımdan ziyade yapay test sonuçları üzerinde değişikliklere neden olabilirler. Özellikle çok küçük karşılaştırmalarda. Bundan dolayı eğer performan sizin için çok ciddi bir konu ise, JavaScript motorlarının nasıl çalıştığını öğrenmeniz gerekmektedir. Öğrendiğinizde mikro seviyede bir karşılaştırmaya ihtiyacınız kalmayacaktır.

V8 motoru ile ilgili makaleleri http://mrale.ph adresinden bulabilirsiniz. */