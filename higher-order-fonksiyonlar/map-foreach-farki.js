// 1. forEach return dönmez
// 2. forEach: döngüye sokmak için kullanılır, map: değerleri değiştirmek için

const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element, index, arr) {

    console.log(element, index, arr);
});

// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]  bu şekilde çıktı alabiliyorken


const arrTwo = [1, 2, 3, 4, 5];

const newArr = arrTwo.map(function (element, index, arr) {

    return `${element}, ${index}, ${arr}`;
});

console.log(newArr);

// [
//    '1, 0, 1,2,3,4,5',
//    '2, 1, 1,2,3,4,5',
//    '3, 2, 1,2,3,4,5',
//    '4, 3, 1,2,3,4,5',
//    '5, 4, 1,2,3,4,5'
// ]  //!  map tek bir çıktı verir