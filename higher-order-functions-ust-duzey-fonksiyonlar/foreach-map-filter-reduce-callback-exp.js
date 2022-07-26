const numbers = [5, 6, 8, 99, 45, 65];


const mapNumbers = numbers.map(mapCallback);

console.log(mapNumbers);

function mapCallback(number) {

    return number.toString();
};



const filterNumbers = numbers.filter(filterCallback);

console.log(filterNumbers);

function filterCallback(number) {

    return number > 50;
};



numbers.forEach(foreachCallback);

console.log(numbers);

function foreachCallback(num, index) {

    numbers[index] = num + 1;
};



const total = numbers.reduce(reduceCallback);

console.log(total);

function reduceCallback(base, pre) {

    return base + pre;
};