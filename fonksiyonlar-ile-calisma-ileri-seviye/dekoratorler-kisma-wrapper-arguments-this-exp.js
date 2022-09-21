/* Kısma Dekoratörleri

“Kısma” dekoratörü throttle(f,ms) oluşturun ve bu bir kapsayıcı döndersin, bu kapsayıcı çağrıyı f'e iletsin ve bu çağrıyı belirtilen ms içerisinde sadece bir defa yapabilsin. Geri kalan “cooldown” periyodundakiler görmezden gelinsin.

** Geri sektiren dekoratör ile Kısma dekoratörü arasındaki fark; görmezden gelinen çağrı eğer belirlenen süre zarfında yaşayabilirse, gecikme sonrasında çağırılır.

Örneğin fare olaylarını takip etmek istiyorsunuz.

Tarayıcı üzerinde bir fonksiyon ile farenin her mikro seviyeli hareketinde gittiği yerlerin bilgileri alınabilir. Aktif fare kullanımı sırasında akıcı bir şekilde çalışacaktır. Her sn’de 100 defa ( 10ms ) çalışabilir.

İzleme fonksiyonu web sayfası üzerinde bazı bilgileri güncellemeli.

Güncelleme fonksiyonu update()'in her fare mikro hareketinde çalışması sisteme çok ağır gelmektedir. Aslında bu fonksiyonun 100ms’de birden fazla çalışmasının da bir mantığı yoktur.

Bundan dolayı update() yerine, her bir fare hareketinde çalışacak throttle(update,100) fonksiyonu kullanılacaktır. Bu dekoratör her fare değişiminde çağırılabilir fakat update() 100ms içerisinde maksimum bir defa çağırılacaktır.

Şu şekilde görünecektir:

İlk fare hareketinde dekoratör çağrıyı doğrudan update'e yönlendirecektir. Bu önemlidir, kullanıcı böylece hareketinin sonucunu doğrudan görür.
Sonrasında fare hareket etse de 100ms geçene kadar hiçbir şey olmaz. Dekoratör çağrıları görmezden gelir.
100ms sonunda son koordinatlar ile tekrardan bir update çalışır.
En sonunda fare bir yerlerde durur. Dekoratör 100ms bekler ve bu bekleme bittikten sonra update fonksiyonu son koordinatlar ile çalışır. Belki de en önemlisi son fare koordinatlarının da işlenmiş olmasıdır. */

function throttle(func, ms) { //  throttle(func,ms)'e yapılan çağrı saklayıcı(wrapper) döner.

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2) // argümanları kaydet.

            savedArgs = arguments; // ...isThrottled true ise savedArgs 2 yi aldı, this global...
            savedThis = this;
            return;
        }

        // false sa burayı yap
        func.apply(this, arguments); // (1) func = f , f ise console.log olan fonksiyon, arguments 1

        isThrottled = true;

        setTimeout(function () { // savedArgs 3 ü aldı settimeout un içine girdi

            isThrottled = false; // (3)

            if (savedArgs) { // savedThis/savedArgs değerleri mevcut ise true

                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null; // yeni bir atama yapıldığı için tekrar kendi fonksiyonununun (yani settimeoutun) içine girer ve isThrottled false çekip bitirir fonksiyonu.
            }
        }, ms);
    }

    return wrapper;
}

function f(a) {

    console.log(a) // 1, 3
};

// f1000 f'e çağrıların 1000ms en fazla bir defa geçmesini sağlar.
let f1000 = throttle(f, 1000);

f1000(1); //  1 yazar
f1000(2); // (throttling, 1000ms henüz bitmedi) atlar
f1000(3); // 3 yazar

// 1000 ms bittiğinde...
// ...çıktısı 3 olur , aradaki 2 değeri pas geçilir.
// P.S. kaynağın argümanı this f1000'e iletilmiştir. Bu argüman f fonksiyonuna da iletilmelidir.

/* İlk çağrıda saklayıcı func döner ve rahatlama yavaşlama durumuna girer ( isThrottled=true ).
Bu durumda tüm çağrılar savedArgs/savedThis içerisinde tutulur. Bu kaynaklar ve argümanlar hafızada tutulmalıdır. Çünkü çağrıyı eşzamanlı olarak çoğaltmamız için bu bilgiler gereklidir.
… ms süresi geçtikten sonra setTimeout çalışır. Yavaşlama durumu sona erer (isThrottled = false ). Eğer görmezden gelinmiş çağrı var ise saklayıcı son hafızada tutulan kaynağı ve argüman ile çalışır.
Son adım func yerine wrapper çalıştırır, çünkü sadece func'ın çalışması yetmez ayrıca yavaşlama durumuna girilmesi gereklidir. */