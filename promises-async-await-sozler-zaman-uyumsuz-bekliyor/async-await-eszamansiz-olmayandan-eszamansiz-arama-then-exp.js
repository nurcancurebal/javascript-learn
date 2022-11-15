/* -> Eşzamansız olmayandan eşzamansız arama
“Düzenli” bir fonksiyonumuz var. Ondan nasıl aranır async ve sonucu nasıl kullanılır? */

async function wait1() {

    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f1() {
    // ...buraya ne yazmalı
    // async wait()'i çağırmamız ve 10 almak için beklememiz gerekiyor
    // unutma, "bekle"yi kullanamayız
}

/* Not: Görev teknik olarak çok basittir, ancak soru, zaman uyumsuz/beklemeye yeni başlayan geliştiriciler için oldukça yaygındır. */

/* çözüm
İçeride nasıl çalıştığını bilmek faydalı olduğunda durum budur.

Çağrıyı söz olarak kabul edin async ve ona ekleyin .then: */

async function wait() {

    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {

    // 1 saniye sonra 10'u gösterir
    wait().then(result => console.log(result)); // 10
}

f();