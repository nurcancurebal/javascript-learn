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


const dateNow = () => {
    return {
        year: new Date().getFullYear(),
        mounth: new Date().getMonth() + 1,
        dayNumber: new Date().getDate()
    }
}

let readMap = new WeakMap();

mesajlar.forEach((element) => {
    readMap.set(element, {...element, ...dateNow() });
});

// TODO
console.log(readMap.get(mesajlar[1]))