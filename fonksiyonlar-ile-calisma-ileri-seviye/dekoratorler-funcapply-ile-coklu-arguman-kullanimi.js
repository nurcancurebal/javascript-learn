/* -> “func.apply” ile çoklu argüman kullanımı */

let worker = {

    slow(min, max) {

        return min + max; // CPU'ya çok yük bindiren bir işlem.
    }
};

// aynı argüman ile çağırılmalıdır.
worker.slow = cachingDecorator(worker.slow);

/* Birinci görev min ve max değerlerinin bu bellek haritasında anahtar olarak nasıl tutulacak?. Önceki konuda tek x argümanı için cache.set(x,result) şeklinde sonucu belleğe kaydetmiş ve sonra cache.get(x) şeklinde almıştık. Fakat şimdi sonucu argümanların birleşimi şeklinde hatırlamak gerekmektedir. Normalde Map anahtarı tek değer olarak almaktadır.

Bu sorunun çözümü için bazı çözümler şu şekildedir:

1. Map-benzeri bir yapı kurarak birkaç anahtarı kullanabilen bir veri yapısı oluşturmak.
2. İç içe map kullanarak; Örneğin cache.set(min) aslında (max, result)'ı tutmaktadır. Böylece result cache.get(min).get(max) şeklinde alınabilir.
3. İki değeri teke indirerek. Bizim durumumuzda bu "min,max" şeklinde bir karakter dizisini Map'in anahtarı yapmak olabilir. Ayrıca hashing fonksiyonu’u dekoratöre sağlayabiliriz. Bu fonksiyon da birçok değerden bir değer yapabilir.
Çoğu uygulama için 3. çözüm yeterlidir. Biz de bu çözüm ile devam edeceğiz.

İkinci görev ise fonksiyona birden fazla argümanın nasıl gönderileceğidir. Şu anda saklayıcı fonksiyona function(x) şeklinde tek argüman gönderilmektedir. Bu da func.call(this,x) şeklinde uygulanır.

Burada kullanılacak diğer metod func.apply’dır. */

func.apply(context, args)

/* Bu func'ı this=context ve args için dizi benzeri bir argüman dizisi ile çalıştırır.

Örneğin aşağıdaki iki çağrı tamamen aynıdır. */

func(1, 2, 3);
func.apply(context, [1, 2, 3])

// Her ikisi de func'ı 1,2,3 argümanları ile çalıştırır. Fakat apply ayrıca this=context'i ayarlar.

function say(time, phrase) {

    console.log(`[${time}] ${this.name}: ${phrase}`); // [10:00] john: Hello
}

let user = { name: "John" };

let messageData = ['10:00', 'Hello']; // time, phrase

// this = user olur , messageData liste olarak (time,phrase) şeklinde gönderilir.

say.apply(user, messageData); // [10:00] John: Hello (this=user)

/* call argüman listesi beklerken apply dizi benzeri bir obje ile onları alır.

Yayma operatörünün ne iş yaptığını işlemiştik. Dizilerin argüman listesi şeklinde gönderilebileceğinden bahsemiştik. Öyleyse call ile bunu kullanırsak neredeyse apply'ın işlevini görebiliriz.

Aşağıdaki iki çağrı birbirinin aynısıdır: */

let args = [1, 2, 3];

func.call(context, ...args); // dizileri yayma operatörü ile liste şeklinde gönderir.
func.apply(context, args);   // aynısını apply ile yapar.

/* İşleme daha yakından bakılacak olursa call ile apply arasında oldukça küçük bir fark vardır.

. Yayma operatörü ... list gibi döngülenebilir argümanları call edilmek üzere iletebilir.
. apply ise sadece dizi-benzeri args alır. */

/* Öyleyse bu çağrılar birbirinin tamamlayıcısıdır. Döngülenebilir beklediğimizde call, dizi-benzeri beklediğimizde ise apply çalışır.

Eğer args hem döngülenebilir bende dizi ise teknik olarak ikisini de kullanabiliriz, fakat apply muhtemelen daha hızlı olacaktır. Çünkü tek bir işlemden oluşur. Çoğu JavaScript motoru bir kaç call + spread kullanmaktan daha iyi şekilde optimizasyon yapar.

Apply’ın en çok çağrıyı diğer fonksiyona iletirken işe yarar: */

let wrapper = function () {

    return anotherFunction.apply(this, arguments);
};

/* Buna çağrı iletme denir. Saklayıcı sahip olduğu her şeyi iletir: this ile argümanları anotherFunction'a iletir ve sonucunu döner.

Böyle bir saklayıcı kod çağırıldığında içerideki orjinal fonksiyon çağıran tarafından ayrıştırılamaz.

Şimdi bunları daha güçlü cachingDecorator'da işleyelim: */

let worker2 = {

    slow(min, max) {

        console.log(`${min},${max} ile çağırıldı`); // 3,5 ile çağırıldı

        return min + max;
    }
};

function cachingDecorator(func, hash) {

    let cache = new Map();

    return function () {

        let key = hash(arguments); // (*) hash(arguments)= clg(worker2.slow(3,5))

        if (cache.has(key)) {

            return cache.get(key);
        }

        let result = func.apply(this, arguments); // (**) (this: {slow:f}= bunu func ın içinden aldı, func: slow(min,max)). Burayı okuduktan sonra slow fonksiyonunu yapmaya gidiyor

        cache.set(key, result); // key: '3,5', result: 8

        return result;
    };
}

function hash(args) {

    return args[0] + ',' + args[1]; // return: '3,5'
}

worker2.slow = cachingDecorator(worker2.slow, hash);

console.log(worker2.slow(3, 5)); // 8
console.log("Again " + worker2.slow(3, 5)); // Again 8

/* Şimdi saklayıcı(wrapper) birçok argüman ile çalışabilir.

İki tane değişiklik oldu:

. (*) satırında bir has ile argümanlardan tek bir anahtar meydana getirildi. Bunun için basit “birleştirme” fonksiyonu kullanılmıştır. (3,5) "3,5" şekline getirildi. Tabi başka hash fonksiyonları için daha karmaşık bir yapı gerekebilir.
. (**) satırında ise func.apply ile hem kaynak ( this ) hem de saklayıcı argümanları (ne kadar olduğu önemli değil) orjinal fonksiyona iletilmiştir. */