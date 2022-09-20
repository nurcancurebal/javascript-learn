/* -> Fonksiyonlara Düzenleyici (Decorator) ekleyiniz.

Tüm fonksiyonların prototiplerini defer(ms) metodunu ekleyiniz. Bu metod çağrılan fonksiyonu ms kadar geciktiren bir kapsayıcıdır.

Şu şekilde çalışmalıdır: */

function f1(a, b) {

    console.log(a + b);
}

f1.defer(1000)(1, 2); // 1 sn sonra 3 görünür.

// Argümanların orjinal fonksiyona iletilmesi gerektiğini unutmayın.

// çözüm

Function.prototype.defer = function (ms) {

    let objThis = this; // objThis: f(a, b){   ve  this: console.log(a + b)

    return function (...args) {

        setTimeout(() => objThis.apply(this, args), ms);
    }
};

// kontrol et
function f(a, b) {

    console.log(a + b); // 3
}

f.defer(1000)(1, 2); // 1 sn sonra 3 görünür