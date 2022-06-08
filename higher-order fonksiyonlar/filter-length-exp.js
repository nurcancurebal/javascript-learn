const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia'];

const countriesLength = countries.filter(function (country) {

    return country.length === 6;
});

console.log(countriesLength);