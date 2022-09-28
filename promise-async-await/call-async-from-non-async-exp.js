/* -> Zaman uyumsuzdan zaman uyumsuz çağrı
“Düzenli” bir fonksiyonumuz var. Ondan nasıl aranır asyncve sonucu nasıl kullanılır? */

async function wait1() {

    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f1() {
    // ...what to write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
}

/* Not: Görev teknik olarak çok basittir, ancak soru, zaman uyumsuz/beklemeye yeni başlayan geliştiriciler için oldukça yaygındır. */

/* çözüm
İçeride nasıl çalıştığını bilmek faydalı olduğunda durum budur.

Çağrıyı söz olarak kabul edin asyncve ona ekleyin .then: */

async function wait() {

    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {

    // 1 saniye sonra 10'u gösterir
    wait().then(result => console.log(result)); // 10
}

f();