const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const numbers = [65, 44, 12, 4];


const bigCountries = countries.map(function (countriesToUpperCase) {

    return countriesToUpperCase.toUpperCase();
});

console.log(bigCountries);  // [ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND' ]



const countriesLength = countries.map(function (country) {

    return country.length;
});

console.log(countriesLength);



const newArr = numbers.map(myFunction);

function myFunction(num) {

    return num * 10;
};

console.log(newArr);    // [ 650, 440, 120, 40 ]



const numbersSquare = numbers.map(function (num) {

    return num ** 2;
});

console.log(numbersSquare);