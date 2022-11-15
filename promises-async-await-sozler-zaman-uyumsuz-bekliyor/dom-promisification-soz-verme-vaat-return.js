/* -> vaat
Söz verme – basit bir dönüşüm için uzun bir kelimedir. Geri aramayı kabul eden bir işlevin, söz veren bir işleve dönüştürülmesidir.

Daha kesin olmak gerekirse, aynı şeyi yapan, orijinali dahili olarak çağıran, ancak bir söz veren bir sarmalayıcı işlevi yaratırız.

Birçok işlev ve kitaplık geri arama tabanlı olduğundan, bu tür dönüşümlere genellikle gerçek hayatta ihtiyaç duyulur. Ancak vaatler daha uygundur. Bu yüzden onlara söz vermek mantıklı.

Örneğin Callback fonksiyonuna giriş bölümünden loadScript(src, callback) alıyoruz. */

function loadScript(src, callback) {

    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(null, script); // TODO bu ne demek callback(null, script)
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

// kullanım:
// loadScript('path/script.js', (err, script) => {...})
/* Söz verelim. Yeni loadScriptPromise1(src)işlev de aynısını yapacak, ancak yalnızca kabul edecek src(geri arama yok) ve bir söz verecek. */

let loadScriptPromise1 = function (src) {

    return new Promise((resolve, reject) => {

        loadScript(src, (err, script) => { // TODO burada ne yapıyor?

            if (err) reject(err)

            else resolve(script);
        });
    })
}

// kullanım:
// loadScriptPromise1('path/script.js').then(...)
/* Şimdi loadScriptPromise1 söze dayalı kodumuza çok iyi uyuyor.

Gördüğümüz gibi, tüm işi orijinale devreder loadScript ve söz vermek anlamına gelen kendi geri aramasını sağlar resolve/reject.

Pek çok fonksiyona söz vermemiz gerekebileceğinden, bir yardımcı kullanmak mantıklıdır.

Bu aslında çok basit – promisify(f) aşağıda bir taahhüt işlevi alır f ve bir sarmalayıcı işlevi döndürür.

Bu sarmalayıcı, yukarıdaki koddakiyle aynı şeyi yapar: bir söz verir ve aramayı orijinal f öğesine ileterek sonucu özel bir geri aramada izler: */

function promisify(f) {

    return function (...args) { // sarmalayıcı fonksiyonu döndür

        return new Promise((resolve, reject) => {

            function callback(err, result) { // f için özel geri aramamız

                if (err) {

                    return reject(err);

                } else {

                    resolve(result);
                }
            }

            args.push(callback); // argümanların sonuna özel geri aramamızı ekleyin

            f.call(this, ...args); // orijinal fonksiyonu çağır // TODO burada ne oluyor?
        });
    };
};

// kullanım:
let loadScriptPromise2 = promisify(loadScript);

// loadScriptPromise2(...).then(...);

/* Burada orijinal fonksiyonun iki argümanlı bir geri arama beklediğini varsayıyoruz (err, result). En sık karşılaştığımız şey bu. O zaman özel geri aramamız tam olarak doğru biçimdedir ve promisify böyle bir durum için harika çalışır.

Ama ya orijinal f, daha fazla argüman içeren bir geri arama bekliyorsa callback(err, res1, res2)?

İşte promisify bir dizi çoklu geri arama sonucu döndüren bir değişiklik: */

// promisify(f, true) sonuç dizisini almak için
function promisify(f, manyArgs = false) {

    return function (...args) {

        return new Promise((resolve, reject) => {

            function callback(err, ...results) { // f için özel geri aramamız

                if (err) {

                    return reject(err);

                } else {

                    // manyArgs belirtilmişse, tüm geri arama sonuçlarıyla çözümle
                    resolve(manyArgs ? results : results[0]);
                }
            }

            args.push(callback);

            f.call(this, ...args);
        });
    };
};

// kullanım:
f = promisify(f, true);

// f(...).then(arrayOfResults => ..., err => ...)

/* Bazı durumlarda, err hiç olmayabilir: callback(result) veya geri arama biçiminde egzotik bir şey var, o zaman bu tür işlevleri, yardımcıyı kullanmadan manuel olarak vaat edebiliriz.

Biraz daha esnek taahhüt işlevlerine sahip modüller de vardır, örneğin es6-promisify . Node.js'de bunun için yerleşik bir util.promisify işlev vardır. */


/* -> Dikkate değer:
Söz vermek, özellikle kullandığınızda async/await harika bir yaklaşımdır, ancak geri aramaların tam olarak yerine geçmez.

Unutmayın, bir sözün yalnızca bir sonucu olabilir, ancak teknik olarak bir geri arama birçok kez çağrılabilir.

Bu nedenle, söz verme yalnızca geri aramayı bir kez çağıran işlevler içindir. Diğer aramalar göz ardı edilecektir. */