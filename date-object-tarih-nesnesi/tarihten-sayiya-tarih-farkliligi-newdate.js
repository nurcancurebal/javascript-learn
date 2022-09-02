/* Tarihten sayıya, tarih farklılığı
Date objesi sayıya çevrildiğinde, aynı timestamp’te olduğu gibi date.getTime() değerini alır: */

let date = new Date();

console.log(+date); // 1662110366188, date.getTime() ile aynı şekilde milisaniye döner.

/* Önemli not: tarihler birbirinden çıkarılabilir fakat sonuç ms cinsinden olur.

Bu iki tarih arasındaki zamanı ölçmek için kullanılabilir: */

let start = new Date(); // saymaya başla!

// işi yap
for (let i = 0; i < 100000; i++) {

  let doSomething = i * i * i;
}

let end = new Date(); // bitt

console.log(`Döngü ${end - start} ms`); // Döngü 3 ms