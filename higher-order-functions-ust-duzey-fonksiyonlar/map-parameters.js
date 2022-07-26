// 3 parametre alabilir: bir elemanları, iki index değeri, üç arrayin kendisi

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function (element, index, arr) {

    return `${element}, ${index}, ${arr}`;
});

console.log(newArr);

// [
//    '1, 0, 1,2,3,4,5',
//    '2, 1, 1,2,3,4,5',
//    '3, 2, 1,2,3,4,5',
//    '4, 3, 1,2,3,4,5',
//    '5, 4, 1,2,3,4,5'
// ]