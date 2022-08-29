// Normalde, dizide bulunan elemanları kopyalar. Diğer objeler dizi olsalar bile bir bütün olarak eklenirler.

let arr = [1, 2];

let arrayLike = {
    0: "something",
    length: 1
};

console.log(arr.concat(arrayLike)); // [ 1, 2, { '0': 'something', length: 1 } ]
//[1, 2, arrayLike]

// …Fakat dizi benzeri obje Symbol.isConcatSpreadable özelliğine sahipse, bunların elemanları eklenir:

let arr2 = [1, 2];

let arrayLike2 = {
    0: "başka",
    1: "bir şey",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr2.concat(arrayLike2)); // [ 1, 2, 'başka', 'bir şey' ]