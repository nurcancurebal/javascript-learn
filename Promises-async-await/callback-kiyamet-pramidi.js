/* -> Kıyamet pramidi
İlk bakıldığında asenkron kodlama mantıklı gelebilir. Gerçekten de öyle. Bir veya iki çağrılar fena görünmüyor.

Fakat birden çok asenkron iş için kod aşağıdaki gibi olacaktır: */

loadScript('1.js', function (error, script) {

    if (error) {

        handleError(error);

    } else {

        // ...
        loadScript('2.js', function (error, script) {

            if (error) {

                handleError(error);

            } else {

                // ...
                loadScript('3.js', function (error, script) {

                    if (error) {

                        handleError(error);

                    } else {

                        // ...tüm kodlar yüklendikten sonra devam et (*)
                    }
                });
            }
        })
    }
});

/* Yukarıdaki kodda:

1. Önce 1.js'yi yükledik.
2. Hata yoksa 2.js'yi yükle.
3. Hata yoksa 3.js'yi ve en sonda da (*) çalıştırılır.

Çağrılar çoğaldıkça kod daha derinlere inmekte ve bunun yönetimi de zorlaşmaktadır, özellikle içerisinde ... yerine gerçek kod varsa bu birçok döngüye, koşula sahip olacaktır.

Bunun için “callback cehennemi” veya “Kıyamet piramidi” denilebilir.


“Piramit” her bir çağrıda sağa doğru büyüyecek ve kontrolden çıkacaktır.

Bu şekliyle kodlamak pek de iyi görünmemekte.

Bunu her çağrıyı ayrı birer fonksiyon yaparak çözmeye çalışırsak: */

loadScript('1.js', step1);

function step1(error, script) {

    if (error) {

        handleError(error);

    } else {

        // ...
        loadScript('2.js', step2);
    }
}

function step2(error, script) {

    if (error) {

        handleError(error);

    } else {

        // ...
        loadScript('3.js', step3);
    }
}

function step3(error, script) {

    if (error) {

        handleError(error);

    } else {
        // ...continue after all scripts are loaded (*)
    }
};

/* Gördüğünüz gibi aynısı, fakat iç içe yazılmış derinelemesine bir fonksiyon yok. Her iş ayrı bir fonksiyonda tamamlanıyor.

Tamamdır. Artık çalışıyor fakat ayrı ayrı bir tablo gibi duruyor. Okuması oldukça zor, sizin de farkedeceğiniz gibi okurken sürekli ileri geri kodları inceliyorsunuz. Bu kullanışsız bir yöntem oldu, hele ki kod okumayla pek uğraşmayanlar nereye zıplayacaklarını anlayamayacaklardır.

Ayrıca step* fonksiyonu tek kullanımlık oldu. Amaç sadece “kıyamet piramidi”'nden korunmak. Bu fonksiyonları başka kimse kullanmayacaktır. Böylece boş bir sürü isim kullandık ve çöplüğe çevirdik.

Bu problemi çözmek için daha iyi bir yöntem mevcut.

Bunun için kullanılacak en iyi yöntemlerden biri “promises” kullanmaktır. Bir sonraki bölümde bu konuya değineceğiz. */