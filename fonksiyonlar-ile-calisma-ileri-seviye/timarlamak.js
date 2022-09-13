/* -> Tımarlamak
Bazen programcılar kısmı fonksiyonlar ile tımarlama olayını karıştırmaktadırlar. Tımarlama fonksiyonlar ile yapılabilecek ilginç bir tekniktir. Burada bahsetmekte fayda var.

Tımarlama f(a, b, c) olarak çağırılan bir fonksiyonu f(a)(b)(c) şeklinde çağırılabilmesini sağlayan bir tekniktir.

Binary fonksiyonunu tımarlamala işlemi aşağıdaki gibi yapılır. Bu fonksiyon f(a, b)'yı f(a)(b) şekline getirir: */

function curry(func) {

    return function (a) {

        return function (b) {

            return func(a, b); // func içinde sum fonksiyonu olduğu için buraya geldiğinde sum fonksiyonunun içine girer ve toplamayı gerçekleştirir. tekrar buraya döner
        };
    };
}

function sum(a, b) {

    return a + b; // buraya geliyor ve toplamayı gerçekleştiriyor
}

let carriedSum = curry(sum);

console.log(carriedSum(1)(2)); // 3

/* Gördüğünüz gibi aslında birçok saklayıcının ard arda uygulanmasından meydana gelmektedir.

. curry(func)'ın sonucu function(a)'nın saklanmasıdır.
. sum(1) gibi bir çağrı yapıldığında arüman sözcük ortamına kaydedilir, ve yeni bir saklayıcı function(b) döndürülür.
. Sonrasında sum(1)(2) en sonunda function(b)'i 2 değeri ile çağırır, çağrıyı argümanların hepsi ile sum fonksiyonuna iletir.

Tımarlamanın daha gelişmiş bir versiyonu _.curry lodash kütüpyanesinde uygulanmıştır. Bu fonksiyonlar tüm argümanlar sağlandığında bir fonksiyonun normal olarak çalışmasını sağlayan saklayıcı fonksiyonu döndürür. Eğer tüm argümanlar sağlanmaz ise kısmı fonksiyon döndürür. */

function curry(f) {

    return function (...args) {
        // if args.length == f.length (f'in sahip olduğu kadar argüman var ise),
        // çağrıyı f'e ilet.
        // diğer türlü args'ı ilk argüman olarak sabitleyen kısmı fonksiyon döndürülür.
    };
}