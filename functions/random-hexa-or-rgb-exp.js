// generateColors('hexa', 5);
// generateColors('hexa', 1);
generateColors('rgb', 2);
// generateColors('rgb', 1);

function generateColors(hexaRgb, number) {

    if (hexaRgb == 'hexa') {

        const array = [];
        const arrayDiyez = [];
        const endArray = [];

        for (let index = 0; index < 5; index++) {

            const numberGenerator = Math.floor((Math.random() * 100) + 1);
            array.push(numberGenerator);
        };

        const unit = array.join('');
        const convertHexa = Number(unit).toString(16);
        let diyez = '#' + convertHexa;
        arrayDiyez.push(diyez);

        for (let index = 0; index < number; index++) {

            endArray.push(arrayDiyez);
        };

        console.log(endArray);

    } else if (hexaRgb == 'rgb') {

        const rgbColors = [];

        for (let index = 0; index < 3; index++) {

            rgbColors.push(Math.floor((Math.random() * 255) + 1));
        };

        for (let index = 0; index < number; index++) {

            console.log([`rgb(${rgbColors})`]);
        };
    };
};


// TODO level 3 soru 7