// bir anahtarın olup olmadığını has ile kontrol ederiz. true/ false döner

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
];

const countriesMap = new Map(countries);

console.log(countriesMap.has('Finland')); // true