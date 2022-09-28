/* -> Söz ile gecikme
Gömülü olarak gelen setTimeout fonksiyonu callback kullanmaktadır. Bunun söz-temelli alternatifini yazınız.

delay(ms) fonksiyonu söz döndürmelidir. Bu söz ms saniye sonra çözülmelidir. Böylece .then ekleyebiliriz. Örneğin: */

function delay(ms) {
    // Kodunuz
}

delay(3000).then(() => console.log('runs after 3 seconds'));

function delay(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));

/* Dikkat ederseniz bu çağrıda resolve argüman olmadan çağrılmıştır. delay'den hiç değer dönmüyoruz, sadece geciktiğine eminiz. */