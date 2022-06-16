const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria', 'Canada'];


const newCountries = []

countries.forEach(getLastTenCountries);

console.log(newCountries);

function getLastTenCountries(_country, index, arr) { //country kullanılmadığı için başına "_" koyduk bu değişkeni boş hgeç gibi bir manası var

   newCountries[index] = arr[(arr.length - 1) - index];
};