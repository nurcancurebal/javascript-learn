/* -> İçerik olmadan kısmi fonksiyon kullanımı
Diyelim ki bazı argümanları düzeltmek istiyorsunuz fakat this ile bağlamak istemiyorsunuz?

Bildiğiniz gibi bind buna izin vermez. Doğrudan kaynağı atlayıp argümanları yazamazsınız.

Neyseki sadece argümanları bağlayabilen bir kısmi fonksiyon çok kolay bir şekilde yazılabilir. */

function partial(func, ...argsBound) {

    return function (...args) { // (*)

        return func.call(this, ...argsBound, ...args);
    }
}

// kullanımı:
let user = {

    firstName: "John",

    say(time, phrase) {

        console.log(`[${time}] ${this.firstName}: ${phrase}!`); // [0:31] John: Hello!
    }
};

// herhangi bir şey söyleyen kısmi bir metod ile ilk argümanı düzeltebilirsiniz.
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello"); // kaynak bulunmamakta
// Aşağıdaki gibi:
// [10:00] Hello, John!

/* partial(func[, arg1, arg2...]) saklayıcıyı çağırıyor ve (*) fonksiyonu func'ı aşağıdaki bilgiler ile çağırıyor.

. this burada ( user.sayNow , user'ı çağırır)
. Sonra ...argsBound – kısmi fonksiyondan gelen değer ("10:00")
. Sonra ...args – saklayıcıya gönderilen argüman ("Hello")

Yayma operatörü ile oldukça kolay değil mi? */