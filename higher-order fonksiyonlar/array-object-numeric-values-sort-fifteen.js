// numaraları sıralamada kullanılır. Parametre olarak fonksiyon alır. a ve b iki parametresidir, eğer a-b yaparsanız
//  küçükten büyüğe, b-a yaparsanız büyükten küçüğe sıralar. Objelerde de arraylerde de kullanılır.

const numbers = [9.81, 3.14, 100, 37];

let users = [
    {
        id: 2,
        name: 'Nurcan',
        age: 27,
        gender: 2
    },
    {
        id: 4,
        name: 'Erdinç',
        age: 27,
        gender: 1
    },
    {
        id: 1,
        name: 'Bal',
        age: 1,
        gender: 2
    },
    {
        id: 3,
        name: 'Kanada',
        age: 30,
        gender: 1
    }];


const numberSort = numbers.sort(function (a, b) {

    return a - b;
});

console.log(numberSort);


const numberSortTwo = numbers.sort(function (a, b) {

    return b - a;
});

console.log(numberSortTwo);




function sortId(a, b) {

    return a.id - b.id;
};

console.log(users.sort(sortId));


const idSort = users.sort(function (a, b) {

    return b.id - a.id;
});

console.log(idSort);