// her bir elemanın bizim koşulumuzu karşılayıp karşılamadığını kontrol ediyor. Her biri karşılıyorsa "True" döndürür.

const users = [
    {
        id: 1,
        name: 'Nurcan',
        age: 27,
    },
    {
        id: 2,
        name: 'Erdinç',
        age: 27
    },
    {
        id: 3,
        name: 'Bal',
        age: 1
    }];

console.log(users.every(function (ages) {

    return ages.age > 0;
}));

console.log(users.every(function (names) {

    return names.name === "Nurcan";
}));