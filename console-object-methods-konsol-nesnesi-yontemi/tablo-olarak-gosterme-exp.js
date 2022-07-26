const countries = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        currency: 'United State Dollar'
    },
    {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        currency: 'Euro'
    },
    {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: 25868000,
        currency: 'Angolan kwanza'
    },
    {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        currency: 'Australian dollar'
    },
    {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        languages: ['Spanish', 'Guaraní'],
        population: 43590400,
        currency: 'Argentine peso'
    },
    {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        currency: 'Armenian dram'
    },
    {
        name: 'Aruba',
        capital: 'Oranjestad',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394,
        currency: 'Aruban florin'
    }
];

console.table(countries);

// ┌─────────┬───────────────────────┬────────────────────┬──────────────────────────────────┬────────────┬─────────────────────────┐
// │ (index) │         name          │      capital       │            languages             │ population │        currency         │
// ├─────────┼───────────────────────┼────────────────────┼──────────────────────────────────┼────────────┼─────────────────────────┤
// │    0    │     'Afghanistan'     │      'Kabul'       │ [ 'Pashto', 'Uzbek', 'Turkmen' ] │  27657145  │    'Afghan afghani'     │
// │    1    │    'Åland Islands'    │    'Mariehamn'     │          [ 'Swedish' ]           │   28875    │         'Euro'          │
// │    2    │       'Albania'       │      'Tirana'      │          [ 'Albanian' ]          │  2886026   │     'Albanian lek'      │
// │    3    │       'Algeria'       │     'Algiers'      │           [ 'Arabic' ]           │  40400000  │    'Algerian dinar'     │
// │    4    │   'American Samoa'    │    'Pago Pago'     │     [ 'English', 'Samoan' ]      │   57100    │  'United State Dollar'  │
// │    5    │       'Andorra'       │ 'Andorra la Vella' │          [ 'Catalan' ]           │   78014    │         'Euro'          │
// │    6    │       'Angola'        │      'Luanda'      │         [ 'Portuguese' ]         │  25868000  │    'Angolan kwanza'     │
// │    7    │      'Anguilla'       │    'The Valley'    │          [ 'English' ]           │   13452    │ 'East Caribbean dollar' │
// │    8    │     'Antarctica'      │         ''         │     [ 'English', 'Russian' ]     │    1000    │   'Australian dollar'   │
// │    9    │ 'Antigua and Barbuda' │   "Saint John's"   │          [ 'English' ]           │   86295    │ 'East Caribbean dollar' │
// │   10    │      'Argentina'      │   'Buenos Aires'   │     [ 'Spanish', 'Guaraní' ]     │  43590400  │    'Argentine peso'     │
// │   11    │       'Armenia'       │     'Yerevan'      │    [ 'Armenian', 'Russian' ]     │  2994400   │     'Armenian dram'     │
// │   12    │        'Aruba'        │    'Oranjestad'    │ [ 'Dutch', '(Eastern) Punjabi' ] │   107394   │     'Aruban florin'     │
// └─────────┴───────────────────────┴────────────────────┴──────────────────────────────────┴────────────┴─────────────────────────┘