/* -> Arama algoritması

Görev iki bölümden oluşmaktadır.

Bir objemiz var: */

let head1 = {

    glasses: 1
};

let table1 = {

    pen: 3
};

let bed1 = {

    sheet: 1,
    pillow: 2
};

let pockets1 = {

    money: 2000
};

/* __proto__ kullanarak prototipleri özellikleri pockets->bed->table->head gibi bir yolu takip edecek şekilde prototipleri atayınız. Örneğin pockets.pen 3 ( table'da bulunan ) olmalı, bed.glasses ise 1 ( head'de bulunmalı)
Sizce glasses değerini pocket.glasses ile mi yoksa head.glasses ile mi almak daha hızlıdır? */


// __proto__'yu ekleyelim:

let head = {

    glasses: 1
};

let table = {

    pen: 3,
    __proto__: head
};

let bed = {

    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {

    money: 2000,
    __proto__: bed
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined

/* Modern JavaScript motorlarında, bir özelliği objeden veya prototypetan almasının bir farklılığı yoktur. Özelliğin nerede olduğunu hatırlar ve bunu bir sonraki talepte tekrar kullanabilirler.

Örneğin, pockets.glasses glasses'ı nerede bulduğunu hatırlar. Bu durumda glasses head'de bulundu, bir sonraki sefere doğrudan orada arayacaktır. Ayrıca kodda herhangi bir değişiklik olduğunda kendi önbelleğini siler böylece optimizasyon güvenli olur. */