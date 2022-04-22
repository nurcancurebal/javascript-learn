
const macAddress = macAddressGenerator(":");

console.log(macAddress);


function macAddressGenerator(splitOperator) {

    // Tekil hexler.
    const array = [];

    for (let index = 0; index < 6; index++) {
        array.push(hexNumberGenerator());
    };

    // Dizindeki arrayleri belirli ifade ile stringe cevirir.
    const mac = array.join(splitOperator);

    return mac;
};


function hexNumberGenerator() {

    // 17 ile 255 arası sayı üretir.
    const numberGenerator = Math.floor((Math.random() * 239) + 17);

    // Hexedecimal sayıya cevirir.
    const convertHexa = Number(numberGenerator).toString(16);

    // Veriyi upper case yap.
    const hexToUpperCase = String(convertHexa).toUpperCase();

    // Veriyi fonksiyondan dışarı cıkart.
    return hexToUpperCase;
};