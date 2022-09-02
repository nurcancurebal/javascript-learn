/* Yarına kaç saniye var?

yarinaKacSn() adında bir fonksiyon yazın ve bu fonksiyon yarına kaç saniye olduğunu dönsün.

Örneğin, eğer saat 23:00 ise :

yarinaKacSn() == 3600

Not: Fonksiyon her gün çalışabilmelidir. Bu demek oluyor ki elle bugünün değerini almamalısınız.

çözüm

Yarına olan süreyi bulmak için “yarının 00:00:00”'ından şimdi arasındaki fark bulunur.

Önce “yarını” tanımlamak gereklidir: */

function yarinaKacSn() {

    let simdi = new Date();

    // yarin
    let yarin = new Date(simdi.getFullYear(), simdi.getMonth(), simdi.getDate() + 1);

    let fark = yarin - simdi; // ms cinsinden fark

    return Math.round(fark / 1000); // saniyeye cevir
}

console.log(yarinaKacSn()); // 19469

// Alternatif çözüm:

function getSecondsToTomorrow() {

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;

    return totalSecondsInADay - totalSecondsToday;
}

/* Lütfen birçok ülkede Yaz Saati Uygulaması (DST) olduğunu unutmayın, bu nedenle 23 veya 25 saatlik günler olabilir. Bu günleri ayrı ayrı ele almak isteyebiliriz. */