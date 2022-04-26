function rgbColorGenerator() {

    const rgbColors = [];

    for (let index = 0; index < 3; index++) {

        rgbColors.push(Math.floor((Math.random() * 255) + 1));
    };

    console.log(typeof rgbColors); // object
    console.log(`rgb(${rgbColors[0]},${rgbColors[1]},${rgbColors[2]})`);
};

rgbColorGenerator();