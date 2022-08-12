// değişkenlerin kapsamları(scopeları) şunlar olabilir
// 1. Global scope
// 2. Local scope
// let, const ya da var ile değişken tanımlanmamışsa " Window Global Object " olarak geçer.

//! WİNDOW GLOBAL OBJECT = değişkeni let, const, var ile tanımlamadanda görebiliriz. Bu değişkenler window global object olur

a = 'JavaScript'; // let veya const olmadan bir değişken bildirmek, onu pencere nesnesinde kullanılabilir hale getirmek ve
// bu herhangi bir yerde bulunur

b = 10; // bu global bir kapsam değişkenidir ve pencere nesnesinde bulunur

function letsLearnScope() {

    console.log(a, b);

    if (true) {

        console.log(a, b);
    }
}

console.log(a, b); // erişilebilir

// Console.log()'u kullanmadan tarayıcınızı açın ve kontrol edin, tarayıcıya a veya b yazarsanız a ve b'nin değerini
// göreceksiniz. Bu, a ve b'nin pencerede zaten mevcut olduğu anlamına gelir.