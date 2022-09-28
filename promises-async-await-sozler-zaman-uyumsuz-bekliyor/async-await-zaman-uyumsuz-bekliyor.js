/* -> zaman uyumsuz/bekliyor
“async/await” adı verilen, vaatlerle daha rahat bir şekilde çalışmak için özel bir sözdizimi vardır. Anlaması ve kullanması şaşırtıcı derecede kolaydır. */


/* -> zaman uyumsuz işlevler
Anahtar kelime ile başlayalım async. Aşağıdaki gibi bir işlevin önüne yerleştirilebilir: */

async function f() {

    return 1;
}

/* Bir işlevden önceki "async" kelimesi basit bir anlama gelir: bir işlev her zaman bir söz verir. Bir işlev aslında vaat edilmeyen bir değer döndürse bile, işlev tanımının başına "async" anahtar sözcüğünü eklemek, JavaScript'i bu değeri otomatik olarak çözülmüş bir söze sarmaya yönlendirir.

Örneğin, yukarıdaki kod, sonucuyla birlikte çözülmüş bir söz 1veriyor, hadi test edelim: */

async function f() {

    return 1;
}

f().then(console.log); // 1

// …Açıkça şuna benzer bir söz verebiliriz:

async function f() {
    return Promise.resolve(1);
}

f().then(console.log); // 1

/* Bu nedenle, asyncişlevin bir söz vermesini sağlar ve içinde vaat olmayanları sarar. Yeterince basit, değil mi? Ama sadece bu değil. awaitYalnızca işlevlerin içinde çalışan başka bir anahtar kelime var asyncve bu oldukça havalı. */