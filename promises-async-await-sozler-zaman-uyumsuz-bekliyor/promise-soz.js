/* -> Promise ( Söz )

1. Zaman alan “Kod üretme”. Örneğin ağ üzerinden veri yükleyen bir uygulama
2. Üretilen kodu hazır olduğunda “tüketmek isteyen” kod. Birçok fonksiyon bu sonuca ihtiyaç duyabilir.
3. promise(söz) bir çeşit özel JavaScript objesidir. Bu obje “üreten kod” ile “tüketen kod’u” birleştirir. “Kod üreten”'in ne kadar sürede üreteceği belli değildir. Bu söz hazır olduğunda tüm üyelere bunu bildirir.
Bu analoji tam olarak doğru değildir, aslında JavaScript promise’leri üyelik listesinden çok daha karmaşıktır: Bazı ek özellikleri ve sınırlılıkları mevcuttur. Fakat başlangıç olarak iyi diyebiliriz.

Promise objesinin yapıcı yazımı şu şekildedir: */

let promise = new Promise(function (resolve, reject) {

    // çalıştırıcı (üretici kod)
});

/* new Promise'e gönderilen fonksiyona çalıştırıcı. Promise üretildiğinde, bu çalıştırıcı otomatik olarak başlar. Bu üretici kodu kapsar, sonrasında sonuç üretilir.

Sonuçlanan promise objesinin dahili özellikleri şu şekildedir:

. durum – ilk önce “bekleniyor (pending)” sonrasında “yerine getirildi” veya “red edildi” durumuna getirilir.
. sonuç – ilk başlangıçta undefined'dır.

Çalıştırıcı işini bitirdiğinde, aşağıdaki fonksiyonları belirtilen argümanlar ile çağırmalıdır:

. resolve(value) — işin başarılı bir şekilde bittiğini belirtir:
  --state'i "fulfilled"'e ayarlar,
  --result'ı value'a ayarlar.
. reject(error) — bir hata olduğunu belirtir:
  -- state'i "rejected"'e ayarlar,
  -- result'ı error'a ayarlar.

Sonra bu değişikliklerin “fanlara” nasıl bildirildiğini göreceğiz.

Aşağıda basit bir Promise yapıcısı ve “üretici kod”'lu bir çalıştırıcı göreceksiniz ( setTimeout ) */

let promise2 = new Promise(function (resolve, reject) {
    // Fonksiyon Promise oluşturulduğunda otomatik olarak başlar.
    // Başladıktan bir sn sonra "done" yazarak işi bitirir.
    setTimeout(() => resolve("done"), 1000);
});

/* Yukarıdaki kodun çalışması hakkında iki şey söyleyebiliriz:

1. Çalıştırıcı otomatik olarak çağrıldı ve hemen başladı.
2. Çalıştırıcı resolve ve reject adında iki argüman alır. Bu fonksiyonlar JavaScript motoru tarafından ön tanımlıdır. Bunları tekrar oluşturmaya gerek yok. Sadece hazır olduğunda çağırmamız yeterlidir.

“işliyor” durumundan bir sn sonra çalıştırıcı "resolve(“done”)`'ı çağırır ve sonucu üretir:


İşlem başarılı bir şekilde tamamlandığındna dolayı, “söz yerine getirildi”.

Aşağıda ise sözü hata ile reddeden bir çalıştırıcı örneği görülmektedir: */

let promise3 = new Promise(function (resolve, reject) {

    // çalışmaya başladıktan bir sn sonra iş hata ile sonuçlandı.
    setTimeout(() => reject(new Error("Whoops!")), 1000); // Error: Whoops!
});

/* Özetlemek gerekirse çalıştırıcı ( bir süre alabilir ) işi bittikten sonra resolve veya reject'i çağırarak gerekli Promise objesinin durumunu değiştirir.

resolve edilmiş veya reject edilmiş Promise(Söz) objesine “yerleşmiş” denilir. Daha öncesinde ise bu durum “pending”(askıda) idi. */


/* -> Sadece tek bir sonuç veya hata olabilir
Çalıştırıcı sadece bir çözüm veya bir red'i çağırmalıdır. Söz’ün durumu değişikliği son olur.

Bundan sonraki her türlü çözüm veya red görmezden gelinir: */

let promise4 = new Promise(function (resolve, reject) {

    resolve("done");

    reject(new Error("…")); // önemsenmez

    setTimeout(() => resolve("…")); // önemsenmez
});

/* Buradaki fikir çalıştırıcının sadece bir tane sonuç veya bir tane hata dönmesi üzerinedir.

Ayrıca çözüm/red sadece bir tane (veya hiç) argüman kabul eder ve geri kalanlarını önemsemez. */


/* -> Error objesi ile reddetme
Bazı durumlar beklenmediği gibi gidebilir. Böyle durumlarda reject'i bir argüman ile çağırabiliriz. Error objesini kullanmanız daha iyi olacaktır. Bunun nedeni ileride daha açık olacaktır. */


/* -> Anında çözüm/reject objelerinin çağırılması
Pratikte, çalıştırıcı genelde asenkron çalışır ve çözüm/red'den bir tanesini bir süre sonra çağırır, aslında çağırmasa da olur. Bunun yerine doğrudan çözüm veya redded çağrılabilir. Örneğin: */

let promise5 = new Promise(function (resolve, reject) {

    // Hiç zaman almadan
    resolve(123); // Anında sonucu bu şekilde verebiliriz
});

/* Bu durum işe başladığınızda fakat sonrasında değişen bir şey olmadığının görünüp hiç çalışmadan gönderilmek istendiğinde gerçekleştirilebilir.

Bu aslında iyi bir çözüm. Böylece söz hemen çözülmüş olur. */


/* -> state(durum) ve result(sonuç) dahilidir
Promise objesinin durum ve sonuç özellikleri dahilidir. Bundan dolayı “tüketici kod” içerisinden doğrudan erişemeyiz. Bunun yerine .then/.catch/.finally gibi metodları kullanırız. */