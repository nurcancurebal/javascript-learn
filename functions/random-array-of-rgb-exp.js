const arrayRgb = [`rgb(${arrayOfRgbColors()})`];

console.log(arrayRgb);

console.log(typeof arrayRgb) // object

function arrayOfRgbColors() {

    const rgbColors = [];

    for (let index = 0; index < 3; index++) {

        rgbColors.push(Math.floor((Math.random() * 255) + 1));
    };

    return rgbColors;
};