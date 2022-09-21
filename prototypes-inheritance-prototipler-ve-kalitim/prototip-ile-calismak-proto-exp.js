/* -> Prototip ile çalışmak

Aşağıda birkaç obje üreten ve bunlar üzerinde değişiklikler yapan kod bulunmaktadır.

Bu işlem süresince hangi değerler gösterilir? */

let animal = {

    jumps: null
};

let rabbit = {

    __proto__: animal,

    jumps: true
};

console.log(rabbit.jumps); // ? (1)

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2)

delete animal.jumps;

console.log(rabbit.jumps); // ? (3)

/*
(1) rabbit'ten true alınır.
(2) animal'den null alınır.
(3)Böyle bir özerllik olmadığından undefined alınır. */