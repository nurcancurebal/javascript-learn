/* -> Jeneratörler yinelenebilir
next()Muhtemelen yönteme bakarak tahmin ettiğiniz gibi , üreteçler yinelenebilirdir .

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

…Ama lütfen dikkat edin: yukarıdaki örnekte 1, o zaman 2, ve hepsi bu kadar. Göstermiyor 3!

Bunun nedeni, for-of yinelemenin son value, When öğesini yok saymasıdır done: true. Bu nedenle, tüm sonuçların tarafından gösterilmesini istiyorsak for..of, onları şununla döndürmeliyiz yield: */

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator2 = generateSequence();

for (let value of generator2) {

    console.log(value); // 1, 2, 3
}

// Doğal olarak, üreteçler yinelenebilir olduğundan, ilgili tüm işlevleri çağırabiliriz, örneğin yayılma operatörü ...:

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let sequence = [0, ...generateSequence()];

console.log(sequence); // [ 0, 1, 2, 3 ]

/* Yukarıdaki kodda ...generateSequence(), yinelenebilir öğeler dizisine dönüşür (operatör hakkında daha fazla bilgiyi Gerisi ve yayma operatörleri bölümünden okuyabilirsiniz ) */