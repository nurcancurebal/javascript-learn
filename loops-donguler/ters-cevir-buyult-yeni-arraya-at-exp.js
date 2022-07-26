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

const countriesReverse = countries.reverse();

const countriesToUpperCase = [];

for (let index = 0; index < countries.length; index++) {

    countriesToUpperCase.push(countriesReverse[index].toUpperCase());
};

console.log(countriesToUpperCase);