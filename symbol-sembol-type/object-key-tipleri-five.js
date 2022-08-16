/* Diğer tipler karakter dizisine çevrilir
Obje içinde anahtarlar sadece karakter dizisi veya sembol olabilirler. Diğer tipler doğrudan karakter dizisine çevrililer.
Örneğin 0 değeri obje içerisinde anahtar olarak "0" karakter olan sıfıra dönüşmektedir. */

let obj = {
    0: "test" // bu aynı "0": "test"
};

// `console.log`'da aynı şekilde verilen özelliği karaktere çevirip kullanır.
console.log(obj["0"]); // test
console.log(obj[0]); // test (aynı özellik)