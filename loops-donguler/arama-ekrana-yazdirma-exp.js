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

let newCountries = [];

for (i = 0; i < countries.length; i++) {

    if (countries[i].includes('land')) {

        newCountries.push(countries[i]);
    }
};

console.log(newCountries.length == 0 ? "All these countries are without land" : newCountries);

// (2) ['Finland', 'Ireland']