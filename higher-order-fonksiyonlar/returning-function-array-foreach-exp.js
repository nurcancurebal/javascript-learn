const countries = [
    "Germany",
    "Denmark",
    "Swiss",
    "Finland",
    "Norway",
    "Australia",
    "Sweden",
    "Holland",
    "Austria",
    "Canada",
    "China",
    "India",
    "United States of America",
    "Indonesia",
    "Brazil",
    "Pakistan",
    "Nigeria",
    "Bangladesh",
    "Japan",
    "Russian Federation",
];


console.log(getFirstTenCountries(countries, 5));


function getFirstTenCountries(array, number) {

    const mochaArray = [];

    countries.forEach(function (country, index) {

        if (index < number) {

            mochaArray.push(country);

        } else if ((array.length / 2) - 3 < index && index < (array.length / 2) + 3) {

            mochaArray.push(country);

        } else if (array.length - number <= index) {

            mochaArray.push(country);
        }
    });

    return mochaArray;
};