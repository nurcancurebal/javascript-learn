// -> Zaman uyumsuz ve bekleme, vaatleri yerine getirmenin zarif bir yoludur. Anlaşılması kolay ve yazması temiz.

const square = async function (n) {

    return n * n
}

square(2)

// Promise {<resolved>: 4}

/* Bir işlevin önündeki async kelimesi , işlevin bir söz vereceği anlamına gelir. Yukarıdaki kare işlevi bir değer yerine bir söz verir.

Sözden gelen değere nasıl erişiriz? Söz verilen değere erişmek için, wait anahtar sözcüğünü kullanacağız . */

const squareTwo = async function (n) {

    return n * n
}

const value = await squareTwo(2)

console.log(value) // 4

/* Şimdi, yukarıdaki örnekte de görebileceğiniz gibi, bir fonksiyonun önüne async yazarak bir söz oluşturun ve bir sözden değer almak için bekliyoruz. Zaman uyumsuz ve bekliyor birlikte gider, biri olmadan diğeri olamaz.

API verilerini hem söz verme yöntemini hem de zaman uyumsuz ve bekleme yöntemini kullanarak getirelim. */

// . söz vermek

const url = 'https://restcountries.com/v2/all';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))


// . zaman uyumsuz ve bekliyor

const fetchData = async () => {

    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)

    } catch (err) {

        console.error(err)
    }
}

console.log('===== async and await');

fetchData();