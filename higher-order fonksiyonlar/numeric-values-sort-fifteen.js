// numaraları sıralamada kullanılır. Parametre olarak fonksiyon alır. a ve b iki parametresidir, eğer a-b yaparsanız
//  küçükten büyüğe, b-a yaparsanız büyükten küçüğe sıralar.

const numbers = [9.81, 3.14, 100, 37];

const numberSort = numbers.sort(function (a, b) {

    return a - b;
});

console.log(numberSort);


const numberSortTwo = numbers.sort(function (a, b) {

    return b - a;
});

console.log(numberSortTwo);