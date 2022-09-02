/* Haftanın günleri

haftaninGunleriniAl(tarih) adında bir fonksiyon yazın ve bu fonksiyon günlerin kısa formatlarını dönsün : ‘PT’, ‘SA’, ‘ÇA’, ‘PR’, ‘CM’, ‘CT’, ‘PZ’ gibi.

Örneğin: */

/* let tarih = new Date(2012, 0, 3);  // 3 Jan 2012

console.log( haftaninGunleriniAl(tarih) );  */       //  "SA" dönmesi gerekiyor.

/* Testler ile korunaklı olan aç.

çözüm */

/* date.getDay() pazardan başlayarak haftanın günlerini dönmektedir.

Eğer günler için bir dizi yapılırsa bu diziye göre günü dönmek mümkün olur: */

function haftaninGunleriniAl(tarih) {

  let gunler = ['PT', 'SA', 'ÇA', 'PR', 'CM', 'CT', 'PZ' ];

  return gunler[tarih.getDay()];
}

let tarih = new Date(2014, 0, 3); // 3 Jan 2014

console.log( haftaninGunleriniAl(tarih) ); // CM // TODO neden CT dönüyor?