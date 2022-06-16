const countries = [
  { country: "China", population: 13 },
  { country: "India", population: 12 },
  { country: "United States of America", population: 32 },
  { country: "Indonesia", population: 25 },
  { country: "Brazil", population: 20 },
  { country: "Pakistan", population: 19 },
  { country: "Nigeria", population: 18 },
  { country: "Bangladesh", population: 16 },
  { country: "Russian Federation", population: 14 },
  { country: "Japan", population: 11 },
];


console.log(mostPopulatedCountries(countries, 5));

console.log(mostPopulatedCountries(countries, 3));


function mostPopulatedCountries(array, number) {

  const sortAesArray = countries.sort(function (a, b) {

    return b.population - a.population;
  });


  const lastFiveArray = sortAesArray.filter(function (item, index) {

    
  });


  return lastFiveArray;
}