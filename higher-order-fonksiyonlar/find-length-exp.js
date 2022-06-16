const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

let countriesFind = countries.find(function (item) {

    return item.length == 6;
});

console.log(countriesFind); // Sweden : uzunluğu 6 olan ilk ülkeyi yazdırdı