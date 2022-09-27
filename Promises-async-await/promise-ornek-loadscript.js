/* -> Örnek: loadScript
Bir önceki bölümden kodu yükleyen loadScript kodunu alalım.

Aşağıda callback fonksiyonu ile yazılmış versiyonu hatırlama amaçlı aşağıya yazılmıştır: */

function loadScript(src, callback) {

    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

/* Söz kullanarak bunları tekrar yazmaya çalışalım.

Yeni loadScript fonksiyonu callback’e ihtiyaç duymayacaktır. Bunun yerine yüklenme tamamlandığında Promise objesi dönecektir. Dıştaki kod .then kullanarak başka işleyiciler ekleyebilir: */

function loadScript(src) {

    return new Promise(function (resolve, reject) {

        let script = document.createElement('script');

        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => console.log(`${script.src} is loaded!`),
    error => console.log(`Error: ${error.message}`)
);

promise.then(script => console.log('One more handler to do something else!'));

// callback tarzı yazmadan daha iyi olan bir kaç özellik hemen görülebilir:

/*
Promises	                                            Callbacks
Söz ile işlemler doğal sırası dahilinde gerçekleşir.    loadScript çalışmadan önce sonuç ile ne yapılacağı bilinmelidir.
Önce loadScript(script) çalıştırılır, sonra then ile
sonuç işlenir.

.then fonksiyonunu bir sözde istediğimiz kadar           Sadece bir tane callback olmalı.
kullanabiliriz. Her defasında listeye “yeni fan”
eklenebilir.Bunun ile ilgili bir sonraki bölüme
bakılabilir: Promise Zinciri. */

// Söz bize daha iyi bir akış ve esneklik sağlamaktadır.Bir sonraki bölümde diğer yararlarını da göreceğiz.