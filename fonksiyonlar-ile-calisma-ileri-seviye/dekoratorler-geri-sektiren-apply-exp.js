/* Geri Sektiren dekoratör

debounce(f, ms) dekoratörü f çağrısına ms zarfında en fazla bir defa izin vermelidir.

Diğer bir deyişle “debounced” fonksiyonu çağırıldığında, ms'e yakın diğer tüm özellikler görmezden gelinecektir. */

/* Pratikte geri sektiren dekoratör değişmeyeceğini bildiğimiz bir zaman süresince aynı kaynağı tekrar çağırmamak için kullanılabilir. */

function debounce(ms) {

    let isCooldown = false;

    return function () {

        if (isCooldown) return;

        console.log(arguments[0]);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);

    };
}

let f = debounce(1000);

f(1); // Anında çalışacak // 1 i arguments a yolluyor
console.log("1X");

f(2); // görmezden gelinecek
console.log("2X");

setTimeout(() => f(3), 100); // görmezden gelinecek ( 100 ms'de çalıştığından )
console.log("3X");

setTimeout(() => f(4), 950); // çalışır
console.log("4X");

setTimeout(() => f(5), 1100); // görmezden gelinecek çünkü son çağrıdan itibaren 1000ms'den az bir zaman geçmiştir.
console.log("5X");

setTimeout(() => f(6), 1300); // görmezden gelinecek çünkü son çağrıdan itibaren 1000ms'den az bir zaman geçmiştir.
console.log("6X");

setTimeout(() => f(7), 1500); // görmezden gelinecek çünkü son çağrıdan itibaren 1000ms'den az bir zaman geçmiştir.
console.log("7X");

setTimeout(() => f(8), 1700); // görmezden gelinecek çünkü son çağrıdan itibaren 1000ms'den az bir zaman geçmiştir.
console.log("8X");

setTimeout(() => f(9), 2300); // görmezden gelinecek çünkü son çağrıdan itibaren 1000ms'den az bir zaman geçmiştir.
console.log("9X");

setTimeout(() => f(10), 2400); // görmezden gelinecek çünkü son çağrıdan itibaren 1000ms'den az bir zaman geçmiştir.
console.log("10X");

setTimeout(() => f(11), 3305); // görmezden gelinecek çünkü son çağrıdan itibaren 1000ms'den az bir zaman geçmiştir.
console.log("11X");

/* debounce çağrısı bir saklayıcı döner. İki durum söz konusudur:

isCooldown = false – çalışmaya hazır.
isCooldown = true – timeout’u bekliyor…
İlk çağırıldığında isCooldown false döner, bundan dolayı çalışır ve isCooldown true olur.

isCooldown true iken diğer çağrılar görmezden gelinir. setTimeout belirlenen vakit geçtikten sonra tekrar isCooldown'u false’a çevirir. */

// TODO çalış