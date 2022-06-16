//every: her bir elemanın bizim koşulumuzu karşılayıp karşılamadığını kontrol ediyor. Her biri karşılıyorsa "True" döndürür.
//every ile çalışma sistemi aynıdır yalnızca koşulumuz 1 kere bile sağlanıyor ise true döndürür.

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

console.log(users.some(function (ages) {

    return ages.age < 2;
}));    // true