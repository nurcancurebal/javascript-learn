// belli bir kapsam çerçevesinde erişebildiğimiz değişkenler, kapsamın dışında değişkene erişemeyiz kapsam= süslü
// parantezin içi

// Yerel olarak bildirilen bir değişkene yalnızca belirli blok kodunda erişilebilir.
// 1. Block Scope(if, for...)
// 2. Function Scope


let a = 'JavaScript'; // küresel bir kapsamdır, bu dosyanın herhangi bir yerinde bulunur
let b = 10; // küresel bir kapsamdır, bu dosyanın herhangi bir yerinde bulunacaktır

// Function scope

function letsLearnScope() {

    console.log(a, b); // JavaScript 10, erişilebilir

    let value = false;

    // block scope

    if (true) {
        // fonksiyondan ve fonksiyonun dışından erişebiliriz ama 
        // if içinde bildirilen değişkenlere if bloğu dışında erişilmez

        let a = 'Python';
        let b = 20;
        let c = 30;
        let d = 40;
        value = !value;
        console.log(a, b, c, value); // Python 20 30 true
    }
    // c'ye erişemiyoruz çünkü c'nin kapsamı yalnızca if bloğu
    console.log(a, b, value); // JavaScript 10 true
}

letsLearnScope();
console.log(a, b); // JavaScript 10, erişilebilir


// Artık, kapsam hakkında bir anlayışa sahipsiniz. var ile bildirilen bir değişken yalnızca işlev kapsamına alınır, ancak
// let veya const ile bildirilen değişken blok kapsamıdır (işlev bloğu, if blok, döngü bloğu, vb.). JavaScript'te blok, iki
// küme parantezinin ({}) arasındaki bir koddur.

function letsLearnScope() {

    var gravity = 9.81;
    console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {

    var gravity = 9.81;
    console.log(gravity); // 9.81
}

console.log(gravity);  // 9.81

for (var i = 0; i < 3; i++) {

    console.log(i); // 0, 1, 2
}

console.log(i); // 3


// ES6 ve üzeri sürümlerde let ve const vardır, böylece var'ın sinsiliğinden muzdarip olmazsınız. Let değişkenimiz blok
// kapsamına alındığında, kodumuzun diğer bölümlerine bulaşmayacaktır.


function letsLearnScope() {

    // let veya const kullanabilirsiniz, ancak yerçekimi sabittir const kullanmayı tercih ederim
    const gravity = 9.81;
    console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {

    const gravity = 9.81;
    console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {

    console.log(i); // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined


// Kapsam let ve const aynıdır. Aradaki fark sadece yeniden atamadır. const değişkenin değerini değiştiremez veya yeniden
// atayamayız. Let ve const kullanmanızı şiddetle tavsiye ederim, let ve const kullanarak temiz kod yazacak ve hata
// ayıklaması zor hatalardan kaçınacaksınız. Genel bir kural olarak, değişen herhangi bir değer için let, herhangi bir
// sabit değer için const ve bir dizi, nesne, ok işlevi ve işlev ifadesi için kullanabilirsiniz.