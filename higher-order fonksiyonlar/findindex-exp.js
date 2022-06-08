const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

let countriesFindindex = countries.findIndex(function (item) {

    return item == 'Norway';
});

console.log(countriesFindindex); // 3


let countriesFindindexTwo = countries.findIndex(function (item) {

    return item == 'Russia';
});

console.log(countriesFindindexTwo); // -1