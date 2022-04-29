const hexColor = "#eb4034";
const rgbColorConvert = convertHexToRgb(hexColor);

console.log(rgbColorConvert);

function convertHexToRgb(outValue) {

    let value = String(outValue);

    value = value.slice(1);

    let arrayValue = [];

    for (let index = 0; index < 6; index += 2) {
        const hex = value.slice(index , index + 2);
        arrayValue.push(parseInt(hex, 16))
    }

    return `rgb(${arrayValue[0]},${arrayValue[1]},${arrayValue[2]})`
};

// TODO Hex rengini rgb'ye dönüştüren ve bir rgb rengi döndüren convertHexaToRgb işlevini yazın