// map: Bir dizi elemanlarını yineleyin ve dizi elemanlarını değiştirin. Öğeleri, indeksi, dizi parametresini
// içeren bir geri çağırma işlevi alır ve yeni bir dizi döndürür.(değişkenleri modifiyede edebiliyoruz kısacası)
// map = fonksiyonlarla çalışır

const numbers = [1, 3, 5, 7, 9];

const numbersTwo = numbers.map(number => number * 2);

console.log(numbersTwo); // (5) [2, 6, 10, 14, 18]


let users = [   // users değişeceği için let ile tanımladım
    {
        id: 1,
        name: 'Nurcan',
        age: 27
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

users = users.map(user => {

    if (user.id === 2) {

        user.name = 'Nurcan';
    };
    return user;
});

console.log(users);


const nameToUpperCase = users.map( names => names.name.toUpperCase());

console.log(nameToUpperCase);