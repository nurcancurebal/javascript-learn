// bir anahtarın olup olmadığını has ile kontrol ederiz. true/ false döner

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
];

const countriesMap = new Map(countries);

console.log(countriesMap.has('Finland')); // true

console.log(countriesMap.has('Canada')); // false