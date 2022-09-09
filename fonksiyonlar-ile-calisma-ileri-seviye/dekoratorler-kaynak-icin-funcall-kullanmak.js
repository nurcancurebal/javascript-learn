/* -> Kaynak için “func.all” kullanmak.
Yukarıda bahsettiğimiz saklama dekoratörü obje metodları ile çalışmak için müsait değildir.

Örneğin aşağıdaki kodda user.format() dekorasyondan sonra çalışmayı durdurur: */

//  worker1.slow sakla yapılacaktır.
let worker1 = {

    someMethod() {

        return 1;
    },

    slow(x) {

        console.log("Called with " + x); // Called with 1, Called with 2

        return x * this.someMethod(); // (*)
    }
};

// eskisiyle aynı kod
function cachingDecorator(func) {

    let cache = new Map();

    return function (x) {

        if (cache.has(x)) {

            return cache.get(x);
        }

        let result = func(x); // (**)

        cache.set(x, result);

        return result;
    };
}

console.log(worker1.slow(1)); // 1,  orjinal metod çalışmakta

worker1.slow = cachingDecorator(worker1.slow); // şimdi saklamaya alındı. // TODO burada nasıl bir işlem var

console.log(worker1.slow(2)); // 2, Whoops! Error: Özellik okunamamaktadır. `someMethod` tanımsız.

/* (*) satırında hata olur this.someMethod'a erişmeye çalışır fakat başırılı olamaz.

Sebebi (**) satırında orjinal func(x) çağırılmıştır. Bu şekilde çağırıldığında, fonksiyon this = undefined alır. // TODO anlamadım

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

/* Her ikisi de aslında func fonksiyonlarını 1, 2, 3 argümanları ile çağırır tek fark func.call fonksiyonunda thisde gönderilir.

Örneğin, aşağıdaki kod sayHi metodunu iki farklı objeye değer atayarak çağırır. Birinci satırda this=user ikinci satırda ise this=admin değeri atanarak bu çağrı gerçekleştirilir. */

function sayHi() {

    console.log(this.name);
}

let user1 = { name: "John" };
let admin = { name: "Admin" };

// farklı objeler "this" objesi olarak gönderilebilir.
sayHi.call(user1); // John
sayHi.call(admin); // Admin

// Burada say metodunu çağırarak ne söyleneceğini gönderiyoruz:

function say(phrase) {

    console.log(this.name + ': ' + phrase);
}

let user = { name: "John" };

// user `this` olmakta ve `phrase` ilk argüman olmaktadır.
say.call(user, "Hello"); // John: Hello

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

        let result = func.call(this, x); // "this" is passed correctly now

        cache.set(x, result);

        return result;
    };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log(worker.slow(2)); // 2, çalışır
console.log(worker.slow(2)); // 2, orjinali değilde hafızadaki çalışır.

/* Şimdi her şey beklendiği gibi çalışıyor.

Daha açıklayıcı olması için this'in nasıl ilerlediğini inceleyebiliriz:

1. Dekorasyon işleminden sonra worker.slow artık function(x){ ...} halini almıştır.
2. Öyleyse worker.slow(2) çalıştırıldığında saklayıcı 2 ve this=worker ( noktadan önceki obje ) argümanlarını alır.
3. Saklayıcı(wrapper) içinde sonucun henüz belleğe alınmadığını varsayarsak func.call(this,x) o anki this (=worker) ve (’=2`) değerini orjinal metoda gönderir. */

// TODO bu sayfayı çalış