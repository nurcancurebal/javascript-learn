const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Estonia'];

let countriesStartsWith = countries.filter(function (country) {

    return country.startsWith('E');
});

console.log(countriesStartsWith); // [ 'Estonia' ]