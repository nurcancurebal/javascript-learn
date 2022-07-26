//! forEach( return dönmez)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const names = ['Nurcan', 'Erdinç', 'Bal', 'Canada'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



countries.forEach(function (country) {

    console.log(country);
});



const namesForeach = names.forEach(function (name) {

    console.log(name);
});



numbers.forEach(num);

function num(number) {

    console.log(number);
};