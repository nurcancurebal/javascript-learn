/* -> vaat
Söz verme – basit bir dönüşüm için uzun bir kelimedir. Geri aramayı kabul eden bir fonksiyonun, söz veren bir fonksiyona dönüştürülmesidir.

Daha kesin olmak gerekirse, aynı şeyi yapan, orijinali dahili olarak çağıran, ancak bir söz veren bir sarmalayıcı fonksiyonu yaratırız.

Birçok fonksiyon ve kitaplık geri arama tabanlı olduğundan, bu tür dönüşümlere genellikle gerçek hayatta ihtiyaç duyulur. Ancak vaatler daha uygundur. Bu yüzden onlara söz vermek mantıklı.

Örneğin Callback fonksiyonuna giriş bölümünden loadScript(src, callback) alıyoruz. */

function loadScript(src, callback) { // (ikinci olarak bu fonksiyon çalışır)

    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(null, script); // callback = (err, script) içine err= null script=script attı
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

// kullanım:
// loadScript('path/script.js', (err, script) => {...})
/* Söz verelim. Yeni loadScriptPromise1(src)fonksiyon de aynısını yapacak, ancak yalnızca kabul edecek src(geri arama yok) ve bir söz verecek. */

let loadScriptPromise1 = function (src) { // (ilk önce bu fonksiyon çalışır)

    return new Promise((resolve, reject) => {

        loadScript(src, (err, script) => { // callback = (err, script)

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

Bu aslında çok basit – promisify(f) aşağıda bir taahhüt fonksiyonu alır f ve bir sarmalayıcı fonksiyona döndürür.

Bu sarmalayıcı, yukarıdaki koddakiyle aynı şeyi yapar: bir söz verir ve aramayı orijinal f öğesine ileterek sonucu özel bir geri aramada izler: */

function loadScript2(src, callback) {

    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(null, script); // onload= sayfa yüklendiğinde
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

function promisify2(f) { // f= loadScript2

    return function (...args) { // sarmalayıcı fonksiyonu döndür ,

        return new Promise((resolve, reject) => {

            function callback(err, result) { // f için özel geri aramamız

                if (err) {

                    return reject(err);

                } else {

                    resolve(result);
                }
            }

            args.push(callback); // argümanların sonuna özel geri aramamızı ekleyin

            f.call(this, ...args); // call= orijinal fonksiyonu çağırmak için kullanılır
        });
    };
};

let loadScriptPromise2 = promisify2(loadScript2);

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

f = promisify(f, true);

// f(...).then(arrayOfResults => ..., err => ...)

/* Bazı durumlarda, err hiç olmayabilir: callback(result) veya geri arama biçiminde egzotik bir şey var, o zaman bu tür fonksiyonleri, yardımcıyı kullanmadan manuel olarak vaat edebiliriz.

Biraz daha esnek taahhüt fonksiyonlerine sahip modüller de vardır, örneğin es6-promisify . Node.js'de bunun için yerleşik bir util.promisify fonksiyon vardır. */


/* -> Dikkate değer:
Söz vermek, özellikle kullandığınızda async/await harika bir yaklaşımdır, ancak geri aramaların tam olarak yerine geçmez.

Unutmayın, bir sözün yalnızca bir sonucu olabilir, ancak teknik olarak bir geri arama birçok kez çağrılabilir.

Bu nedenle, söz verme yalnızca geri aramayı bir kez çağıran fonksiyonler içindir. Diğer aramalar göz ardı edilecektir. */