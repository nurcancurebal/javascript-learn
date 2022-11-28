/* -> Jeneratörler yinelenebilir
next() Muhtemelen yönteme bakarak tahmin ettiğiniz gibi , üreteçler yinelenebilirdir .

Döngü üzerinden değerleri şu şekilde alabiliriz for..of: */

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator1 = generateSequence();

for (let value of generator1) {

    console.log(value); // 1, 2, 3
}

/* Jeneratörlerle çalışmak için aramaktan çok daha iyi görünen bir yol bu .next().value, değil mi?

…Ama lütfen unutmayın: yukarıdaki örnek 1, sonra 2, gösterir ve hepsi bu kadar. göstermiyor 3!

Bunun nedeni, for-of yinelemenin sonuncuyu value, ne zaman done: true yok saymasıdır. Bu nedenle, tüm sonuçların for..of tarafından gösterilmesini istiyorsak, bunları şu şekilde yield döndürmeliyiz: */

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator2 = generateSequence();

for (let value of generator2) {

    console.log(value); // 1, 2, 3
}

// Doğal olarak, üreteçler yinelenebilir olduğundan, ilgili tüm fonksiyonları çağırabiliriz, örneğin yayılma operatörü ...:

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let sequence = [0, ...generateSequence()];

console.log(sequence); // [ 0, 1, 2, 3 ]

/* Yukarıdaki kodda ...generateSequence(), yinelenebilir öğeler dizisine dönüşür*/