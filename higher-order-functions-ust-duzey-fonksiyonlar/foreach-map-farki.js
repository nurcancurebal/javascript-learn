const numbers = [1, 4, 9];


numbers.forEach(function (number, index) {

    numbers[index] = number * 2;
});

console.log(numbers);



const numbersTwo = [1, 4, 9];


const result = numbersTwo.map(function (number) {

    return number * 2;
});

console.log(result);