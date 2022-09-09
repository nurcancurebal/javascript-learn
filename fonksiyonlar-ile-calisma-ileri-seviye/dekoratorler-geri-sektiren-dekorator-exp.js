/* Geri Sektiren dekoratör

debounce(f, ms) dekoratörü f çağrısına ms zarfında en fazla bir defa izin vermelidir.

Diğer bir deyişle “debounced” fonksiyonu çağırıldığında, ms'e yakın diğer tüm özellikler görmezden gelinecektir. */

let f = debounce(alert, 1000);

f(1); // Anında çalışacak
f(2); // görmezden gelinecek

setTimeout(() => f(3), 100); // görmezden gelinecek ( 100 ms'de çalıştığından )
setTimeout(() => f(4), 1100); // çalışır
setTimeout(() => f(5), 1500); // görmezden gelinecek çünkü son çağrıdan itibaren 1000ms'den az bir zaman geçmiştir.

/* Pratikte geri sektiren dekoratör değişmeyeceğini bildiğimiz bir zaman süresince aynı kaynağı tekrar çağırmamak için kullanılabilir. */

function debounce(f, ms) {

    let isCooldown = false;

    return function () {

        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };
}

/* debounce çağrısı bir saklayıcı döner. İki durum söz konusudur:

isCooldown = false – çalışmaya hazır.
isCooldown = true – timeout’u bekliyor…
İlk çağırıldığında isCooldown false döner, bundan dolayı çalışır ve isCooldown true olur.

isCooldown true iken diğer çağrılar görmezden gelinir. setTimeout belirlenen vakit geçtikten sonra tekrar isCooldown'u false’a çevirir. */
// TODO çalış