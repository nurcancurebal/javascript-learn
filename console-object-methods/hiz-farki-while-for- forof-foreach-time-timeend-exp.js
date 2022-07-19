const countries = [
    { name: 'Canada', capital: 'Ottawa' },
    { name: 'Cabo Verde', capital: 'Praia', },
    { name: 'Cayman Islands', capital: 'George Town' },
    { name: 'Central African Republic', capital: 'Bangui' },
    { name: 'Chad', capital: "N'Djamena" },
    { name: 'Chile', capital: 'Santiago' },
    { name: 'China', capital: 'Beijing' }
];


console.time("while loop");

let i = 0;

while (i < countries.length) {

    console.log(countries[i]);
    i++;
};

console.timeEnd("while loop");


console.time('for loop');

for (let i = 0; i < countries.length; i++) {

    console.log(countries[i]);
};

console.timeEnd('for loop');


console.time('for of loop');

for (const i of countries) {

    console.log(i);
};

console.timeEnd('for of loop');


console.time('forEach loop');

countries.forEach((i) => { console.log(i) });

console.timeEnd('forEach loop');


// while loop: 16.137ms = en yavaş
// for loop: 6.437ms
// for of loop: 5.599ms
// forEach loop: 3.491ms = en hızlı