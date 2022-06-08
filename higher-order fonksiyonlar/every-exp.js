const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesEvery = countries.every(function (item) {

    return item.includes('land');
});

console.log(countriesEvery); // false



const countriesSome = countries.some(function (item) {

    return item.includes('land');
});

console.log(countriesSome); // true