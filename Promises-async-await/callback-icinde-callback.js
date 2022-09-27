/* -> Callback içinde callback
Aynı anda iki kod parçasını sıralı olarak nasıl yükleyebiliriz: ilk önce birincisini, bittikten sonra ikincisini.

Doğal olan ikinci loadScript'i callback içine aşağıdaki gibi koymaktır: */

loadScript('/my/script.js', function (script) {

    console.log(`Cool, the ${script.src} is loaded, let's load one more`);

    loadScript('/my/script2.js', function (script) {

        console.log(`Cool, the second script is loaded`);
    });

});

/* Dıştaki loadScript tamamlandıktan sonra, içteki çalışmaya başlar.

Eğer bir tane daha istersek …? */

loadScript('/my/script.js', function (script) {

    loadScript('/my/script2.js', function (script) {

        loadScript('/my/script3.js', function (script) {
            // ...tüm kodlar yüklendikten sonra devam eder.
        });
    })
});

// Böylece, her yeni eylem callback içerisinde kalır. Bu birkaç aksiyon için sorun olmaz fakat daha çok ise sorun yaratacaktır.