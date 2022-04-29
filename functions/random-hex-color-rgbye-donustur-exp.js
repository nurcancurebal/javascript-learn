// Hex rengini rgb'ye dönüştüren ve bir rgb rengi döndüren convertHexaToRgb işlevini yazın

const hexColor = "#eb3734"; // sabit bir hex color aldık (kendim seçtim)
const rgbColorConvert = convertHexToRgb(hexColor);

console.log(rgbColorConvert);

function convertHexToRgb(outValue) {

    let value = String(outValue);

    value = value.slice(1); // string olan ifadeden 1. değere kadar kes gerisini value' nun içine at

    let arrayValue = [];

    for (let index = 0; index < 6; index += 2) { // index 2 şer arttığı için index 6'ya kadar dönecek 

        const hex = value.slice(index, index + 2); // 0'ıncı değere kadar kes, 2'nci değer al sonraki dönüşte 2. değere kadar kes , 2 değer al
        arrayValue.push(parseInt(hex, 16)) // hex= 16'lık değer içeriyor, bu 16'lık değeri integera çevir diyoruz.Burada 16' yı yazdık
        // çünkü hex string bir değişken olduğu için bu string değişkenin 16' lık değer içerdiğini belirttik
    };

    return `rgb(${arrayValue[0]},${arrayValue[1]},${arrayValue[2]})`; //arrayValue: (3) [235, 55, 52]
};