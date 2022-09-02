/* Otomatik Düzenleme
Otomatik düzenleme Date objesinin oldukça kullanışlı bir özelliğidir. Tarihi sınırın dışında ayarladığınız durumlarda otomatik olarak kendini düzeltebilir. */


let date1 = new Date(2013, 0, 32); // 32 Ocak 2013 ?!?

console.log(date1); // 2013-01-31T22:00:00.000Z, ...is 1st Şubat 2013!

/* Sınırın dışındaki tarih bileşenleri otomatik olarak dağıtılır. Ayların sınırlarını düşünmenize gerek yoktur. Bunlar Date objesi tarafından otomatik olarak hesaplanacaktır.

Diyelim ki “28 Şub 2016”'yı iki gün artırmak istediniz. Belki “2 Mart” belki de “1 Mart” olabilir. Bunu bizim düşünmemize gerek yoktur. Sadece iki gün ekleyin yeterli. Date objesi geri kalanı sizin için yapacaktır: */

let date2 = new Date(2016, 1, 28);

date2.setDate(date2.getDate() + 2);

console.log(date2); // 2016-02-29T22:00:00.000Z, 1 Mar 2016

// Bu özellik belirtilen bir süre sonrasında tekrardan tarihi almak için kullanılır. Örneğin “Şu andan 70 sn sonrası”'ni al.

let date3 = new Date();

date3.setSeconds(date3.getSeconds() + 70);

console.log(date3); // 2022-09-01T22:34:51.610Z, doğru tarihi gösterir.

// Sıfır veya negatif değer de ayarlamak mümkündür. Örneğin:

let date4 = new Date(2016, 0, 2); // 2 Ocak 2016

date4.setDate(1); // ayın 1. günü

console.log(date4); // 2015-12-31T22:00:00.000Z

date4.setDate(0); // İlk gün 1 olduğundan dolayı 0 geçen ayın son gününü verir. min gün 1'dir, bu nedenle önceki ayın son günü varsayılır
console.log(date4); // 2015-12-30T22:00:00.000Z