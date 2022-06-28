const countries = [{
    name: 'Germany',
    capital: 'Berlin',
    languages: ['German'],
    population: 81770900,
    flag: 'https://restcountries.eu/data/deu.svg',
    currency: 'Euro'
},
{
    name: 'Ghana',
    capital: 'Accra',
    languages: ['English'],
    population: 27670174,
    flag: 'https://restcountries.eu/data/gha.svg',
    currency: 'Ghanaian cedi'
},
{
    name: 'Gibraltar',
    capital: 'Gibraltar',
    languages: ['English'],
    population: 33140,
    flag: 'https://restcountries.eu/data/gib.svg',
    currency: 'Gibraltar pound'
},
{
    name: 'Greece',
    capital: 'Athens',
    languages: ['Greek (modern)'],
    population: 10858018,
    flag: 'https://restcountries.eu/data/grc.svg',
    currency: 'Euro'
},
{
    name: 'Greenland',
    capital: 'Nuuk',
    languages: ['Kalaallisut'],
    population: 55847,
    flag: 'https://restcountries.eu/data/grl.svg',
    currency: 'Danish krone'
},
{
    name: 'Guatemala',
    capital: 'Guatemala City',
    languages: ['Spanish'],
    population: 16176133,
    flag: 'https://restcountries.eu/data/gtm.svg',
    currency: 'Guatemalan quetzal'
},
{
    name: 'Guernsey',
    capital: 'St. Peter Port',
    languages: ['English', 'French'],
    population: 62999,
    flag: 'https://restcountries.eu/data/ggy.svg',
    currency: 'British pound'
},
{
    name: 'Guinea',
    capital: 'Conakry',
    languages: ['French', 'Fula'],
    population: 12947000,
    flag: 'https://restcountries.eu/data/gin.svg',
    currency: 'Guinean franc'
},
{
    name: 'Holy See',
    capital: 'Rome',
    languages: ['Latin', 'Italian', 'French', 'German'],
    population: 451,
    flag: 'https://restcountries.eu/data/vat.svg',
    currency: 'Euro'
},
{
    name: 'Honduras',
    capital: 'Tegucigalpa',
    languages: ['Spanish'],
    population: 8576532,
    flag: 'https://restcountries.eu/data/hnd.svg',
    currency: 'Honduran lempira'
},
{
    name: 'Hong Kong',
    capital: 'City of Victoria',
    languages: ['English', 'Chinese'],
    population: 7324300,
    flag: 'https://restcountries.eu/data/hkg.svg',
    currency: 'Hong Kong dollar'
},
{
    name: 'Hungary',
    capital: 'Budapest',
    languages: ['Hungarian'],
    population: 9823000,
    flag: 'https://restcountries.eu/data/hun.svg',
    currency: 'Hungarian forint'
},
{
    name: 'Iceland',
    capital: 'Reykjavík',
    languages: ['Icelandic'],
    population: 334300,
    flag: 'https://restcountries.eu/data/isl.svg',
    currency: 'Icelandic króna'
},
{
    name: 'India',
    capital: 'New Delhi',
    languages: ['Hindi', 'English'],
    population: 1295210000,
    flag: 'https://restcountries.eu/data/ind.svg',
    currency: 'Indian rupee'
},
{
    name: 'Indonesia',
    capital: 'Jakarta',
    languages: ['Indonesian'],
    population: 258705000,
    flag: 'https://restcountries.eu/data/idn.svg',
    currency: 'Indonesian rupiah'
},
{
    name: "Côte d'Ivoire",
    capital: 'Yamoussoukro',
    languages: ['French'],
    population: 22671331,
    flag: 'https://restcountries.eu/data/civ.svg',
    currency: 'West African CFA franc'
},
{
    name: 'Iran (Islamic Republic of)',
    capital: 'Tehran',
    languages: ['Persian (Farsi)'],
    population: 79369900,
    flag: 'https://restcountries.eu/data/irn.svg',
    currency: 'Iranian rial'
},
{
    name: 'Iraq',
    capital: 'Baghdad',
    languages: ['Arabic', 'Kurdish'],
    population: 37883543,
    flag: 'https://restcountries.eu/data/irq.svg',
    currency: 'Iraqi dinar'
},
{
    name: 'Ireland',
    capital: 'Dublin',
    languages: ['Irish', 'English'],
    population: 6378000,
    flag: 'https://restcountries.eu/data/irl.svg',
    currency: 'Euro'
},
{
    name: 'Isle of Man',
    capital: 'Douglas',
    languages: ['English', 'Manx'],
    population: 84497,
    flag: 'https://restcountries.eu/data/imn.svg',
    currency: 'British pound'
},
{
    name: 'Israel',
    capital: 'Jerusalem',
    languages: ['Hebrew (modern)', 'Arabic'],
    population: 8527400,
    flag: 'https://restcountries.eu/data/isr.svg',
    currency: 'Israeli new shekel'
},
{
    name: 'Italy',
    capital: 'Rome',
    languages: ['Italian'],
    population: 60665551,
    flag: 'https://restcountries.eu/data/ita.svg',
    currency: 'Euro'
},
{
    name: 'Jamaica',
    capital: 'Kingston',
    languages: ['English'],
    population: 2723246,
    flag: 'https://restcountries.eu/data/jam.svg',
    currency: 'Jamaican dollar'
},
{
    name: 'Japan',
    capital: 'Tokyo',
    languages: ['Japanese'],
    population: 126960000,
    flag: 'https://restcountries.eu/data/jpn.svg',
    currency: 'Japanese yen'
}];


for ({ name, capital, languages, population } of countries) {

    console.log(name, capital, languages, population);
};


// Germany Berlin [ 'German' ] 81770900
// Ghana Accra [ 'English' ] 27670174
// Gibraltar Gibraltar [ 'English' ] 33140
// Greece Athens [ 'Greek (modern)' ] 10858018
// Greenland Nuuk [ 'Kalaallisut' ] 55847
// Guatemala Guatemala City [ 'Spanish' ] 16176133
// Guernsey St. Peter Port [ 'English', 'French' ] 62999
// Guinea Conakry [ 'French', 'Fula' ] 12947000
// Holy See Rome [ 'Latin', 'Italian', 'French', 'German' ] 451
// Honduras Tegucigalpa [ 'Spanish' ] 8576532
// Hong Kong City of Victoria [ 'English', 'Chinese' ] 7324300
// Hungary Budapest [ 'Hungarian' ] 9823000
// Iceland Reykjavík [ 'Icelandic' ] 334300
// India New Delhi [ 'Hindi', 'English' ] 1295210000
// Indonesia Jakarta [ 'Indonesian' ] 258705000
// Côte d'Ivoire Yamoussoukro [ 'French' ] 22671331
// Iran (Islamic Republic of) Tehran [ 'Persian (Farsi)' ] 79369900
// Iraq Baghdad [ 'Arabic', 'Kurdish' ] 37883543
// Ireland Dublin [ 'Irish', 'English' ] 6378000
// Isle of Man Douglas [ 'English', 'Manx' ] 84497
// Israel Jerusalem [ 'Hebrew (modern)', 'Arabic' ] 8527400
// Italy Rome [ 'Italian' ] 60665551
// Jamaica Kingston [ 'English' ] 2723246
// Japan Tokyo [ 'Japanese' ] 126960000