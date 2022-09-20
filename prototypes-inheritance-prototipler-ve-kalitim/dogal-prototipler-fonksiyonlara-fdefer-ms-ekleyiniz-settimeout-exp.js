/* -> Fonksiyonlara "f.defer(ms)" ekleyiniz

Tüm fonksiyonların prototipine “defer(ms)” metodunu ekleyin, bu metod istenilen fonksiyonu belirtilen milisaniye sonunda çalıştırmalıdır.

Bunu yaptıktan sonra kod aşağıdaki gibi görünmelidir: */

function f() {

    console.log("Hello!");
}

f.defer(1000); // 1 sn sonrasında "Hello!" yazar.

// çözüm

Function.prototype.defer = function (ms) {

    setTimeout(this, ms);
};

function f2() {

    console.log("Hello!"); // Hello!
}

f2.defer(1000); // 1 sn sonra "Hello" gösterilir.