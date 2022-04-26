console.log('rgb', arrayOfRgbColors());   // rgb (3) [116, 167, 101]
console.log(`rgb ${arrayOfRgbColors()}`);   // rgb 233,17,16
console.log('rgb' + arrayOfRgbColors());    // rgb230,18,121

function arrayOfRgbColors() {

    const rgbColors = [];

    for (let index = 0; index < 3; index++) {

        rgbColors.push(Math.floor((Math.random() * 255) + 1));
    };

    return rgbColors;
};