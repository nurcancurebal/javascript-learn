/* Geciktirici dekoratör.

delay(f,ms) adında bir dekoratör yazın ve bu dekoratör her f in çağırılmasında ms milisaniye kadar geciktirilsin. */

function f(x) {

    console.log(x);
}

// Saklayıcı
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // "test" yazısı 1000ms sonra gelir.
f1500("test"); // "test" yazısı 1500ms sonra gelir.

/* Diğer bir deyişle delay(f, ms) f fonksiyonunun ms kadar geciktirilmiş versiyonunu döner.

Yukarıdaki kodda, f tek argümanlı bir fonksiyondur. Fakat sizin çözümünüzde bu tüm argümanların ve kaynağın this şeklinde fonksiyona iletilmesi gerekmektedir. */

function delay(f, ms) {

    return function () {

        setTimeout(() => f.apply(this, arguments), ms);
    };
}

/* Yukarıda ok fonksiyonunun nasıl kullanıldığına dikkat edin. Bildiğiniz gibi, ok fonksiyonlarında this ve arguments bulunmaz, bunun için f.apply(this, arguments) , this ve arguments'ı saklayıcıdan(wrapper) alır.

Eğer sıradan bir fonksiyon paslarsanız, setTimeout bunu argümansız this=window ( tarayıcıda ) olacak şekilde çağırır, bundan dolayı saklayıcıdan bu değerleri iletebilmek için biraz daha kod yazmalıyız: */

function delay(f, ms) {

    // `this` ve diğer argümanların setTimeout içerisindeki saklayıcıdan iletilmesini sağlar.
    return function (...args) {

        let savedThis = this;

        setTimeout(function () {

            f.apply(savedThis, args);

        }, ms);
    };
} // TODO çalış