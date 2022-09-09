/* -> ekoratörler ve iletilme, call/apply
JavaScript fonksiyonlar ile uğraşırken inanılmaz derecede esneklik sağlamaktadır. Fonksiyonlar başka fonksiyonlara gönderilebilir, obje olarak kullanılabilir. Şimdi ise bunların nasıl iletileceği ve nasıl dekore edileceğinden bahsedilecektir; */


/* -> Saydam Saklama
Diyelim ki slow(x) diye yoğun işlemci gücüne ihtiyaç duyan bir fonksiyonunuz olsun, buna rağmen sonucları beklediğiniz şekilde vermekte.

Eğer bu fonksiyon sık sık çağırılıyor ise farklı x’ler için sonucu saklamak bizi tekrar hesaplamadan kurtarabilir.

Fakat bunu slow() fonksiyonunun içine yazmak yerine yeni bir wrapper yazmak daha iyi olacaktır. Göreceğiniz üzere size oldukça fazla yardımı olacaktır. */

function slow(x) {
    // burada baya yoğun işlemci gücüne ihtiyaç duyan işler yapılmaktadır.
    console.log(`${x} ile çağırıldı`); // 1 ile çağırıldı, 2 ile çağırıldı

    return x;
}

function cachingDecorator(func) {

    let cache = new Map();

    return function (x) {

        if (cache.has(x)) { // eğer sonuç map içerisinde ise

            return cache.get(x); // değeri gönder
        }

        let result = func(x); // aksi halde hesap yap

        cache.set(x, result); // sonra sonucu sakla

        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1)); //1, slow(1) saklandı
console.log("Tekrar: " + slow(1)); // Tekrar: 1, aynısı döndü

console.log(slow(2)); // 2, slow(2) saklandı
console.log("Tekrar: " + slow(2)); //Tekrar: 2, bir önceki ile aynısı döndü.

/* Yuarkıdaki kodda cachingDecorator bir dekoratör’dür: Diğer bir fonksiyonu alan ve bunun davranışını değiştiren özel bir fonksiyon.

Aslında her bir fonksiyon için cachingDecorator çağrılabilir ve o da saklama mekanizmasını kullanır. Harika, bu şekilde ihtiyacı olacak birçok fonksiyonumuz olabilir. Tek yapmamız gereken bu fonksiyonlara cachingDecorator uygulamak.

Saklama olayını ana fonksiyonldan ayırarak aslında daha temiz bir yapıya da geçmiş olduk.

Detayına inmeye başlayabiliriz.

cachingDecorator(func) bir çeşit “wrapper(saklayıcı)”'dır. Bu işlem func(x) i “saklama” işine yarar. */


/* Gördüğünüz gibi, saklayıcı func(x)'ı olduğu gibi dönderir. Saklayıcının dışındaki slow olan fonksiyon hala aynı şekilde çalışır. Aslında davranışın üstüne sadece saklama(caching) mekanizması gelmiştir.

Özetlersek, ayrı bir cachingDecorator kullanmanın faydaları şu şekildedir:

. cachingDecorator tekrar kullanılabilir. Başka bir fonksiyona da uygulanabilir.
. Saklama(caching) mantığı ayrılmıştır böylece slow kodun içine daha fazla kod yazıp karışması önlenmiştir.
. İhtiyaç halinde birden fazla dekoratör birlikte kullanılabilir. */