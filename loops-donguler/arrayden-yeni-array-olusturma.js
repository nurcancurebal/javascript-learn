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

for (let i = 0; i < countries.length; i++) {

    newCountries.push(countries[i].toUpperCase());
};

console.log(newCountries);