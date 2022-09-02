/* Şu anda bugünün başlangıcından itibaren kaç saniye geçti?

bugundenSaniye() adında bir fonksiyon yazın ve bu fonksiyon günün başlangıcından itibaren geçen saniyeyi dönsün.

Örneğin eğer şimdi 10:00 am ise ve gün ışığından yararlanılmıyor ise:

getSecondsToday() == 36000 // (3600 * 10)

Fonksiyon her gün çalışabilmelidir. Bu demek oluyor ki elle bugünün değerini almamalısınız. */

// çözüm

/* Bugün geçen zamanı alabilmek için bugünün 00:00:00’ı için bir tarih objesi oluşturup bunu şimdi'nin tarih objesinden çıkarabilirsiniz.

Bunun sonucu milisaniye cinsinden olacaktır, bundan dolayı dönen değeri 1000’e bölerseniz saniye alırsınız: */

function bugundenSaniye() {

  let simdi = new Date(); // Fri Sep 02 2022 18:27:19 GMT+0300 (GMT+03:00)

  // o anki gün/ay/yıl'ı kullanarak yeni bir tarih objesi oluşturur.
  let bugun = new Date(simdi.getFullYear(), simdi.getMonth(), simdi.getDate()); // Fri Sep 02 2022 00:00:00 GMT+0300 (GMT+03:00)

  let fark = simdi - bugun; // ms cinsinden

  return Math.round(fark / 1000); // saniyeye çevrildi
}

console.log(bugundenSaniye()); // 60633

/* Bunun alternatifi, saat/dakika/saniye gibi bilgilerin saniyeye çevrilmesidir:

function bugundenSaniye() {

  let d = new Date();

  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}; */