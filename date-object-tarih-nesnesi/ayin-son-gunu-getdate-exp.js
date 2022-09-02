/* Ayın son günü?

ayinSonGunu(yil,ay) adlı bir metod yazın ve bu metod ayın son gününün dönsün. Bazen bu 30, bazen 31 hatta 28/29 bile olabilir ( Şubat )

Parametreler:

yil – 4 basamaklı format ile yıl bilgisi.
ay – 0’dan başlayacak şekilde ayın indeksi.
Örneğin, ayinSonGunu(2012, 1) = 29 (artık yıldır). */

/* çözüm

Bir sonraki ayın bilgisiyle yeni bir tarih oluşturulduğunda: */

function ayinSonGunu(yil, ay) {

    let tarih = new Date(yil, ay + 1, 0); // Tue Jan 31 2012 00:00:00 GMT+0200 (GMT+03:00)

    return tarih.getDate();
}

console.log(ayinSonGunu(2012, 0)); // 31
console.log(ayinSonGunu(2012, 1)); // 29
console.log(ayinSonGunu(2013, 1)); // 28

/* Normalde tarihler 1’den başlıyor fakat biz istediğimiz sayıdan başlatabiliriz, tarih objesi bunu kendisine göre ayarlayacaktır. Öyleyse 0 gönderdiğimizde bu “ayın 1. gününden önceki günü göster” anlamına gelir. Bu da “bir önceki ayın son günü” demektir. */