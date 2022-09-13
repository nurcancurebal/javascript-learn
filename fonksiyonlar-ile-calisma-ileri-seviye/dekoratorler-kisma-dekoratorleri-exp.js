/* Kısma Dekoratörleri

“Kısma” dekoratörü throttle(f,ms) oluşturun ve bu bir kapsayıcı döndersin, bu kapsayıcı çağrıyı f'e iletsin ve bu çağrıyı belirtilen ms içerisinde sadece bir defa yapabilsin. Geri kalan “cooldown” periyodundakiler görmezden gelinsin.

** Geri sektiren dekoratör ile Kısma dekoratörü arasındaki fark; görmezden gelinen çağrı eğer belirlenen süre zarfında yaşayabilirse, gecikme sonrasında çağırılır.

Daha iyi anlayabilmek için günlük kullanılan bir uygulamadan yararlanabiliriz.

Örneğin fare olaylarını takip etmek istiyorsunuz.

Tarayıcı üzerinde bir fonksiyon ile farenin her mikro seviyeli hareketinde gittiği yerlerin bilgileri alınabilir. Aktif fare kullanımı sırasında akıcı bir şekilde çalışacaktır. Her sn’de 100 defa ( 10ms ) çalışabilir.

İzleme fonksiyonu web sayfası üzerinde bazı bilgileri güncellemeli.

Güncelleme fonksiyonu update()'in her fare mikro hareketinde çalışması sisteme çok ağır gelmektedir. Aslında bu fonksiyonun 100ms’de birden fazla çalışmasının da bir mantığı yoktur.

Bundan dolayı update() yerine, her bir fare hareketinde çalışacak throttle(update,100) fonksiyonu kullanılacaktır. Bu dekoratör her fare değişiminde çağırılabilir fakat update() 100ms içerisinde maksimum bir defa çağırılacaktır.

Şu şekilde görünecektir:

İlk fare hareketinde dekoratör çağrıyı doğrudan update'e yönlendirecektir. Bu önemlidir, kullanıcı böylece hareketinin sonucunu doğrudan görür.
Sonrasında fare hareket etse de 100ms geçene kadar hiçbir şey olmaz. Dekoratör çağrıları görmezden gelir.
100ms sonunda son koordinatlar ile tekrardan bir update çalışır.
En sonunda fare bir yerlerde durur. Dekoratör 100ms bekler ve bu bekleme bittikten sonra update fonksiyonu son koordinatlar ile çalışır. Belki de en önemlisi son fare koordinatlarının da işlenmiş olmasıdır.
Kod örneği: */

function f(a) {

    console.log(a)
};

// f1000 f'e çağrıların 1000ms en fazla bir defa geçmesini sağlar.
let f1000 = throttle(f, 1000);

f1000(1); //  1 yazar
f1000(2); // (throttling, 1000ms henüz bitmedi)
f1000(3); // (throttling, 1000ms henüz bitmedi)

// 1000 ms bittiğinde...
// ...çıktısı 3 olur , aradaki 2 değeri pas geçilir.
// P.S. kaynağın argümanı this f1000'e iletilmiştir. Bu argüman f fonksiyonuna da iletilmelidir.

function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)

            savedArgs = arguments;
            savedThis = this;

            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {

            isThrottled = false; // (3)

            if (savedArgs) {

                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

/* throttle(func,ms)'e yapılan çağrı saklayıcı(wrapper) döner.

İlk çağrıda saklayıcı func döner ve rahatlama yavaşlama durumuna girer ( isThrottled=true ).
Bu durumda tüm çağrılar savedArgs/savedThis içerisinde tutulur. Bu kaynaklar ve argümanlar hafızada tutulmalıdır. Çünkü çağrıyı eşzamanlı olarak çoğaltmamız için bu bilgiler gereklidir.
… ms süresi geçtikten sonra setTimeout çalışır. Yavaşlama durumu sona erer (isThrottled = false ). Eğer görmezden gelinmiş çağrı var ise saklayıcı son hafızada tutulan kaynağı ve argüman ile çalışır.
Son adım func yerine wrapper çalıştırır, çünkü sadece func'ın çalışması yetmez ayrıca yavaşlama durumuna girilmesi gereklidir. */

function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) {
            // sakinleştikten sonra son argümanları çağırmak için kaydet.
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        // diğer türlü sakinleşme durumuna geç.
        func.apply(this, arguments);

        isThrottled = true;

        // isThrottled'ı geciktirmeden sonra tekrardan başlatmak için plan yap.
        setTimeout(function () {

            isThrottled = false;

            if (savedArgs) {
                // eğer çağrı varsa savedThis/savedArgs değerleri mevcuttur.
                // Kendini yineleyen çağrılar fonksiyonu çağırır ve tekrar sakin duruma geçer.
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

// TODO çalış