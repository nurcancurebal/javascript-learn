let users = [
    {
        id: 1,
        name: 'Nurcan',
        age: 27,
        gender: 2
    },
    {
        id: 2,
        name: 'Erdinç',
        age: 27,
        gender: 1
    },
    {
        id: 3,
        name: 'Bal',
        age: 1,
        gender: 2
    },
    {
        id: 4,
        name: 'Kanada',
        age: 30,
        gender: 1
    }
];


const women = users.filter(user => user.gender === 2);

const userName = users.filter(user => user.name !== 'Kanada');

console.log(women);
/* [
    { id: 1, name: 'Nurcan', age: 27, gender: 2 },
    { id: 3, name: 'Bal', age: 1, gender: 2 }
] */

console.log(userName);
/* [
    { id: 1, name: 'Nurcan', age: 27, gender: 2 },
    { id: 2, name: 'Erdinç', age: 27, gender: 1 },
    { id: 3, name: 'Bal', age: 1, gender: 2 }
] */