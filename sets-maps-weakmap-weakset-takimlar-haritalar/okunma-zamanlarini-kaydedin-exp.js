// Okunma zamanlarını kaydedin.

/* let mesajlar = [
    { metin: "Merhaba", kimden: "Ahmet" },
    { metin: "Nasıl Gidiyor?", kimden: "Ahmet" },
    { metin: "Sonra görüşürüz", kimden: "Mehmet" }
]; */

/* Mesajın “ne zaman okunduğunu tutmak için” hangi veri yapısını önerirsiniz.

Bir önceki görevde sadece “evet/hayır” tutmanız gerekmişti. Şimdi ise “ne zaman” bilgisinin tutulması gerekir, aynı şekilde eğer mesajlardan silindiğinde sizin oluşturduğunuz yapıdan da silinmesi gerekir.

çözüm
Date ( tarih ) objesini tutmak için yine WeakMap kullanabilirsiniz. */

let mesajlar = [
    { metin: "Merhaba", kimden: "Ahmet" },
    { metin: "Nasıl Gidiyor?", kimden: "Ahmet" },
    { metin: "Sonra görüşürüz", kimden: "Mehmet" }
];

let readMap = new WeakMap();

let year = date.getFullYear(),
    mounth = date.getMonth() + 1,
    dayNumber = date.getDate();

readMap.set(mesajlar[0], date = new Date()); // TODO bunu burada nasıl kullanabiliriz

console.log(`${readMap}, ${dayNumber}. ${mounth}. ${year}`);