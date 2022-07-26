// değişkenlerin kapsamları(scopeları) şunlar olabilir
// 1. Global
// 2. Local
// let, const ya da var ile değişken tanımlanmamışsa " Window Global Object " olarak geçer.

//! WİNDOW GLOBAL OBJECT = değişkeni let, const, var ile tanımlamadanda görebiliriz. Bu değişkenler window global object olur

name = 'nurcan';

console.log(name);


// Console.log()'u kullanmadan tarayıcınızı açın ve kontrol edin, tarayıcıya a veya b yazarsanız a ve b'nin değerini göreceksiniz. Bu,
// a ve b'nin pencerede zaten mevcut olduğu anlamına gelir.

// let veya const olmadan bir değişken bildirmek, onu pencere nesnesinde kullanılabilir hale getirir ve bu her yerde bulunur. Bu global
// bir kapsam(global scope) değişkenidir ve pencere nesnesinde(window object) bulunur.