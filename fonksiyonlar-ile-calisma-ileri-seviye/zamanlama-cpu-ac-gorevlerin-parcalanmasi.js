/* -> CPU-aç görevlerin parçalanması
setTimeout ile CPU-aç görevlerin kullanılabilmesi şöyle bir yöntem kullanılabilir.

Örneğin, yazıların renklerini değiştiren ( şu anki sayfa gibi ) bir uygulama tam olarak CPU-aç bir uygulamadır. Analiz eder, birçok renkli eleman yaratır, bunları dökümana ekler dosya büyüdükçe bu da gittikçe daha fazla işlemci gerektirir. Hatta tarayıcının "hang " durumuna yani tepki vermemesine kadar gidebilir, bu da kabul edilemez.

Bundan dolayı uzun metinleri ayırabiliriz. Önce 100 satır, sonra diğer bir 100 satır vs.

Daha basit bir örnekten anlatmaya çalışırsak. Bir fonksiyonunuz olsun ve 1'den 100000000000'a kadar saysın

Eğer kodu çalıştırırsanız işlemci tepki vermemeye başlar. Sunucu tabanlı JS kodlarında bu kolay bir şekilde fark edilebilir fakat eğer bu kodu tarayıcı üzerinde çalıştırıyorsanız diğer butonlara tıkladığınızda JavaScript’in durduğunu ve bunun bitene kadar da başka bir şeyin çalışmadığını görürsünüz. */

let i1 = 0;

let start1 = Date.now();

function count1() {

    // yoğun bir iş
    for (let j = 0; j < 1e9; j++) {

        i1++;
    }

    console.log((Date.now() - start1) + 'ms de tamamlandı 1');
}

count1(); // 1808ms de tamamlandı 1

/* Hatta taryıcı “bu kodun çalışması uzun zaman alıyor” uyarısı verebilir.

Kodu setTimeout ile bölecek olursak: */

let i2 = 0;

let start2 = Date.now();

function count2() {

    // zorlu görevin bir bölümünü yap (*)
    do {

        i2++;

    } while (i2 % 1e6 != 0);

    if (i2 == 1e9) {

        console.log((Date.now() - start2) + 'ms de tamamlandı 2');

    } else {

        setTimeout(count2, 0); // yeni çağrıyı zamanla (**)
    }
}

count2(); // 4685ms de tamamlandı 2

/* Şimdi tarayıcı ekranı “sayma işlemi” gerçekleşirken tamamen çalışır durumdadır.

İşin bir bölümü şu şekilde yapılır (*)

1. İlk çalışma: i=1...1000000..
2. ikinci çalışma: i=1000001..2000000
3. … bu şekilde while i nin 100000'e bölünüp bölünmediğine kadar.

Eğer işlem hala bitmemişse (**) zamanlayıcısı tekrar çalışır.

Sayaç çalışırken duraklama yapılması JavaScript motoruna “nefes alması” ve başka iş yapabilmesi için zaman sağlar.

Dikkat edilmesi gereken nokta: setInterval kullanılarak ve kullanılmadan yapılan iki testin çalışma süreleri çok farklı değildir.

Bu süreleri daha da yakınlaştırabilmek için neler yapılabilir bakalım.

Zamanlamayı count() fonksiyonunun başına alalım: */

let i3 = 0;

let start3 = Date.now();

function count3() {

    // zamanlama başa taşındı
    if (i3 < 1e9 - 1e6) {

        setTimeout(count3, 0); // yeni çağrıyı zamanla
    }

    do {

        i3++;

    } while (i3 % 1e6 != 0);

    if (i3 == 1e9) {

        console.log((Date.now() - start3) + 'ms de tamamlandı 3');
    }
}

count3(); // 4685ms de tamamlandı 3

/* Şimdi ise count() ile başlıyoruz ve count fonksiyonunun birden fazla çağırılacağınız biliyoruz.

Çalıştırırsanız belirgin biçimde daha kısa süreceğini göreceksiniz. */


/* -> Browserdaki iç içe zamanlayıcıların arasında bulunan minimum gecikmeler
Tarayıcıda, iç içe zamanlayıcıların kullanımına ait bir limit bulunmaktadır. HTML5 standard dediğine göre: “5 iç içe zamanlayıcıdan sonra, döngü en az 4 ms durmak zorundadır.”

Bunu aşağıdaki bulunan örnekte gösterelim. setTimeout çağrısı kendisini 0ms sonra tekrarn çağırıyor. Her bir çağrı bir öncekinin zamanını times dizisinden hatırlıyor. Gecikme nasıl olacak bakalım: */

let start4 = Date.now();
let times = [];

setTimeout(function run() {

    times.push(Date.now() - start4); // bir önceki çağrıdaki gecikmeyi hatırla.

    if (start4 + 100 < Date.now()) console.log(times); // gecikme 100ms den büyükse göster

    else setTimeout(run, 0); // değilse tekrar zamanla

}, 0);

// Çıktının örneği:
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100
/* İlk zamanlayıcılar anında çalışacaktır ( dökümantasyonda yazdığı gibi ) bundan dosnra gecikmeler oyuna dahil olur. 9, 15, 20, 24...

Bu limitasyonların nedeni de yine eski zamanlara dayanmaktadır. Çoğu kod bu prensibe göre çalıştığından dolayı bu kurallar devam etmektedir.

Sunucu tabanlı JavaScript için ise bu kısıtlama geçerli değildir. Ayrıca anlık olarak asenkronron işlerin zamanlaması amacıyla başka yollar da bulunmaktadır. Örneğin process.nextTick ve setImmediate gibi. Yani buradaki kısıtlamanın tarayıcı bazlı olduğu sonucunu çıkarabilirsiniz. */