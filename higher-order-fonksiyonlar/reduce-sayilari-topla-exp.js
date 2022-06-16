const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersReduce = numbers.reduce(function (num, number) {

    return num + number;
});

console.log(numbersReduce);