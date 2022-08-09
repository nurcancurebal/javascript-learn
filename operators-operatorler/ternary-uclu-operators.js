// Üçlü operatör bir koşul yazmaya izin verir. Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır.


let isRaining = true;

isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.');

isRaining = false;

isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.');


// You need a rain coat.
// No need for a rain coat.


let number = 5;
number > 0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a negative number`);
number = -5;

number > 0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a negative number`);

// 5 is a positive number
// -5 is a negative number