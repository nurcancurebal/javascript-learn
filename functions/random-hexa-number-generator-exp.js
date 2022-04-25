function randomHexaNumberGenerator() {

    const randomNumbers = [];

    for (let index = 0; index < 5; index++) {

        const numberGenerator = Math.floor((Math.random() * 100) + 1);
        randomNumbers.push(numberGenerator);
    };

    let unite = randomNumbers.join('');     // sayıları birleştirip string yaptık
    let convertHexa = Number(unite).toString(16);   // stringi numbera çevirip, hexa ya çevirdik
    let diyez = '#'+convertHexa;

    return diyez;
};

console.log(randomHexaNumberGenerator());