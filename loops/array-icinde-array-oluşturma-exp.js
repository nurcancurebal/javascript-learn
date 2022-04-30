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

for (let index = 0; index < countries.length; index++) {

    newCountries.push([countries[index], countries[index].slice(0, 3).toUpperCase(), countries[index].length]);
};

console.log(newCountries);