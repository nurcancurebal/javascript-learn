// Async ve wait, vaatleri yerine getirmenin zarif bir yoludur. Anlaşılması kolay ve yazması temiz.

const square = async function (n) {

    return n * n;
};

console.log(square(2)); // Promise { 4 }

// Bir fonksiyonun önündeki zaman uyumsuz kelimesi, fonksiyonun bir söz vereceği anlamına gelir. Yukarıdaki kare fonksiyonu
// bir değer yerine bir söz verir.

// Sözün değerine nasıl erişiriz? Söz verilen değere erişmek için, await anahtar sözcüğünü kullanacağız.

const squareTwo = async function (n) {

    return n * n;
};

const value = await squareTwo(2);

console.log(value);   // 4

// Şimdi yukarıdaki örnekte de göreceğiniz gibi bir fonksiyonun önüne async yazarak bir söz oluşturup bir sözden değer
// almak için bekliyoruz. Zaman uyumsuz ve bekliyor birlikte gider, biri olmadan diğeri olamaz.


// API verilerini hem söz verme yöntemini hem de eşzamansız(zaman uyumsuz) ve bekleme yöntemini kullanarak alalım.

// promise

const url = 'https://restcountries.com/v2/all';

fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data);
    })
    .catch(error => console.error(error));

// async and await

const fetchData = async () => {

    try {

        const response = await fetch(url);
        const countries = await response.json();

        console.log(countries);

    } catch (err) {

        console.error(err);
    };
};

console.log('===== async and await');

fetchData();