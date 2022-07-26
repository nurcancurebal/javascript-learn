// JavaScript değişken adı, $ veya _ dışında özel karakterleri veya sembolleri desteklemez. Bir değişkenin geçerli
// veya geçersiz değişken olup olmadığını kontrol eden bir isValidVariable fonksiyonu yazın.

const WRITE_CHAR_LETTER = ["q", "w", "e", "r", "t", "y", "u", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "i", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
const WRITE_CHAR_NUMBER = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const WRITE_CHAR_SPECIAL = ["_", "$"];


const varible = "1aasd123as";

const varibleStatus = isValidVariable(varible);

console.log(varibleStatus);

function isValidVariable(value) {

    const typeOne = [...WRITE_CHAR_LETTER, ...WRITE_CHAR_SPECIAL]; //...(üç nokta) dizini dışarıya cıkartmaya yarar.İkisini arrayde birleştirdi

    if (!typeOne.includes(value[0])) { // burada 0' ıncı indexte letter ve special dışında bir şey varsa geçersiz değişken yazacak, değişkenler sayı ile başlamaz.

        return "Geçersiz değişkendir.";
    };

    const typeTwo = [...WRITE_CHAR_LETTER, ...WRITE_CHAR_SPECIAL, ...WRITE_CHAR_NUMBER]; // üçünü tek arrayde birleştirdik.

    for (let index = 0; index < value.length; index++) {

        if (!typeTwo.includes(value[index])) {

            return "Geçersiz değişkendir.";
        };
    };
    return "Geçerli değişkendir.";
};