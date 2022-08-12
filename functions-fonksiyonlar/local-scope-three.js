// belli bir kapsam çerçevesinde erişebildiğimiz değişkenler, kapsamın dışında değişkene erişemeyiz kapsam= süslü
// parantezin içi

// Yerel olarak bildirilen bir değişkene yalnızca belirli blok kodunda erişilebilir.
// 1. Block Scope(if blok, döngü bloğu, vb.(obje dışında tüm süslü parantezler))
// 2. Function Scope


let a = 'JavaScript'; // küresel bir kapsamdır, bu dosyanın herhangi bir yerinde bulunur(global scope)
let b = 10; // küresel bir kapsamdır, bu dosyanın herhangi bir yerinde bulunacaktır(global scope)

// Function scope

function letsLearnScopeOne() {

    console.log(a, b); // ekran çıktısı: JavaScript 10

    let value = false; // TODO fonksiyondan ve fonksiyonun dışından erişebiliriz

    // block scope

    if (true) {

        let a = 'Python'; // if içinde bildirilen değişkenlere if bloğu dışında erişilmez
        let b = 20;
        let c = 30;
        value = !value;
        console.log(a, b, c, value); // ekran çıktısı: Python 20 30 true
    }
    // c'ye erişemiyoruz çünkü c'nin kapsamı yalnızca if bloğu
    console.log(a, b, value); // ekran çıktısı: JavaScript 10 true
}

letsLearnScopeOne();
console.log(a, b); // ekran çıktısı: JavaScript 10


//! DEĞİŞKEN OLAN VAR

// Artık, kapsam hakkında bir anlayışa sahipsiniz. var ile bildirilen bir değişken yalnızca function kapsamına alınır, ancak
// let veya const ile bildirilen değişken blok kapsamıdır (function bloğu, if blok, döngü bloğu, vb.). JavaScript'te blok,
// iki küme parantezinin ({}) arasındaki bir koddur.

function letsLearnScopeTwo() {

    var gravityOne = 9.81;
    console.log(gravityOne); //* ekran çıktısı vermedi
}
// console.log(gravityOne), Uncaught ReferenceError: gravity is not defined

if (true) {

    var gravityTwo = 9.81;
    console.log(gravityTwo); // ekran çıktısı: 9.81
}

console.log(gravityTwo);  // ekran çıktısı: 9.81

for (var i = 0; i < 3; i++) {

    console.log(i); // ekran çıktısı: 0, 1, 2
}

console.log(i); // ekran çıktısı: 3 (en son i değeri 3 te son bulduğu için i' ye 3 atar)

// ES6 ve üzeri sürümlerde let ve const vardır, böylece var'ın sinsiliğinden muzdarip olmazsınız. Let değişkenimiz blok
// kapsamına alındığında, kodumuzun diğer bölümlerine bulaşmayacaktır.


function letsLearnScopeThree() {

    // let veya const kullanabilirsiniz, ancak yerçekimi sabittir const kullanmayı tercih ederim
    const gravityThree = 9.81;
    console.log(gravityThree); //* ekran çıktısı vermedi
}
// console.log(gravityThree), Uncaught ReferenceError: gravity is not defined

if (true) {

    const gravityFour = 9.81;
    console.log(gravityFour); // ekran çıktısı: 9.81
}
// console.log(gravityFour), Uncaught ReferenceError: gravity is not defined

for (let index = 0; index < 3; index++) {

    console.log(index); // ekran çıktısı: 0, 1, 2
}
// console.log(index), Uncaught ReferenceError: i is not defined


// Kapsam let ve const aynıdır. Aradaki fark sadece yeniden atamadır. const değişkenin değerini değiştiremez veya yeniden
// atayamayız. Let ve const kullanmanızı şiddetle tavsiye ederim, let ve const kullanarak temiz kod yazacak ve hata
// ayıklaması zor hatalardan kaçınacaksınız. Genel bir kural olarak, değişen herhangi bir değer için let, herhangi bir
// sabit değer için const ve bir array, obje, arrow function ve function ifadesi için kullanabilirsiniz.