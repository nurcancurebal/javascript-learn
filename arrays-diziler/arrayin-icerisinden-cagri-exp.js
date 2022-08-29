let arr = ["a", "b"];

arr.push(function () {

    console.log(this);
})

arr[2](); // [ 'a', 'b', [Function (anonymous)] ]

/* Yazım olarak arr[2]() bilinen obje hali ile obj[method]() ile aynıdır. Buradaki obj yerine dizi ve method yerine ise 2 bulunur.

Bundan dolayı arr[2] this referansını alır ve bu referans arr'i gösterir.  */