/* -> Kaynak için “func.call” kullanmak.
Saklama dekoratörü obje metodları ile çalışmak için müsait değildir.

Örneğin aşağıdaki kodda user.format() dekorasyondan sonra çalışmayı durdurur: */

//  worker1.slow sakla yapılacaktır.
let worker1 = {

    someMethod() {

        return 3;
    },

    slow(x) {

        console.log("Called with " + x); // Called with 1, Called with 2

        return x * this.someMethod(); // (*) ilkinde sonuç 3 yani slow(x) in sonucu 3,
    }
};

// eskisiyle aynı kod
function cachingDecorator(func) { // func slow(x) ten alır değerini

    let cache = new Map();

    return function (x) {

        if (cache.has(x)) { // cache içinde x varsa true döner

            return cache.get(x); // x i getir
        }

        let result = func(x); // (**), buradaki func: f slow(x){}

        cache.set(x, result); // cache in içine ekle, key value şeklinde, '1' => '3' şeklinde ekleyecek

        return result;
    };
}

console.log(worker1.slow(1)); // 3,  orjinal metod çalışmakta

worker1.slow = cachingDecorator(worker1.slow); // şimdi saklamaya alındı.(cachingDecorator paremetresi olarak worker1 in içindeki slow fonksyonunun çıktısını gönderiyoruz sonucu worker1 in içindeki slow fonksiyonuna atıyoruz)

console.log(worker1.slow(2)); // 6, Whoops! Error: Özellik okunamamaktadır. `someMethod` tanımsız.

/* (*) satırında hata olur this.someMethod'a erişmeye çalışır fakat başırılı olamaz.

Sebebi (**) satırında orjinal func(x) çağırılmıştır. Bu şekilde çağırıldığında, fonksiyon this = undefined alır.
Aşağıdaki kod çalıştırılırsa da aynısı görülebilir: */

let func = worker1.slow;
func(2);

/* Saklayıcı çağrıyı gerçek çalışacak metoda gönderir. Fakat this olmadığından dolayı hata alır.

Bunu düzeltmek için.

Özel bir metod bulunmaktadır func.call(context, …args) this'i belirterek doğrudan fonksiyonu çağırmaya yarar.

Yazımı aşağıdaki gibidir: */

func.call(context, arg1, arg2/*, ...*/)

/* İlk argüman this'dir diğerleri ise fonksiyon için gerekli argümanlardır.

Kullanımı şu şekildedir: */

func(1, 2, 3);
func.call(obj, 1, 2, 3)

/* Her ikisi de aslında func fonksiyonlarını 1, 2, 3 argümanları ile çağırır tek fark func.call fonksiyonunda this de gönderilir.

Örneğin, aşağıdaki kod sayHi metodunu iki farklı objeye değer atayarak çağırır. Birinci satırda this=user1 ikinci satırda ise this=admin değeri atanarak bu çağrı gerçekleştirilir. */

function sayHi() {

    console.log(this.name);
}

let user1 = { name: "John" };
let admin = { name: "Admin" };

// farklı objeler "this" objesi olarak gönderilebilir.
sayHi.call(user1); // John
sayHi.call(admin); // Admin


function say(phrase) {

    console.log(this.name + ': ' + phrase); // John: Hello
}

let user = { name: "John" };

// user `this` olmakta ve `phrase` ilk argüman olmaktadır.
say.call(user, "Hello");

// Bizim durumumuzda saklayıcı içinde call kullanarak içeriği orijinal fonksiyona aktarabiliriz:

let worker = {

    someMethod() {

        return 1;
    },

    slow(x) {

        console.log(x + " ile çağırıldı"); // 2 ile çağırıldı

        return x * this.someMethod(); // (*)
    }
};

function cachingDecorator(func) {

    let cache = new Map();

    return function (x) {

        if (cache.has(x)) {

            return cache.get(x);
        }

        let result = func.call(this, x);

        cache.set(x, result);

        return result;
    };
}

worker.slow = cachingDecorator(worker.slow); // şimdi önbelleğe alma

console.log(worker.slow(2)); // 2, çalışır
console.log(worker.slow(2)); // 2, orjinali değilde hafızadaki çalışır.

/* Şimdi her şey beklendiği gibi çalışıyor.

Daha açıklayıcı olması için this'in nasıl ilerlediğini inceleyebiliriz:

1. Dekorasyon işleminden sonra worker.slow artık function(x){ ...} halini almıştır.
2. Öyleyse worker.slow(2) çalıştırıldığında saklayıcı 2 ve this=worker ( noktadan önceki obje ) argümanlarını alır.
3. Saklayıcı(wrapper) içinde sonucun henüz belleğe alınmadığını varsayarsak func.call(this,x) o anki this (=worker) ve (’=2`) değerini orjinal metoda gönderir. */