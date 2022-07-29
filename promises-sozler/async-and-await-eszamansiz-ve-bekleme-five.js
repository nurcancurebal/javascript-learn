// Async ve wait, vaatleri yerine getirmenin zarif bir yoludur. Anlaşılması kolay ve yazması temiz.

const square = async function (n) {

    return n * n;
};

console.log(square(2)); // Promise { 4 }

// Bir fonksiyonun önündeki zaman uyumsuz kelimesi, fonksiyonun bir söz vereceği anlamına gelir. Yukarıdaki kare fonksiyonu
// bir değer yerine bir söz verir.

// Sözün değerine nasıl erişiriz? Söz verilen değere erişmek için, wait anahtar sözcüğünü kullanacağız.

const squareTwo = async function (n) {

    return n * n;
};

const value = await squareTwo(2);

console.log(value);

