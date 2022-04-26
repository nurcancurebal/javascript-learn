// generateColors('hexa', 3);
 // generateColors('hexa', 1);
 generateColors('rgb', 3);
// generateColors('rgb', 1);

function generateColors(hexaRgb, number) {


    if (hexaRgb == 'hexa') {

        const array = [];

        for (let index = 0; index < number; index++) {

            const numberGenerator = Math.floor((Math.random() * 10000) + 1);
            const convertHexa = Number(numberGenerator).toString(16);
            let diyez = '#' + convertHexa;
            array.push(diyez);
        };
        console.log(array);
    } else {

        const rgbColors = [];

        for (let index = 0; index < number; index++) {

            rgbColors.push(Math.floor((Math.random() * 255) + 1));
        };
        console.log([`rgb(${arrayOfRgbColors()})`]);
    };
};