const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];


console.log(reverseCountries(countries));

console.log(countries);

function reverseCountries(country) {

    const duplicateCountries = []; // arrayi kopyaladık

    for (let index = 0; index < countries.length; index++) {

        duplicateCountries.push(country[index]);
    };

    duplicateCountries.reverse();

    return duplicateCountries;
};