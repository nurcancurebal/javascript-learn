// en kalabalık 10/3/5 ülkeyi olusşturan fonksiyon

const countries = [
  { country: "China", population: 13 },
  { country: "India", population: 12 },
  { country: "United States of America", population: 32 },
  { country: "Indonesia", population: 25 },
  { country: "Brazil", population: 20},
  { country: "Pakistan", population: 19},
  { country: "Nigeria", population: 18 },
  { country: "Bangladesh", population: 16 },
  { country: "Russian Federation", population: 14 },
  { country: "Japan", population: 11 },
];


console.log(mostPopulatedCountries(countries, 5))


function mostPopulatedCountries(array, number) {

  const result = countries.sort(function (a,b) {

    b.population - a.population;

    return array.length = number ;
  });

  return result;
}

/*     console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]
``` */

// TODO
