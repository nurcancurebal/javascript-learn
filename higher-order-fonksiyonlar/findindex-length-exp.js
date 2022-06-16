const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

let countriesFindindex = countries.findIndex(function (item) {

    return item.length == 6;
});

console.log(countriesFindindex); // 1