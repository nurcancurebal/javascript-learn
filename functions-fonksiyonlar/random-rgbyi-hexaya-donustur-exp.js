function convertRgbToHexa() {

    const rgbColors = [];

    for (let index = 0; index < 3; index++) {

        rgbColors.push(Math.floor((Math.random() * 255) + 1));
    };

    let string = rgbColors.join('');
    let hexa = Number(string).toString(16);

    return hexa;
};

console.log(convertRgbToHexa());