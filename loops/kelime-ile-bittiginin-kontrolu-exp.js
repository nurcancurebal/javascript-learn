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

const newCountries = [];

for (i = 0; i < countries.length; i++) {

    if (countries[i].endsWith('ia')) {

        newCountries.push(countries[i]);
    }
}

console.log( newCountries == 0 ? 'These are countries ends without ia' : newCountries)