const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];


const countriesLength = countries.map(function (country) {

    return country.length;
});

console.log(countriesLength); // [ 7, 6, 7, 6, 7 ]