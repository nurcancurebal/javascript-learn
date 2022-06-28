const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];

for (const [country, city] of countries) {

    console.log(country, city);
};

// Finland Helsinki
// Sweden Stockholm
// Norway Oslo


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];

for (const [first, second, third] of fullStack) {

    console.log(first, second, third);
};

// HTML CSS JS
// Node Express MongoDB