const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria', 'Canada', 'IceLand'];


const newCountries = []

countries.forEach(getLastTenCountries);

console.log(newCountries);

function getLastTenCountries(_country, index, arr) {

   newCountries[index] = arr[(arr.length -1)- index];
};



