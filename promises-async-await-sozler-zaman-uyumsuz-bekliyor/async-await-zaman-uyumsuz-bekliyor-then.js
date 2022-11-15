/* -> zaman uyumsuz/bekliyor
Vaatlerle daha rahat bir şekilde çalışmak için “async/await” adı verilen özel bir sözdizimi vardır. Anlaması ve kullanması şaşırtıcı derecede kolaydır. */


/* -> zaman uyumsuz fonksiyonlar
Anahtar kelime ile başlayalım async. Aşağıdaki gibi bir fonksiyonun önüne yerleştirilebilir: */

async function f() {

    return 1;
}

/* Bir fonksiyondan önceki "async" kelimesi basit bir anlama gelir: bir fonksiyon her zaman bir söz verir. Bir fonksiyon aslında vaat edilmeyen bir değer döndürse bile, fonksiyon tanımının başına "async" anahtar sözcüğünü eklemek, JavaScript'i bu değeri otomatik olarak çözülmüş bir söze sarmaya yönlendirir.

Örneğin, yukarıdaki kod, sonucuyla birlikte çözümlenmiş bir söz döndürür 1, hadi test edelim: */

async function f() {

    return 1;
}

f().then(console.log); // 1

// …Açıkça şuna benzer bir söz verebiliriz:

async function f() {

    return Promise.resolve(1);
}

f().then(console.log); // 1

/* Bu nedenle, async fonksiyonun bir söz vermesini sağlar ve içinde vaat olmayanları sarar. Yeterince basit, değil mi? Ama sadece bu değil. await Yalnızca fonksiyonların içinde çalışan başka bir anahtar kelime var async ve bu oldukça havalı. */