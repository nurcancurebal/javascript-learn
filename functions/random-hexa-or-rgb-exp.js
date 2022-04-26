// array hexa

console.log(arrayOfHexaColors(5));

function arrayOfHexaColors(sayi) {

    const array = [];

    for (let index = 0; index < sayi; index++) {

        const numberGenerator = Math.floor((Math.random() * 10000) + 100);

        const convertHexa = Number(numberGenerator).toString(16);
        let diyez = '#'+convertHexa;

        array.push(diyez);

    };

    return array;
};

// array rgb

console.log([`rgb(${arrayOfRgbColors()})`]);

function arrayOfRgbColors() {

    const rgbColors = [];

    for (let index = 0; index < 3; index++) {

        rgbColors.push(Math.floor((Math.random() * 255) + 1));
    };

    return rgbColors;
};