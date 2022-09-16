/* Geri Sektiren dekoratör

debounce(f, ms) dekoratörü f çağrısına ms zarfında en fazla bir defa izin vermelidir.

Diğer bir deyişle “debounced” fonksiyonu çağırıldığında, ms'e yakın diğer tüm özellikler görmezden gelinecektir. */

/* Pratikte geri sektiren dekoratör değişmeyeceğini bildiğimiz bir zaman süresince aynı kaynağı tekrar çağırmamak için kullanılabilir. */

function debounce(f, ms) {

    let isCooldown = false;

    return function () {

        if (isCooldown) return;

        f.apply(this, arguments); // console.log(arguments[0]); bunun ile aynı şey , 1' i burada hemen yazıyor

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);

    };
}

let f = debounce(console.log, 1000); // debounce(console.log, 1000)(1) gibi de yazılabilirdi

//* f lerin hepsi aynı anda çalışmaya başlıyor

f(1); // Anında çalışacak // 1 i arguments a yolluyor
f(2); // görmezden gelinecek çünkü 1 sn bekliyor false yapmak için ama f(2) hiç beklemedi yani isCooldown true

setTimeout(() => f(3), 100); // görmezden gelinecek ( 100 ms'de çalıştığından ) , isCooldown hala true

setTimeout(() => f(4), 950); // görmezden gelinecek (1 sn den az beklediği için)

setTimeout(() => f(5), 1100); // çalışır

setTimeout(() => f(6), 1300); // görmezden gelinecek (her 1 sn de bir false yaptığı için ilk önüne geleni çalıştırdı diğerlerinin çalışması için 1 sn daha beklemesi gerekiyor çünkü her seferinde ilk önüne gelen 1 f i çalıştırıyor )

setTimeout(() => f(7), 1500); // görmezden gelinecek

setTimeout(() => f(8), 1700); // görmezden gelinecek

setTimeout(() => f(9), 2300); // çalışır

/* debounce çağrısı bir saklayıcı döner. İki durum söz konusudur:

isCooldown = false – çalışmaya hazır.
isCooldown = true – timeout’u bekliyor…
İlk çağırıldığında isCooldown false döner, bundan dolayı çalışır ve isCooldown true olur.

isCooldown true iken diğer çağrılar görmezden gelinir. setTimeout belirlenen vakit geçtikten sonra tekrar isCooldown'u false’a çevirir. */