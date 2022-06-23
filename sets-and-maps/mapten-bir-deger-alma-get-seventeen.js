// keyi yazıyorsun value' sunu getiriyor

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
];

const map = new Map(countries);

console.log(map.get('Finland'));    // Helsinki

console.log(map.get('Helsinki'));  // undefined