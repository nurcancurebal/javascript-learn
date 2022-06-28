const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
];

let [ger, fra, , ...nordicCountries]= countries;

console.log(ger);   // Germany

console.log(fra);   // France

console.log(nordicCountries);   // [ 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland' ]