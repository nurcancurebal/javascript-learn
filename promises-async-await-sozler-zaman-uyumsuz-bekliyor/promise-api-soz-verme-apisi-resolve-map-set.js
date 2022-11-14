/* -> Promise API (Söz Verme API'sı)
Promisede 5 statik yöntem vardır. Kullanım durumlarını burada hızlı bir şekilde ele alacağız. */


/* -> Promise.resolve (söz ver çöz)
Söz dizimi: */

let promise = Promise.resolve(value);

// Verilen value ile çözülmüş olan bir söz verir. Buradaki gibi:

let promise2 = new Promise(resolve => resolve(value));

/* Yöntem zaten bir değere sahipken kullanılır. Ancak bir söz içine “sarılmış” olmasını ister.

Örneğin, loadCached fonksiyonu aşağıda urlyi alır ve sonucu hatırlar. Böylece aynı URL’deki gelecekteki çağrılar hemen döndürülür. */

function loadCached(url) {

    let cache = loadCached.cache || (loadCached.cache = new Map()); // TODO bu kod ne yapıyor?

    if (cache.has(url)) {

        return Promise.resolve(cache.get(url)); // (*)
    }

    return fetch(url)
        .then(response => response.text())
        .then(text => {

            cache.set(url, text);
            return text;
        });
}

/* loadCached(url).then(…) kullanabiliriz. Çünkü fonksiyonun bir söz döndürmesi garantilidir. Amaç Promise.resolve (*) doğrultusunda hizmet eder: Arayüzünün birleşik olduğundan emin olun. .then den sonra her zaman loadCached kullanabiliriz. */