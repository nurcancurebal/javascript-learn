console.log(arrayOfHexaColors(5));

function arrayOfHexaColors(sayi) {

    const array = [];

    for (let index = 0; index < sayi; index++) {

        const numberGenerator = Math.floor((Math.random() * 1000) + 1);

        const convertHexa = Number(numberGenerator).toString(16);

        array.push(convertHexa);

    };

    return array;
};