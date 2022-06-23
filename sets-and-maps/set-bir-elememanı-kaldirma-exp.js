const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let set = new Set(number);

const setFilter = set.filter(function (num) {

    return num!= 5;
});

console.log(setFilter);