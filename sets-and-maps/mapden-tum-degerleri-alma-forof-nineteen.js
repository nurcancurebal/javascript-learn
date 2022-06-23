const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
];

const countriesMap = new Map(countries);

for (const country of countriesMap) {

    console.log(country);
};

// [ 'Finland', 'Helsinki' ]
// [ 'Sweden', 'Stockholm' ]
// [ 'Norway', 'Oslo' ]


for (const [countryTwo, city] of countriesMap) {

    console.log(countryTwo, city);
};

// Finland Helsinki
// Sweden Stockholm
// Norway Oslo