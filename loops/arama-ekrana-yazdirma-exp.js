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

    if (countries[i].includes('land')) {

        newCountries.push(countries[i]);
    }
}

console.log(newCountries);

//! burada eğer land yoksa 'All these countries are without land' bunu yazdır