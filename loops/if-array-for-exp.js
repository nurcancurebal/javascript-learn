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

const fiveCharacters = [];

for (let index = 0; index < countries.length; index++) {
    if (countries[index].length == 5) {
        fiveCharacters.push(countries[index]);

    };
};
console.log(fiveCharacters);