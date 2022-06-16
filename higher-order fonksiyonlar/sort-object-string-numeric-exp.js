const countries = [
    {country: 'Germany', capital: 'Berlin', population: 83.24},
    {country: 'Denmark', capital: 'Kopenhag', population: 5.831},
    {country: 'Swiss', capital: 'Bern', population: 8.637},
    {country: 'Finland', capital: 'Helsinki', population: 5.531},
    {country: 'Norway', capital: 'Oslo', population: 5.379},
    {country: 'Australia', capital: 'Kanberra', population: 25.69},
    {country: 'Sweden', capital: 'Stokholm', population: 10.35},
    {country: 'Holland', capital: 'Amsterdam', population: 17.44},
    {country: 'Austria', capital: 'Viyana', population: 8.917}
];

 
const countrySort = countries.sort(function (a,b) {

    return  a.country.localeCompare(b.country);
});

console.log(countries);


const capitalSort = countries.sort(function (a,b) {
    
    return a.capital.localeCompare(b.capital);
});

console.log(capitalSort);


const populationSort = countries.sort(function (a,b) {
    
    return b.population - a.population; // büyükten küçüğe sıralaması için b-a
});

console.log(populationSort);